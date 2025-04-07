import User from "../models/UserSchema";
import mongoose from "mongoose";

export const userService = {
  getUsers: async () => {
    return await User.find().populate("roleId", "name");
  },

  updateUserRole: async (userId: string, roleId: mongoose.Types.ObjectId) => {
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");

    user.roleId = roleId;
    await user.save();
    return user;
  },
};
