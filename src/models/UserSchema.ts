import mongoose,{Schema,Document} from "mongoose"
interface IUser extends Document{
    name:string,
    email:string,
    password:string,
    roleId:mongoose.Types.ObjectId,
}
const UserSchema:Schema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    roleId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Role",
        required:true
    }
})
export default mongoose.model<IUser>("User",UserSchema)