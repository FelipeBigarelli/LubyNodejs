import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import { CreateRepositoryController } from '../modules/userRepositories/useCases/createRepository/CreateRepositoryController';

const repositoriesRoutes = Router();

const createRepositoryController = new CreateRepositoryController();

repositoriesRoutes.use(ensureAuthenticated);
repositoriesRoutes.post('/', createRepositoryController.handle);

export { repositoriesRoutes };
