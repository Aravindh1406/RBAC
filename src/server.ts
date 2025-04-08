import express from 'express'
import dotenv from "dotenv"
import conectDB from "./config/db"
import roleRoutes from "./routes/roleRoutes"
import authRoutes from "./routes/authRoutes"
import adminRoutes from "./routes/adminRoutes"
import eventRoutes from "./routes/eventRoutes"
conectDB()
dotenv.config()
const app=express()
app.use(express.json())
app.use("/api/roles", roleRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/events", eventRoutes)
const port=process.env.PORT
app.listen(port,()=>{
    console.log("Server started")
    console.log(`server running on PORT:${port}`)
})