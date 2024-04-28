import { config } from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./config/database.js";
import { configureCloudinary } from "./utils/cloudinary.js";

config();

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
