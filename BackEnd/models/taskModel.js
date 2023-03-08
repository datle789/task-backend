import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "please add your task"]
        },
        completed: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }

)

const Task = mongoose.model('Task', taskSchema)
export default Task