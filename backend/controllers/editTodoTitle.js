const User = require("../model/userSchema");

exports.editTitle = async (req, res) => {

    try {

      // getting the todoId using params

        const todoId = req.params.id;

     // check whether todo is present or not

    const todo=await User.findById(todoId);

    if (!todo) {
      res.status(401).json({
        success: false,
        message: "TODO NOT Found",
      });
    }

    else{

    const titleText = req.body;

    let title=todo.title;

    // one method to update the title

    // title=await User.updateOne(
    //     {_id:todoId},
    //     {title:titleText});
    // console.log(title);

    // other method to update the title

    title=await User.findByIdAndUpdate(todoId,titleText);
    console.log(title);

    res.status(201).json({
      success: true,
      message: "Title updated successfully",
      titleText,
    });
}
        
    } catch (error) {
        
        res.status(401).json({
          success:false,
          message:error.message,
        })
    }
};
