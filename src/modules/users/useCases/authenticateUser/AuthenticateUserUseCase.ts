import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import auth from '../../../../config/auth';
import { AppError } from '../../../../errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { IUserTokensRepository } from '../../repositories/IUserTokensRepository';

interface IRequest {
  username: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
    locale: string;
    avatar: string;
    username: string;
    bio: string;
  };
  user_token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository
  ) {}

  async execute({ username }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByUsername(username);
    const { secret_user_token } = auth;

    if (!user) {
      throw new AppError('Username does not exist');
    }

    const user_token = sign({}, secret_user_token, {
      subject: user.id,
      expiresIn: '1d',
    });

    await this.userTokensRepository.create({
      user_id: user.id,
      user_token,
    });

    return {
      user,
      user_token,
    };
  }
}

export { AuthenticateUserUseCase };
