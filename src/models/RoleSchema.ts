import mongoose,{Schema,Document} from "mongoose"
export enum RoleType{
    ADMIN="admin",
    ORGANIZER="organizer",
    ATTENDEE="attendee"
}
interface IRole extends Document{
    name:RoleType
}
const RoleSchema:Schema=new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        enum:Object.values(RoleType)
    }
})
export default mongoose.model<IRole>("Role",RoleSchema)