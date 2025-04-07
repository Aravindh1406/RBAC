import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const connection_String=process.env.CONNECTION_STRING as string
console.log(connection_String)
const connectDB=async()=>{
    try{
        const  CONNECT=await mongoose.connect(connection_String)
        console.log("DB connected")
        console.log(`Host Name: ${CONNECT.connection.host}`)
        console.log(`DB Name: ${CONNECT.connection.name}`)
    }
    catch(err:any){
        console.log(err.message)
    }
}
export default connectDB