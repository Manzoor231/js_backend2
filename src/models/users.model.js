import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {type: String, require: true, index: true, trim: true, lowercase:true, },
        email: {type: String, require: true, index: true, trim: true, lowercase:true, },
        password: {type: String, require: true, },
        posts: [{type: mongoose.Schema.Types.ObjectId, ref: "Post",} ],
    }
    ,{timestamps:true})

export const User = mongoose.model("User", userSchema);