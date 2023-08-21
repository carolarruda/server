import { Router } from 'express'

import { create } from '../controllers/recipe.js'

import { validateAuth } from '../middleware/auth.js'

const router = Router()

router.get('/')
router.post('/', validateAuth, create)

export default router
