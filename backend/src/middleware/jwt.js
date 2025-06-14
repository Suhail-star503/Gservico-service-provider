import jwt from "jsonwebtoken";
const jwtAuth = (req, res, next) => {
    const token=req.headers.authorization;

    if (!token) {
        return res.status(401).send({error: 'Unauthorized,Login to continue'});
    }
     try {
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userID = payload.userID;
        next();
    } catch (error) {
       return res.status(401).send({error: 'Unauthorized, Invalid token'});
    }
};
export default jwtAuth;
