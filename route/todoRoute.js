import e from "express";
import { createTodo } from "../controller/todoController.js";

const Router = e.Router();

Router.post("/", createTodo);


export default Router