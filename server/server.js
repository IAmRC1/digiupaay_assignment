import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { notFound, errorHandler } from './errorHandlers.js'
import taskRouter from './routes.js'
import { connectDB } from './db.js'

const app = express()

connectDB()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use('/api/v1', taskRouter)
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log('Listening on port', port)
})
