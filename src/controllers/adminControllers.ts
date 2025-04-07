import { Request, Response } from "express";
import { userService } from "../services/adminServices"
export const userController={
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const users = await userService.getUsers();
      res.status(200).json({ message: "Users fetched successfully", users });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  promoteUser: async (req: Request, res: Response) => {
    try {
      const updatedUser = await userService.updateUserRole(req.params.id, req.body.roleId);
      res.status(200).json({ message: "User role updated successfully", updatedUser });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },
};
