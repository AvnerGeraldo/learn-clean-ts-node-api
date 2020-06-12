import express from 'express'
import setupMiddlewares from './middlewares'
import setupRoutes from './routes'

const app = express()
setupMiddlewares(app)
setupRoutes(app)
const PORT = 5050

export default app
export { PORT }
