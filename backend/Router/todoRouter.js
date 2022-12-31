

const express=require("express");
const { createTodo } = require("../controllers/createTodo");
const { deleteTodoTasks } = require("../controllers/deleteTasks");
const { deleteTodo } = require("../controllers/deleteTodo");
const { editTodoTasks } = require("../controllers/editTodoTasks");
const { editTitle } = require("../controllers/editTodoTitle");
const { getTodo } = require("../controllers/getTodo");
const { getTodos } = require("../controllers/getTodos");
const { taskTodo } = require("../controllers/taskTodo");

const router=express.Router();

router.get('/',(req,res)=>{

    res.send("this message is sending by the router");
})


// TODO

router.post('/createtodo',createTodo);
router.get('/gettodos',getTodos);
router.get('/gettodo/:id',getTodo);
router.delete('/deletetodo/:id',deleteTodo);

// edit TODO title

router.put('/edittitle/:id',editTitle);


// tasks

router.post('/createtask/:id',taskTodo);
router.delete('/deletetask/:id/:index',deleteTodoTasks);

// edit TODO Tasks

router.put('/edittodotasks/:id/:index',editTodoTasks);




module.exports=router;