import Todo from '../models/Todo'

const getAllList = () => {
  const todo = new Todo()
  return todo.get
}

export default {
  getAllList,
}