import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  locale: string;
  avatar: string;
  username: string;
  bio: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    locale,
    avatar,
    username,
    bio,
  }: IRequest): Promise<void> {
    const checkUserAlreadyExists = await this.usersRepository.findByEmail(
      email
    );

    if (checkUserAlreadyExists) {
      throw new AppError('Username already exists');
    }

    await this.usersRepository.create({
      name,
      email,
      locale,
      avatar,
      username,
      bio,
    });
  }
}

export { CreateUserUseCase };
