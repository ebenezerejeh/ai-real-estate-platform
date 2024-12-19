import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/db.js';
import User from './models/userModel.js';

//load environment variables from .env
dotenv.config()
connectDB()

const seedUsers = async()=>{

    try {
        // await User.deleteMany(); // Clears existing data
        const users = [
          {
            name: "Admin User",
            email: "admin@example.com",
            // password: "123456",
            // isAdmin: true,
          },
          {
            name: "John Doe",
            email: "john@example.com",
            // password: "123456",
            // isAdmin: false,
          },
        ];
        await User.insertMany(users);
        console.log("Users seeded successfully!");
        process.exit();
      } catch (error) {
        console.error("Error seeding users:", error);
        process.exit(1);
      }
    };

    seedUsers();


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on localhost Port ${PORT}`)
})