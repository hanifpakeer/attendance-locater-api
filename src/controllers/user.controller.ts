import { Request, Response, Next } from 'restify';

export const getUser = (req: Request, res: Response, next: Next) => {
  res.send({ message: 'User data retrieved successfully!' });
  next();
};