import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI)
        console.log("Successfully Connected to mongoDB");
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}

export default connectDB;