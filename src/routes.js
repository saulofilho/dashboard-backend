import { Router } from 'express';
import Brute from 'express-brute';
import BruteRedis from 'express-brute-redis';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middleware/auth';
import FileController from './app/controllers/FileController';
import AdminController from './app/controllers/AdminController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';
import AvailableController from './app/controllers/AvailableController';
import TodoController from './app/controllers/TodoController';

// import TodoController from './app/controllers/TodoController';

// import TodoController from './app/controllers/TodoController';

// import TodoController from './app/controllers/TodoController';

// import TodoController from './app/controllers/TodoController';

// import TodoController from './app/controllers/TodoController';

// import TodoController from './app/controllers/TodoController';

import validateUserStore from './app/validators/UserStore';
import validateUserUpdate from './app/validators/UserUpdate';
import validateSessionStore from './app/validators/SessionStore';
import validateAppointmentStore from './app/validators/AppointmentStore';
import validateTodoStore from './app/validators/TodoStore';
import validateTodoUpdate from './app/validators/TodoUpdate';
import validateTodoDelete from './app/validators/TodoDelete';

// import validateTodoStore from './app/validators/TodoStore';
// import validateTodoUpdate from './app/validators/TodoUpdate';
// import validateTodoDelete from './app/validators/TodoDelete';

// import validateTodoStore from './app/validators/TodoStore';
// import validateTodoUpdate from './app/validators/TodoUpdate';
// import validateTodoDelete from './app/validators/TodoDelete';

// import validateTodoStore from './app/validators/TodoStore';
// import validateTodoUpdate from './app/validators/TodoUpdate';
// import validateTodoDelete from './app/validators/TodoDelete';

// import validateTodoStore from './app/validators/TodoStore';
// import validateTodoUpdate from './app/validators/TodoUpdate';
// import validateTodoDelete from './app/validators/TodoDelete';

// import validateTodoStore from './app/validators/TodoStore';
// import validateTodoUpdate from './app/validators/TodoUpdate';
// import validateTodoDelete from './app/validators/TodoDelete';

// import validateTodoStore from './app/validators/TodoStore';
// import validateTodoUpdate from './app/validators/TodoUpdate';
// import validateTodoDelete from './app/validators/TodoDelete';

const routes = new Router();
const upload = multer(multerConfig);

const bruteStore = new BruteRedis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

const bruteForce = new Brute(bruteStore);

routes.post('/users', validateUserStore, UserController.store);
routes.post(
  '/sessions',
  bruteForce.prevent,
  validateSessionStore,
  SessionController.store
);

routes.get('/', (req, res) => res.send('ok'));

routes.use(authMiddleware);

routes.put('/users', validateUserUpdate, UserController.update);

routes.get('/admins', AdminController.index);
routes.get('/admins/:adminId/available', AvailableController.index);

routes.get('/appointments', AppointmentController.index);
routes.post(
  '/appointments',
  validateAppointmentStore,
  AppointmentController.store
);
routes.delete('/appointments/:id', AppointmentController.delete);

routes.get('/schedule', ScheduleController.index);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/todo', TodoController.index);
routes.post('/todo', validateTodoStore, TodoController.store);
routes.put('/todo/:id', validateTodoUpdate, TodoController.update);
routes.delete('/todo/:id', validateTodoDelete, TodoController.delete);

// routes.get('/client', TodoController.index);
// routes.post('/client', validateTodoStore, TodoController.store);
// routes.put('/client/:id', validateTodoUpdate, TodoController.update);
// routes.delete('/client/:id', validateTodoDelete, TodoController.delete);

// routes.get('/product', TodoController.index);
// routes.post('/product', validateTodoStore, TodoController.store);
// routes.put('/product/:id', validateTodoUpdate, TodoController.update);
// routes.delete('/product/:id', validateTodoDelete, TodoController.delete);

// routes.get('/cashflow', TodoController.index);
// routes.post('/cashflow', validateTodoStore, TodoController.store);
// routes.put('/cashflow/:id', validateTodoUpdate, TodoController.update);
// routes.delete('/cashflow/:id', validateTodoDelete, TodoController.delete);

// routes.get('/pay', TodoController.index);
// routes.post('/pay', validateTodoStore, TodoController.store);
// routes.put('/pay/:id', validateTodoUpdate, TodoController.update);
// routes.delete('/pay/:id', validateTodoDelete, TodoController.delete);

// routes.get('/receive', TodoController.index);
// routes.post('/receive', validateTodoStore, TodoController.store);
// routes.put('/receive/:id', validateTodoUpdate, TodoController.update);
// routes.delete('/receive/:id', validateTodoDelete, TodoController.delete);

// routes.get('/calendar', TodoController.index);
// routes.post('/calendar', validateTodoStore, TodoController.store);
// routes.put('/calendar/:id', validateTodoUpdate, TodoController.update);
// routes.delete('/calendar/:id', validateTodoDelete, TodoController.delete);

export default routes;
