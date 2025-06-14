import UserModel from "./userSchema.js";
export default class UserRepository {
    static async signup(user) {
        try {
            const { email, hashedPassword, name, phone,country } = user;
            const password= hashedPassword; // Assuming hashedPassword is already hashed
            const newUser = new UserModel({ name, email, password, phone,country });
            // Save the user to the database
            await newUser.save();
            return newUser;
        } catch (error) {
            throw new Error("Error signing up user: " + error.message);
        }
    }
    static async findByEmail(email){
        try{
            const user=await UserModel.findOne({ email });
            return user;
        }catch(error){
            throw new Error("Error finding user by email: " + error.message);
        }
    }
    static async findById(userId) {
        try {
            const user = await UserModel.findById(userId);
            if (!user) {
                throw new Error("User not found");
            }
            return user;
        } catch (error) {
            throw new Error( error.message);
        }
    }
}