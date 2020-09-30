import { Router } from 'express';
import Brute from 'express-brute';
import BruteRedis from 'express-brute-redis';
import multer from 'multer';
import multerConfig from './config/multer';

// controller
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
import CalendarController from './app/controllers/CalendarController';
import ClientController from './app/controllers/ClientController';
import BillsToReceiveController from './app/controllers/BillsToReceiveController';
import BillsToPayController from './app/controllers/BillsToPayController';
import ProductController from './app/controllers/ProductController';
import CashFlowController from './app/controllers/CashFlowController';

// validate
import validateUserStore from './app/validators/UserStore';
import validateUserUpdate from './app/validators/UserUpdate';
import validateSessionStore from './app/validators/SessionStore';
import validateAppointmentStore from './app/validators/AppointmentStore';
import validateTodoStore from './app/validators/TodoStore';
import validateTodoUpdate from './app/validators/TodoUpdate';
import validateTodoDelete from './app/validators/TodoDelete';
import validateCalendarStore from './app/validators/CalendarStore';
import validateCalendarUpdate from './app/validators/CalendarUpdate';
import validateCalendarDelete from './app/validators/CalendarDelete';
import validateClientStore from './app/validators/ClientStore';
import validateClientUpdate from './app/validators/ClientUpdate';
import validateClientDelete from './app/validators/ClientDelete';
import validateBillsToReceiveStore from './app/validators/BillsToReceiveStore';
import validateBillsToReceiveUpdate from './app/validators/BillsToReceiveUpdate';
import validateBillsToReceiveDelete from './app/validators/BillsToReceiveDelete';
import validateBillsToPayStore from './app/validators/BillsToPayStore';
import validateBillsToPayUpdate from './app/validators/BillsToPayUpdate';
import validateBillsToPayDelete from './app/validators/BillsToPayDelete';
import validateProductStore from './app/validators/ProductStore';
import validateProductUpdate from './app/validators/ProductUpdate';
import validateProductDelete from './app/validators/ProductDelete';
import validateCashFlowStore from './app/validators/CashFlowStore';
import validateCashFlowUpdate from './app/validators/CashFlowUpdate';
import validateCashFlowDelete from './app/validators/CashFlowDelete';

const routes = new Router();
const upload = multer(multerConfig);

const bruteStore = new BruteRedis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

const bruteForce = new Brute(bruteStore);

// users
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

// admins
routes.get('/admins', AdminController.index);
routes.get('/admins/:adminId/available', AvailableController.index);

// appointments
routes.get('/appointments', AppointmentController.index);
routes.post(
  '/appointments',
  validateAppointmentStore,
  AppointmentController.store
);
routes.delete('/appointments/:id', AppointmentController.delete);

// schedule
routes.get('/schedule', ScheduleController.index);

// notifications
routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

// flies
routes.post('/files', upload.single('file'), FileController.store);

// todo
routes.get('/todo', TodoController.index);
routes.post('/todo', validateTodoStore, TodoController.store);
routes.put('/todo/:id', validateTodoUpdate, TodoController.update);
routes.delete('/todo/:id', validateTodoDelete, TodoController.delete);

// calendar
routes.get('/calendar', CalendarController.index);
routes.post('/calendar', validateCalendarStore, CalendarController.store);
routes.put('/calendar/:id', validateCalendarUpdate, CalendarController.update);
routes.delete(
  '/calendar/:id',
  validateCalendarDelete,
  CalendarController.delete
);

// clients
routes.get('/clients', ClientController.index);
routes.post('/clients', validateClientStore, ClientController.store);
routes.put('/clients/:id', validateClientUpdate, ClientController.update);
routes.delete('/clients/:id', validateClientDelete, ClientController.delete);

// receive
routes.get('/receive', BillsToReceiveController.index);
routes.post(
  '/receive',
  validateBillsToReceiveStore,
  BillsToReceiveController.store
);
routes.put(
  '/receive/:id',
  validateBillsToReceiveUpdate,
  BillsToReceiveController.update
);
routes.delete(
  '/receive/:id',
  validateBillsToReceiveDelete,
  BillsToReceiveController.delete
);

// pay
routes.get('/pay', BillsToPayController.index);
routes.post('/pay', validateBillsToPayStore, BillsToPayController.store);
routes.put('/pay/:id', validateBillsToPayUpdate, BillsToPayController.update);
routes.delete(
  '/pay/:id',
  validateBillsToPayDelete,
  BillsToPayController.delete
);

// products
routes.get('/products', ProductController.index);
routes.post('/products', validateProductStore, ProductController.store);
routes.put('/products/:id', validateProductUpdate, ProductController.update);
routes.delete('/products/:id', validateProductDelete, ProductController.delete);

// cashflow
routes.get('/cashflow', CashFlowController.index);
routes.post('/cashflow', validateCashFlowStore, CashFlowController.store);
routes.put('/cashflow/:id', validateCashFlowUpdate, CashFlowController.update);
routes.delete(
  '/cashflow/:id',
  validateCashFlowDelete,
  CashFlowController.delete
);

export default routes;
