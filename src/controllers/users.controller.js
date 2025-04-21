import { User } from "../models/users.model"


export const getAllUser = async (req,res) => {
    const user = await User.find();
    return res.status(200).json(user);
} 
