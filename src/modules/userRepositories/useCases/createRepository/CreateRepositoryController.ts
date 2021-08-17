import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateRepositoryUseCase } from './CreateRepositoryUseCase';

class CreateRepositoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { name, description, publico, slug } = request.body;

    const createRepositoryUseCase = container.resolve(CreateRepositoryUseCase);

    const repository = await createRepositoryUseCase.execute({
      user_id: id,
      name,
      description,
      publico,
      slug,
    });

    console.log(repository);

    return response.status(201).json(repository);
  }
}

export { CreateRepositoryController };
