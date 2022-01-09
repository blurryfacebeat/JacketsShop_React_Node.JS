import dotenv from 'dotenv';
import express from 'express';
import * as mongoose from 'mongoose';
import { JacketRouter } from '@/router';

dotenv.config();
const PORT = process.env.PORT || 8000;
const DB_URL = process.env.DB_URL || '';

const app = express();
app.use(express.json());
app.use('/api', JacketRouter);

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () =>
      console.log(`⚡️[server]: Server is running at ${PORT} PORT`)
    );
  } catch (error) {
    console.log(error);
  }
};

startApp();
