const User = require("../model/userSchema");

exports.editTodoTasks = async (req, res) => {
  try {
    // index of the particular elemment in the tasks
    const tasksIndex = req.params.index;
    // console.log(tasksIndex);

    // id of todo
    const todoId = req.params.id;
    // console.log(todoId);

    const todo=await User.findById(todoId);

    if (!todo) {
      res.status(401).json({
        success: false,
        message: "TODO not exist",
      });
    }

    const text = req.body.task;
    console.log(text);

    let Oldtask =todo.tasks;

    Oldtask[tasksIndex]=req.body.task;
    // console.log(req.body.task);

    // console.log( "before update" + " " +Oldtask);

    Oldtask = await User.findByIdAndUpdate(todoId,{tasks:Oldtask});

    // console.log("New task"+" "+Oldtask);

    res.status(201).json({
      success: true,
      message: "Tasks edit successfully",
      Oldtask
    });
  } catch (error) {
    res.status(401).json({

        success:false,
        message:error.message
    })
  }
};
