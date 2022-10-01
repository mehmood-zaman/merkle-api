import dotenv from 'dotenv';
dotenv.config({ path: __dirname + `/../../.env.${process.env.NODE_ENV}` });

const config = {
  port: process.env.PORT,
  MOVIE_API_BASE_URL: process.env.MOVIE_API_BASE_URL,
  JWT_SECRET: process.env.JWT_SECRET ?? 'asdlhsjlkahsdjflkhsdjflaskhsdjflakhjflkhsdjfkd',
  DB_URL: process.env.DB_URL,
  DB_PASSWORD: process.env.DB_PASSWORD,
};

export default config;
