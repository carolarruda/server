import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import usersRouter from './routes/user.js'

const app = express()
app.disable('x-powered-by')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use("/recipes", recipeRouter);
app.use('/users', usersRouter)

app.get('*', (req, res) => {
  res.status(404).json({
    status: 'fail',
    data: {
      resource: 'Sorry, your resource was not found'
    }
  })
})

export default app
