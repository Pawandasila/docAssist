import "dotenv/config";
import express from 'express';
import env from './config/env.config.js'
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))
app.use(morgan('dev'));
app.use(helmet());
const port = env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port} successfully`);
});
