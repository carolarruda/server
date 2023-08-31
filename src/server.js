import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import usersRouter from './routes/user.js'
import authRouter from './routes/auth.js'
import recipesRouter from './routes/recipe.js'


const app = express()
app.disable('x-powered-by')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', usersRouter)
app.use('/recipes', recipesRouter)
app.use('/', authRouter)

app.get('*', (req, res) => {
  res.status(404).json({
    status: 'fail',
    data: {
      resource: 'Sorry, your resource was not found'
    }
  })
})

export default app
