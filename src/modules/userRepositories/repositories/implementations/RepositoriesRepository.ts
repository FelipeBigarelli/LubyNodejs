import { getRepository, Repository as Repo } from 'typeorm';

import { ICreateRepositoryDTO } from '../../dtos/ICreateRepositoryDTO';
import { Repository } from '../../entities/Repository';
import { IRepositoriesRepository } from '../IRepositoriesRepository';

class RepositoriesRepository implements IRepositoriesRepository {
  private repository: Repo<Repository>;

  constructor() {
    this.repository = getRepository(Repository);
  }

  async create({
    user_id,
    name,
    description,
    publico,
    slug,
  }: ICreateRepositoryDTO): Promise<Repository> {
    const repository = this.repository.create({
      user_id,
      name,
      description,
      publico,
      slug,
    });

    await this.repository.save(repository);

    return repository;
  }

  async findByName(name: string): Promise<Repository> {
    const repository = await this.repository.findOne(name);

    return repository;
  }

  async findByUser(user_id: string): Promise<Repository> {
    const repository = await this.repository.findOne(user_id);

    return repository;
  }
}

export { RepositoriesRepository };
