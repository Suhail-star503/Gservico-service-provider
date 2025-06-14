import UserRepository from "./repositary.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export default class UserController {
    static async signup(req, res) {
        try {
            
            const { email, password, name, phone, country } = req.body;
            const hashedPassword = await bcrypt.hash(password, 12);
            if (!hashedPassword) {
                throw new ApplicationError("Having issue in hasing the password", 400);
            }
            const result = await UserRepository.signup({ email, hashedPassword, name, phone, country });
            
            res.status(201).json({ message: "User created successfully", user: result });
        }

        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await UserRepository.findByEmail(email);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ error: "Invalid credentials" });
            }
            const token = jwt.sign(
                { userID: user._id, email: user.email },
                process.env.JWT_SECRET_KEY,
                { expiresIn: '24h' }
            );
            
            return res.status(200).json({
                success: true,
                message: "You have successfully logged in",
                token: token,
                
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    }
    
    static async getById(req,res){
        try {
            const userId = req.userID; 
            const user = await UserRepository.findById(userId);
            if (!user) {
                return res.status(404).json({ error: "User not found", status: false });
            }
            return res.status(200).json({ user:user,status: true });
        } catch (error) {
            return res.status(500).json({ error: error.message, status: false });
        }
    }
}

