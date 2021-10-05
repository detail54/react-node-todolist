import mongoose from "mongoose"
import { ITodo } from '../interfaces/ITodo'

const TodoSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
})

export default mongoose.model<ITodo & mongoose.Document>("Todo", TodoSchema)
