import {Router} from 'express';
import { CourseUnitController } from './controller/CourseUnitController';
import {UserController} from './controller/UserController'

const userController = new UserController()
const activyController = new UserController()
const courseUnitController = new CourseUnitController()

const routes = Router();

routes.post('/user', userController.create);
routes.post('/activy', activyController.create);
routes.post('/courseuunit', courseUnitController.create);

export default routes;