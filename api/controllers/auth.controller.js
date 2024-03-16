import { model } from "mongoose";
import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res) => {
   const { username, email, password } = req.body;

   try {
      // Check if password is provided
      if (!password) {
         return res.status(400).json({ error: 'Password is required' });
      }

      // Hash the password
      const hashedPassword = bcryptjs.hashSync(password, 10);

      // Create a new user instance
      const newUser = new User({ username, email, password: hashedPassword });

      // Save the new user to the database
      await newUser.save();

      // Respond with success message
      res.status(201).json({ message: "User created successfully" });
   } catch (error) {
      // Handle errors
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Internal Server Error" });
   }
};
