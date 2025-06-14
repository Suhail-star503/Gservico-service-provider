import mongoose from 'mongoose';
const serviceSchema = new mongoose.Schema({
    service: {
        type: String,
        required: true,
        trim: true
    },
    
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'Users',
        required: true
    },
    date: {
        type: String,
        required: true,
        match: [/^\d{2}-\d{2}-\d{4}$/, 'is invalid'] // DD-MM-YYYY format
    },
    worktype: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
// Create the User model
const ServiceModel = mongoose.model('Services', serviceSchema);
export default ServiceModel;
