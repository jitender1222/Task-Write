
const User=require('../model/userSchema');

exports.getTodo=async (req,res)=>{

    try {
        
        const todoId=req.params.id;

        const getTodo=await User.findById(todoId);

        if(getTodo != null){

            res.status(201).json({
                success:true,
                message:"TODO found successfully",
                getTodo
            })
        }
        else{

            res.status(401).json({
                success:false,
                message:"Not Found",
            })
        }

    } catch (error) {

        res.status(401).json({
            success:false,
            message:error.message,
        })
    }
}