import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import User from "./routers/User.js";
import morgan from "morgan";
import fileUpload from "express-fileupload";

export const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    fileUpload({
        limits: { fileSize: 50 * 1024 * 1024 },
        useTempFiles: true,
    })
);
app.use(cors());

app.use("/api/v1", User);

app.get("/", (req, res) => {
    res.send("Server is working");
});
