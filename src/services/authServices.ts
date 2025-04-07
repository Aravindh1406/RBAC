import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/UserSchema"
import generateToken from "../utils/jwt";
export const registerUser=async(name:string,email:string,password:string,roleId:mongoose.Types.ObjectId)=>{
    try{
        const existingUser=await User.findOne({email})
        if(existingUser){
            throw new Error("User already Exists")
        }
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)
        const newUser=await User.create({
            name,
            email,
            password:hashedPassword,
            roleId
        })
        newUser.save()
        return newUser
    }
    catch(err:any){
        console.log(err.message)
        throw new Error(err.message)
    }
}
export const loginUser=async(email:string,password:string)=>{
    try{
        const user=await User.findOne({email}).populate<{ roleId: { _id: mongoose.Types.ObjectId; name: string } }>("roleId","name")
        if(!user){
            throw new Error("User Not Found")
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            throw new Error("Invalid Credentials")
        }
        return generateToken(user.id, user.name, user.roleId._id, user.roleId.name)
    }
    catch(err:any){
        console.log(err.message)
        throw new Error(err.message)
    }
}