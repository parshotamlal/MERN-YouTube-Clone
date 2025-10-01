import jwt from "jsonwebtoken";
import user from "../Modals/user.modals.js";


export const auth =async(req,res,next)=> {
    const token =req.cookies.token;
    if(!token) {
        return res.status(401).json({error:'No token,authentication denied'});

    }
    else {
        try {
            const decode =jwt.verify(token,"Its_My_Secret_Key");
            req.user =await user.findById(decode.userId).select('password');
            next();
        
        } catch(error) {
            res.status(401).json({error:'Token is not valid!'})
        }
    }
}