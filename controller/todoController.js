import todo from "../models/Todo.js";

// Create todo

export const createTodo = async (req, res) => {
    try {
        const newTodo = await todo.create({
            todo: req.body.todo
        })
        return res.status(201).json({
            message: "Todo Created Successfully",
            data: newTodo
        });
    }
    catch (e) {
        return res.status(500).json({
            message: "Failed to Created Todo ",
            error: e.message,
        });
    }
}

// Update todo

export const updateTodo = async (req, res) => {
    try {
        const updateTodo = await todo.findByIdAndUpdate(
            req.params.id,
            {
                todo: req.body.todo
            },
            {
                new: true
            }
        );

        if (!updateTodo) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        return res.status(200).json({
            message: "Todo Update Successfully",
            data: updateTodo,
        });
    }
    catch (e) {
        return res.status(500).json({
            message: "failed update todo",
            error: e.message,
        });
    }
}


//Get todo

export const getTodo = async (req, res) => {
    try {
        const { search, sort, page = 1, limit = 20 } = req.query;
        let query = {};

        if (search) {
            query.todo = {
                $regex: search,
                $options: "i"
            };
        }

        let sortOption = {};
        if (sort === "asc") {
            sortOption.createdAt = 1;
        } else {
            sortOption.createdAt = -1;
        }

        const skip = (page - 1) * limit;

        const todos = await todo.find(query)
            .sort(sortOption)
            .skip(skip)
            .limit(parseInt(limit));

        const totalTodos = await todo.countDocuments(query);

        return res.status(200).json({
            success: true,
            message: "todo loaded successfully",
            total: totalTodos,
            page: Number(page),
            limit: Number(limit),
            data: todos,
        });
    }
    catch (e) {
        return res.status(500).json({
            message: "failed load todo",
            error: e.message,
        });
    }
}

//Delete todo

export const deleteTodo = async (req, res) => {
    try {
        const deleteTodo = await todo.findByIdAndDelete(req.params.id);
        if (!deleteTodo) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        return res.status(200).json({
            message: "Todo Delete Successfully",
            data: deleteTodo,
        });
    }
    catch (e) {
        return res.status(500).json({
            message: "failed delete todo",
            error: e.message,
        });
    }
}