import e from "express";
import { createTodo, getTodo, updateTodo , deleteTodo , getTodoById } from "../controller/todoController.js";

const Router = e.Router();

Router.post("/todos/create", createTodo);

Router.get('/todos/get', getTodo);

Router.put('/todos/put/:id', updateTodo);

Router.delete('/todos/delete/:id', deleteTodo);

Router.get('/todos/:id', getTodoById);

export default Router