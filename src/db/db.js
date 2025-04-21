import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONG_URL);
        console.log(`database has been connected succesfully at host:${connectionInstance.connection.host}`)
    } catch (error) {
        console.log('database connection Error: ', error.message)
    }
}

export default connectDB;