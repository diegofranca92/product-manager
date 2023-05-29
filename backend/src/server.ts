import express from 'express'
import { routes } from './routes'
import cors from 'cors'
import swaggerDefs from './swagger.json'
import swaggerUI from 'swagger-ui-express'

const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDefs))

app.listen(3333, () => {
  console.log('Express server listening on port 3333')
})
