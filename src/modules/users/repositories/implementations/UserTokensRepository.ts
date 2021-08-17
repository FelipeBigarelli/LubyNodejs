import { getRepository, Repository } from 'typeorm';

import { ICreateUserTokenDTO } from '../../dtos/ICreateUserTokenDTO';
import { UserTokens } from '../../entities/UserTokens';
import { IUserTokensRepository } from '../IUserTokensRepository';

class UserTokensRepository implements IUserTokensRepository {
  private repository: Repository<UserTokens>;

  constructor() {
    this.repository = getRepository(UserTokens);
  }

  async create({
    user_id,
    user_token,
  }: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = this.repository.create({
      user_id,
      user_token,
    });

    await this.repository.save(userToken);

    return userToken;
  }
}

export { UserTokensRepository };
