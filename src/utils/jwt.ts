import jwt from "jsonwebtoken";
import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config()
const generateToken=(userId:mongoose.Types.ObjectId,name:string,roleId:mongoose.Types.ObjectId,rolename:string)=>{
return jwt.sign({userId,name,roleId,rolename},process.env.JWT_SECRET as string,{expiresIn:"1h"})
}
export default generateToken