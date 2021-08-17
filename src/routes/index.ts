import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { repositoriesRoutes } from './repositories.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/repositories', repositoriesRoutes);
router.use(authenticateRoutes);

export { router };
