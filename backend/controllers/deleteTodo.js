const User = require("../model/userSchema");

exports.deleteTodo = async (req, res) => {
  try {
    const getId = req.params.id;

    const delTodo = await User.findByIdAndDelete(getId);

        if(delTodo !=null){
            res.status(201).json({
            success:true,
            message:"Todo Deleted Successfully",
            delTodo,
        })
    }
    else{
        res.json({
            message:"TODO already deleted"
        })
    }

    } catch (error) {
    res.status(401).json({
        success:false,
        message:error.message,
    })
  }
};
