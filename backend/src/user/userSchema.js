import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'is invalid']
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  phone:{
    type: String,
    required: true,
    match: [/^\d{10}$/, 'is invalid'] 
  },
  country:{
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
const UserModel = mongoose.model('Users', userSchema);
export default UserModel;
