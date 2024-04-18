import {Router} from 'express'
import { outRequire } from '../middlewares/validateToken.js'
import { deleteTask, updateTask, createTask, getTask, getTasks } from '../controllers/tasks.controles.js'

const router = Router()

router.get('/tasks',outRequire, getTasks)
router.get('/tasks/:id',outRequire, getTask)
router.post('/tasks',outRequire, createTask)
router.delete('/tasks/:id',outRequire, deleteTask)
router.put('/tasks/:id',outRequire, updateTask)



export default router 