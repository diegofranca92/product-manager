import { Router } from 'express'
import { AuthController } from './controller/AuthController'
import { UserController } from './controller/UserController'
import { ProductController } from './controller/ProductController'
import { AuthMiddleware } from './middleware/auth'

export const routes = Router()

const userController = new UserController()

const authController = new AuthController()

const productController = new ProductController()

routes.post('/user', userController.store)

routes.get('/user', AuthMiddleware, userController.index)

routes.post('/auth', authController.authenticate)

// Products
routes.post('/product', AuthMiddleware, productController.store)

routes.get('/product', AuthMiddleware, productController.index)
