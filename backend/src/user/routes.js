import express from 'express';
import UserController from './controller.js';
const userRouter = express.Router();
import jwtAuth from '../middleware/jwt.js';
// const usersController = new UserController();
userRouter.post('/signup', (req,res)=>{
    UserController.signup(req,res);
});
userRouter.post('/login', (req,res)=>{
    UserController.login(req,res);
});
userRouter.post('/logout', jwtAuth, (req, res) => {
    UserController.logout(req, res);
});
// backend route (e.g., /api/user/check-auth)
userRouter.get('/check-auth', jwtAuth, (req, res) => {
    res.json({ authenticated: true });
});
userRouter.get('/getbyid', jwtAuth, (req, res) => {
    UserController.getById(req, res);
});

export default userRouter;