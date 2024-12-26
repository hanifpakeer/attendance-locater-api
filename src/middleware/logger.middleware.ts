import { Request, Response, Next } from 'restify';

export const logger = (req: Request, res: Response, next: Next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
};