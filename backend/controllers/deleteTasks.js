const User = require("../model/userSchema");

exports.deleteTodoTasks = async (req, res) => {
  try {

    // fetching the id of todo

    const todoId = req.params.id;

    // fetching the index of a particular task inside the array

    let taskIdx = req.params.index;

    // logic

    // to check whether the todoid is present or not
    const todo = await User.findById(todoId);

    if (!todo) {
      res.status(201).json({
        success: false,
        message: "NO todo exist",
      });
    }

    // if exist then we have to find how many tasks are present in our array

    let arr_of_task = todo.tasks;

    // to remove the specific task from our array

    arr_of_task.splice(taskIdx, 1);
    
    // to update the user inside the mongoose

    await User.updateOne(
    { _id: todoId },
    { tasks: [...arr_of_task] }
    );
 

  // if all done we deleted successfully
 
    res.status(201).json({
      success: true,
      message: "Task deleted succcessfully",
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
