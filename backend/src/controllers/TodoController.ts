import express, { NextFunction, Request, Response } from "express"
import { TodoService } from '../services'
import { ITodo } from '../interfaces/ITodo'

const list = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const todoList = await TodoService.getAllList()
    res.send(todoList)
  } catch (e) {
    throw(e)
  }
}

export default {
  list,
}