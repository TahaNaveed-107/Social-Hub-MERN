import jwt from "jsonwebtoken"

const authneticateToken = (req,res,next)=>{
    const token = req.header("Authorization")?.split(' ')[1];

    if(!token){
        return res.status(401).json({message: "No Token, authorization denied"})
    }

    jwt.verify(token, process.env.SECRET_KEY,(err,decoded)=>{
        if (err){
            res.status(403).json({message: "Token Not Valid"});
        }
        req.user = decoded;
        next();
    })
}
export default authneticateToken;