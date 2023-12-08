import mongoose from "mongoose";

export const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log("mongoDB connected successfully");
        })
        connection.on('error', (error) => {
            console.log("mongoDB connection error", error);
            process.exit();
        })
    } catch (error) {
        console.log("something went wrong.", error); 
    }
}