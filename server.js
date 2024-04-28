import { app } from "./app.js";
import { config } from "dotenv";
import { connectDB } from "./config/database.js";
import cloudinary from "cloudinary";
import { configureCloudinary } from "./utils/cloudinary.js";

config();

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUD_API_KEY,
//     api_secret: process.env.CLOUD_API_SECRET,
// });

(async () => {
    try {
        await configureCloudinary();
        await connectDB(process.env.MONGO_URI, "task-manager-mobile-app");
        app.listen(process.env.PORT, () => {
            console.log("Server is running on port " + process.env.PORT);
        });
    } catch (error) {
        console.log("something went wrong", error);
    }
})();
