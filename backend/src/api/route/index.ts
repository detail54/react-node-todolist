import { Router } from "express";
import TodoRouter from './TodoRouter'

const router = Router()

router.use('./todos', TodoRouter)

export default router