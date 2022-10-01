import { ApplicationError } from '../utils/ApiError';
import { Service } from 'typedi';
import { LoggerClient } from './LoggerClient';
import * as redis from 'redis';
import axios from 'axios';
import config from '../config/Config';

@Service()
export default class UserService {
  constructor(public logger: LoggerClient) {}

  searchMovies = async (title: string, year: string, type: string) => {
    try {
      const redisClient = redis.createClient({
        url: config.DB_URL,
        password: config.DB_PASSWORD,
      });

      redisClient.on('error', (error) => console.error(`Error : ${error}`));

      await redisClient.connect();

      let results;
      let isCached = false;
      if (redisClient) {
        const cacheResults = await redisClient.get(JSON.stringify({ title, year, type }));

        if (cacheResults) {
          isCached = true;
          results = JSON.parse(cacheResults);
        } else {
          results = await fetchApiData(title, year, type);
          if (results.length === 0) {
            throw 'API returned an empty array';
          }
          await redisClient.set(JSON.stringify({ title, year, type }), JSON.stringify(results), {
            EX: 180,
            NX: true,
          });
        }
        return {
          fromCache: isCached,
          results,
        };
      }
    } catch (error) {
      throw error;
    }
  };
}
async function fetchApiData(title: string, year: string, type: string) {
  try {
    const apiResponse = await axios.get(`${process.env.MOVIE_API_BASE_URL}&t=${title}&y=${year}&type=${type}`);
    return apiResponse.data;
  } catch (error) {
    throw error;
  }
}
