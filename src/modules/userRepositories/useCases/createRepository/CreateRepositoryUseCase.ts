import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { IRepositoriesRepository } from '../../repositories/IRepositoriesRepository';

interface IRequest {
  user_id: string;
  name: string;
  description: string;
  publico: boolean;
  slug: string;
}

@injectable()
class CreateRepositoryUseCase {
  constructor(
    @inject('RepositoriesRepository')
    private repositoriesRepository: IRepositoriesRepository
  ) {}

  async execute({
    user_id,
    name,
    description,
    publico,
    slug,
  }: IRequest): Promise<void> {
    const checkRepositoryExists = await this.repositoriesRepository.findByName(
      name
    );

    if (checkRepositoryExists) {
      throw new AppError('Repository already exists');
    }

    // console.log(user_id);

    await this.repositoriesRepository.create({
      user_id,
      name,
      description,
      publico,
      slug,
    });
  }
}

export { CreateRepositoryUseCase };
