import mongoose from "mongoose"

const { MONGO_URI = 'mongodb://localhost/27017' } = process.env

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI)
  } catch (e) {
    console.error(e.message)
  }
}

export default connectDB;