import {Router} from 'express'
import { outRequire } from '../middlewares/validateToken.js'

const router = Router()

router.get('/tasks',outRequire,(req,res)=>{
    res.send('task')
})


export default router 