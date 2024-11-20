import { Request, Response, NextFunction } from 'express';
import  { verify }  from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // verify the token exists and add the user data to the request object
  try {
    const authHeader = req.headers.authorization;
    if (authHeader){
      const token = authHeader.split(' ')[1];
      const secretKey = process.env.JWT_SECRET_KEY || '';
      verify(token, secretKey, (err, user)=>{
        if (err){
          return res.sendStatus(403);
        }
        req.user = user as JwtPayload;
        return next();
      });
    }
    else {
      res.sendStatus(401);
    }
  } 
  catch (err: any) {
    console.error(err.message);
  }
};
