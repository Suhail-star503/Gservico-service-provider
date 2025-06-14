import express from 'express';
import jwtAuth from '../middleware/jwt.js';
import ServiceController from './controller.js';
let ServiceRouter=express.Router();
ServiceRouter.post('/',jwtAuth, (req,res)=>{
    ServiceController.postService(req,res);
});
ServiceRouter.get('/',jwtAuth, (req,res)=>{
    ServiceController.getAllServicebyUserId(req,res);
});
export default ServiceRouter;
