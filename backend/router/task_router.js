const taskRouter = require("express").Router();
const taskController = require("../controllers/task_controller");

taskRouter.post("/addNewTask", taskController.addNewTask);
taskRouter.post("/updateTask", taskController.updateTask);
taskRouter.post("/deleteTask", taskController.deleteTask);
taskRouter.get("/listAllTasks", taskController.listAllTasks);
taskRouter.post("/listTasksById",taskController.listTasksById);

module.exports = taskRouter;
