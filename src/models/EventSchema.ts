import mongoose,{Schema,Document} from "mongoose"
interface IEvent extends Document{
   title:string,
   description:string,
   date:Date,
   organizerId:mongoose.Types.ObjectId,
   attendees:mongoose.Types.ObjectId[]
}
const EventSchema:Schema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
        default:Date.now
    },
    organizerId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    attendees:[{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    }]
})
export default mongoose.model<IEvent>("Event",EventSchema)