import e from "express";
import { createTodo, getTodo, updateTodo , deleteTodo } from "../controller/todoController.js";

const Router = e.Router();

Router.post("/todos/create", createTodo);

Router.get('/todos/get', getTodo);

Router.put('/todos/put/:id', updateTodo);

Router.delete('/todos/delete/:id', deleteTodo);

export default Router