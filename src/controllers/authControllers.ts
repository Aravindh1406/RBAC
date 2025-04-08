import { registerUser,loginUser } from "../services/authServices";
import { Request, Response } from "express";
import { logInfo } from "../utils/logger";
export const register=async(req:Request,res:Response)=>{
    try{
        const {name,email,password,roleId}=req.body
        const user=await registerUser(name,email,password,roleId)
        logInfo(`User registered: ${user.name}`)
        res.status(201).json(user)
    }
    catch(err:any){
        console.log(err.message)
        res.status(500).json({message:err.message})
    }
}
export const login=async(req:Request,res:Response)=>{
    try{
        const token=await loginUser(req.body.email,req.body.password)
        console.log(token)
        res.json({message:"login Successful",token})
    }
    catch(err:any){
        console.log(err.message)
        res.status(500).json({message:err.message})
    }
}