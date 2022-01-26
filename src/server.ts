import server from './config/server-config';

const PORT = process.env.PORT || 80;

server.listen(PORT, () => {
  console.log(`API Gateway running at ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
