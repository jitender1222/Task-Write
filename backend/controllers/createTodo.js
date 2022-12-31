const User = require("../model/userSchema");

exports.createTodo = async (req, res) => {
  try {
    const { title} = req.body;

    // check the title coming from frontend is present or not .

    if (!title) res.status(401).send("Title is required");

    // if (typeof title != String) res.status(401).send("Not Valid");

    //   if title is present

    const newTodoTitle = new User({
      title,
    });

    const createNewTodo = await newTodoTitle.save();

    res.status(201).json({
      success: true,
      createNewTodo,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
