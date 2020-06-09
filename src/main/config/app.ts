import express from 'express'
import setupMiddlewares from './middlewares'

const app = express()
setupMiddlewares(app)
const PORT = 5050

export default app
export { PORT }
