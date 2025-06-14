import ServiceModel from "./serviceSchema.js";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";
export default class ServiceRepository {
    static async postService({ service, user, date, worktype, description }) {
        try {
            const newService = new ServiceModel({
                service,
                user: new ObjectId(user), // Ensure user is an ObjectId
                date,
                worktype,
                description
            });
            const savedService = await newService.save();
            
            return savedService;
        } catch (error) {

            throw new Error(error);
        }
    }


    static async getAllService(user) {
        try {
            
            const services = await ServiceModel.find({ user: user })
            return services;
        } catch (error) {
            throw new Error(error);
        }
    }
}