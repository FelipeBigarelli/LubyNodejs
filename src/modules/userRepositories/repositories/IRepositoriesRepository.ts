import { ICreateRepositoryDTO } from '../dtos/ICreateRepositoryDTO';
import { Repository } from '../entities/Repository';

interface IRepositoriesRepository {
  create({
    user_id,
    name,
    description,
    publico,
    slug,
  }: ICreateRepositoryDTO): Promise<Repository>;
  findByName(name: string): Promise<Repository>;
  findByUser(user_id: string): Promise<Repository>;
}

export { IRepositoriesRepository };
