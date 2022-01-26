import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

const endpointsList = JSON.parse(process.env.ENDPOINTS);
const msAddressesList = JSON.parse(process.env.MS_ADDRESSES);

endpointsList.forEach((endpoint: string, index: number) => {
  app.use(endpoint, createProxyMiddleware(msAddressesList[index]));
});

export default app;
