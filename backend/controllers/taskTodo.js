const User = require("../model/userSchema");

exports.taskTodo = async (req, res) => {
  
  try {
    const todoId = req.params.id;
    const todo = await User.findById(todoId);

    if (!todo)
      return res.status(400).json({
        success: false,
        message: "To-Do not exist",
      });

      // add
    else {
      const text = req.body.title;
      todo.tasks.push(text);                                                                          
      await todo.save();

      res.status(201).json({
        message: "Task added successfully",
        success: true,
        text,
      });
    }
  } catch (error) {
    res.status(401).json({
      message: error.message,
      success: false,
    });
  }
};
