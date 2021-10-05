import { Router } from "express";
import { TodoController } from '../../controllers'

const router = Router()

router.use('/list', TodoController.list)

export default router