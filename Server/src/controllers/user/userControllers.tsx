import express, { Router, Request, Response, NextFunction } from "express";
import UsersDTO from "../../models/UsersDTO";
import Shobeh from "../../models/BranchsDTO";
import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import AuthMiddleware from "../../middlewares/authmiddleware";

const router = Router()




router.get("/", async (req: Request, res: Response) => {




    return await res.json({ message: "User Controller" })

})








export default router;
