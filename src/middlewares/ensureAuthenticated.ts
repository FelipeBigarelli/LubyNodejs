import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import auth from '../config/auth';
import { AppError } from '../errors/AppError';
import { UsersRepository } from '../modules/users/repositories/implementations/UsersRepository';

interface IPayload {
  sub: string;
}

// middleware para verificar se o user está autenticado
export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  // [0] antes da ,
  // [1]: token
  // separar (split) delimitado pelo espaço
  const [, token] = authHeader.split(' ');

  // verify trabalha com lançamento de excessão, entao colocar try/catch
  try {
    // verify retorna: iat, exp e sub
    // sub: vai conter o id do user
    const decoded = verify(token, auth.secret_user_token);

    // se decoded retornar um user valido
    const { sub } = decoded as IPayload; //  forçar decoded para tipo TokenPayLoad

    request.user = {
      id: sub,
    };

    return next();
  } catch (err) {
    throw new AppError('Invalid JWT token', 401);
  }
}
