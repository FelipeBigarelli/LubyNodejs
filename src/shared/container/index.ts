import { container } from 'tsyringe';

import { RepositoriesRepository } from '../../modules/userRepositories/repositories/implementations/RepositoriesRepository';
import { IRepositoriesRepository } from '../../modules/userRepositories/repositories/IRepositoriesRepository';
import { UsersRepository } from '../../modules/users/repositories/implementations/UsersRepository';
import { UserTokensRepository } from '../../modules/users/repositories/implementations/UserTokensRepository';
import { IUsersRepository } from '../../modules/users/repositories/IUsersRepository';
import { IUserTokensRepository } from '../../modules/users/repositories/IUserTokensRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository
);

container.registerSingleton<IRepositoriesRepository>(
  'RepositoriesRepository',
  RepositoriesRepository
);
