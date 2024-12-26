import { Server } from 'restify';
import { getUser } from '../controllers/user.controller';

export const userRoutes = (server: Server) => {
  server.get('/users', getUser);
};