import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
import User from "../models/UserSchema"
import { RoleType } from "../models/RoleSchema"
interface AuthRequest extends Request {
    user?: any
}
export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction): void => {
    try {
        const token = req.header("Authorization")?.split(" ")[1]
        if (!token) {
            res.status(401).json({ message: "Token is Missing" })
            return
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string)
        req.user = decoded
        console.log(decoded)
        next()
    }
    catch (err: any) {
        console.log(err.message)
        res.status(400).json({ message: "Invalid Token" })
    }
}

export const authorizeRole = (allowedRoles: RoleType[]) => {
    return async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
        try {
            // const data=await User.findById(req.user.id).populate("roleId","name")
            // console.log(data) 
            const userId = req.user.userId || req.user.id;
            if (!userId) {
                res.status(401).json({ message: "Invalid token payload" });
                return
            }

            const data = await User.findById(userId).populate("roleId", "name");
            console.log(data)
            if (!data || !allowedRoles.includes((data.roleId as any).name)) {
                res.status(403).json({ message: "Access Denied" })
                return
            }
            next()
        }
        catch (err: any) {
            console.log(err.message)
            res.status(400).json({ message: "Invalid Token" })
        }
    }
}