import mongoose from 'mongoose'

export const connectDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/task', { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("connected to db"))
    .catch(err => {
        console.log(err.stack);
        process.exit(1);
    })
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
