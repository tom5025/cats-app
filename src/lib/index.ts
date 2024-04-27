import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import { NextApiResponse } from 'next';

export * from './networktools';


export const createToken = (userId: string, email: string) => {
  return jwt.sign({ userId, email }, (process.env as any).JWT_SECRET, { expiresIn: '1h' });
};

export const setTokenCookie = (res: NextApiResponse, token: string): void => {
  const cookie = serialize('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 3600 // 1 hour
  });

  res.setHeader('Set-Cookie', cookie);
};
