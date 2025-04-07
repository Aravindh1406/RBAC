import { Request,Response } from "express";
import { createRole, getAllRoles } from "../services/roleServices";
export const create=async(req:Request,res:Response)=>{
    try{
        const {name}=req.body
        const newRole=await createRole(name)
        res.status(201).json({message:"Role Created Successfully",newRole})
    }
    catch(err:any){
        console.log(err.message)
        res.status(500).json({message:err.message})
    }
}
export const getAll=async(req:Request,res:Response)=>{
    try{
        const roles=await getAllRoles()
        res.status(200).json({message:"Roles Fetched Successfully",roles})
    }
    catch(err:any){
        console.log(err.message)
        res.status(500).json({message:err.message})
    }
}