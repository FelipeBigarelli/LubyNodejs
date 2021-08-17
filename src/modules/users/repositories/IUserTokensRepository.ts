import { ICreateUserTokenDTO } from '../dtos/ICreateUserTokenDTO';
import { UserTokens } from '../entities/UserTokens';

interface IUserTokensRepository {
  create({ user_id, user_token }: ICreateUserTokenDTO): Promise<UserTokens>;
}

export { IUserTokensRepository };
