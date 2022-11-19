import mongoose from 'mongoose';
import config from '../config/Config';
if (config.DB_URL)
  mongoose.connect(config.DB_URL, {}, () => {
    console.log('MongoDB connection established');
  });

export default mongoose;
