import { Router } from 'express'
import { login, loginGoogle } from '../controllers/auth.js'

const router = Router()

router.post('/login', login)
router.post("/google", loginGoogle)


export default router
