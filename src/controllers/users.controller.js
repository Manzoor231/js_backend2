import { User } from "../models/users.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import throwIf from "../utils/throwIf.js";
import mongoose from "mongoose";

// fetch users from database
export const getAllUser = asyncHandler(async (req, res, next) => {
  const user = await User.find();
  throwIf(user.length === 0, 404, "User Not Found");
  return ApiResponse(res, 200, { message: "User Fetched", user });
});

// creating user
export const createUser = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;
  const userExist = await User.findOne({ username });
  throwIf(userExist, 400, "Uuser Already Exist");
  const user = await User.create({ username, email, password });
  return ApiResponse(res, 201, { msg: "User Created", user });
});

export const getUserById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  throwIf(!mongoose.Types.ObjectId.isValid(id),400, "Wrong UserId Format")
  const user = await User.findById(id);
  throwIf(!user, 404, "user not there with this id");
  return ApiResponse(res, 200, { msg: "User Found By Id", data: user });
});

export const editUserById = asyncHandler(async (req, res, next) => {
  const { username, email } = req.body;
  const { id } = req.params;
  throwIf(!mongoose.Types.ObjectId.isValid(id),400, "Wrong UserId Format")
  const user = await User.findByIdAndUpdate(id, {
    username: username,
    email: email,
  });
  throwIf(!user, 400, "User not found or not created");
  return ApiResponse(res, 200, { msg: "User Updated Succesfully", updatedUser: user });
});

export const deleteUserById = asyncHandler(async(req,res,next) => {
    const {id} = req.params;
    throwIf(!mongoose.Types.ObjectId.isValid(id),400, "Wrong UserId Format")
    const user = await User.findByIdAndDelete(id);
    throwIf(!user,400, "user not deleted or wrong UserId");
    return ApiResponse(res, 200, {msg:"User Deleted Successfully", deletedUser: user});
})