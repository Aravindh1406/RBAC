import Role from "../models/RoleSchema"
import { RoleType } from "../models/RoleSchema"
export const createRole=async(name:RoleType)=>{
    try{
        const existingRole=await Role.findOne({name})
        if(existingRole){
            throw new Error("Role already Exists")
        }
        const newRole=new Role({name})
        newRole.save()
        return newRole
    }
    catch(err:any){
        console.log(err.message)
        throw new Error(err.message)
    }
}
export const getAllRoles=async()=>{
    try{
        const roles=await Role.find()
        return roles
    }
    catch(err:any){
        console.log(err.message)
        throw new Error(err.message)
    };
}