import { Router } from 'express'
import { getAll, create, getById, updateById, deleteById } from '../controllers/user.js'
import { validateAuth, validateAdmnin } from '../middleware/auth.js'

const router = Router()

router.post('/', create)
router.get('/', validateAuth, getAll )
router.get('/:id', validateAuth, getById)
router.patch('/:id', validateAuth, updateById)
router.delete('/:id', validateAuth, deleteById)


export default router
