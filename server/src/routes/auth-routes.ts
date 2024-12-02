import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  // If the user exists and the password is correct, return a JWT token
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: { username }
    });
    if (!user){
      return res.status(401).json({message: 'Authentication failed. Username is incorrect'})
    }
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid){
      return res.status(401).json({ message: 'Password is incorrect.' })
    }
    const secretKey = process.env.JWT_SECRET_KEY || '';
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    return res.json({ token, user_id: user.id });
  } 
  catch (err: any) {
    console.error(err.message)
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

export const newLogin = async (req: Request, res: Response) => {
  try {
    const { username, email } = req.body;
    const identical = await User.findOne({
      where: { username, email }
    });
    if (identical){
      return res.status(401).json({ message: 'User already exists' });
    }
    const secretKey = process.env.JWT_SECRET_KEY || '';
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    return res.json({ token });
  } catch (err: any) {
    console.error(err.message)
    return res.status(500).json({ message: 'Something went wrong' })
  }
}

const router = Router();

// POST /login - Login a user
router.post('/login', login);
router.post('/new', newLogin);

export default router;
