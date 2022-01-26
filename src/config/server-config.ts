import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import proxy from '../app/create-proxy';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(proxy);

export default app;
