const User = require('../models/userModel');

const signUp = async ( req , res ) => {
    try{
        const { firstName , lastName , email , facialId } = req.body;
        const checkUser = await User.findOne( { facialId : facialId } )
        if( checkUser ){
            return res.status(401).json({
                success : false ,
                message : 'User Already exist'
            })
        }
        const response = await User.create({
            firstName : firstName ,
            lastName : lastName ,
            email : email ,
            facialId : facialId
        })
        if(response){
            return res.status(200).json({
                success : true ,
                data : response ,
                message : 'sign up successful'
            })
        }
    }catch(error){
        return res.status(500).json({
            success : false ,
            message : error ,
        })
    }
}

const login = async ( req , res ) => {
    try{
        const { facialId } = req.body;
        const checkUser = await User.findOne( { facialId : facialId } )
        if( !checkUser ){
            return res.status(401).json({
                success : false ,
                message : 'User does not exist'
            })
        }

        return res.status( 200 ).json({
            success : true ,
            data : checkUser ,
            message : "login successful"
        })
    }catch(error){
        return res.status(500).json({
            success : false ,
            message : error ,
        })
    }
}

module.exports = { signUp , login };