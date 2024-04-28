import mongoose from "mongoose";

export const connectDB = async (uri, dbName) => {
    try {
        const response = await mongoose.connect(uri, { dbName });
        const { name, host, port } = response.connection;
        console.log(`DB ${name} is connected on mongodb://${host}:${port}`);
    } catch (error) {
        console.error(`MongoDB connection failed ${error.message}`);
        process.exit(1);
    }
};
