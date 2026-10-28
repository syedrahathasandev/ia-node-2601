import todo from "../models/Todo.js";

// create todo

export const createTodo = async (req, res ) => {
    try{
        const newTodo = await todo.create({
            todo: req.body.todo
        })
        return res.status(201).json({
            message:"Todo Created Successfully",
            data: newTodo
        });
    }
    catch(e){
        return res.status(500).json({
            message:"Failed to Created Todo ",
            error: e.message,
        });
    }
}