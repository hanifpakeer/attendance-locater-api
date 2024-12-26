import restify from 'restify';
import { logger } from './middleware/logger.middleware';
import { userRoutes } from './routes/user.routes';

export const createServer = () => {
  const server = restify.createServer({
    name: 'Restify Bootstrap Project',
    version: '1.0.0',
  });

  // Middleware
  server.use(restify.plugins.queryParser());
  server.use(restify.plugins.bodyParser());
  server.use(logger);

  // Routes
  userRoutes(server);

  return server;
};