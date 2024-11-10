import { userModel } from "../models/userModel.js";

///api/v1/users/register
const register = async(req, res)=>{
    try {
        console.log(req.body);
        const {username, email, password} = req.body;

        return res.status(201).json({
            ok: true,
            msg: 'User ok'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error server'
        })
    }
};

///api/v1/users/login
const login = async(req, res)=>{
    try {
        console.log(req.body)
        //const {username, email, password} = 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error server'
        })
    }
};

export const userController = {
    register,
    login
}