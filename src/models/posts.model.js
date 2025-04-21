import mongoose from "mongoose";

const postShema = new mongoose.Schema(
    {
        title: {type: String, require: true, index: true, trim: true, lowercase:true, },
        description: {type: String, require: true, index: true, trim: true, lowercase:true, },
        comments: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}],
        owner: [{type: mongoose.Schema.Types.ObjectId, ref: "User",} ],
        likes: {type: Number, default: 0, }
    }
    ,{timestamps:true})

export const Post = mongoose.model("Post", postShema);