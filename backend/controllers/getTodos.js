
const User=require('../model/userSchema')

exports.getTodos=async (req,res)=>{

    try {

        const getTodos=await User.find();

        if(getTodos){

            res.status(201).json({
                success:true,
                getTodos,
            })
        }
        else{

            res.status(401).json({
                success:false,
                message:"there is no todo created"
            })
        }
        
    } catch (error) {
        
        res.status(401).json({
            success:false,
            message:error.message,
        })
    }
}