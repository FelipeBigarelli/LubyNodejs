import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  username: string;
}

@injectable()
class FindUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ username }: IRequest): Promise<User> {
    const checkUserExists = await this.usersRepository.findByUsername(username);

    if (!checkUserExists) {
      throw new AppError('Username not found');
    }

    return checkUserExists;
  }
}

export { FindUserUseCase };
