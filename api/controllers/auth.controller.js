import { model } from "mongoose";
import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

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

export const signin = async (req, res, next) => {
   const { email, password } = req.body;
   try {
     const validUser = await User.findOne({ email });
     if (!validUser) return next(errorHandler(404, 'User not found!'));
     const validPassword = bcryptjs.compareSync(password, validUser.password);
     if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
     const token = jwt.sign({ id: validUser._id }, 'Vedant123');
     const { password: pass, ...rest } = validUser._doc;
     res
       .cookie('access_token', token, { httpOnly: true })
       .status(200)
       .json(rest);
   } catch (error) {
     next(error);
   }
 };

