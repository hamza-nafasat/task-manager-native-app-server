import jwt from "jsonwebtoken";
import { User } from "../models/users.js";

export const isAuthenticated = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(401).json({ success: false, message: "Please Login First" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ success: false, message: "Please Login First" });
        }
        req.user = await User.findById(decoded._id);
        next();
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
