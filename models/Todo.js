import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
    {
        todo: {
            type: String,
            required: true,
            index: true
        }
    },
    {
        incomplete: {
            type: Boolean,
            default: false,
            index: true
        }
    },
    {

        timestamps: true

    },
)
const todo = mongoose.model("todo", todoSchema);

export default todo;