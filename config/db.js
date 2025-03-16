import mongoose from 'mongoose'

export const connectDB = async() =>{
  await mongoose.connect('mongodb+srv://yrajeshkumar799:3S2JRJQPog4EGsOA@cluster0.rp5sr.mongodb.net/food-del').then(()=>{
    console.log("Connected to DB");
  })
}

