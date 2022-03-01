import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const routes = Router();
const userController = new UserController();

routes.post('/', (request, response) => {
	userController.create(request, response);
});

export { routes as usersRoutes };
