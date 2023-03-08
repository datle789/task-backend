import Task from "../models/taskModel";

//create task
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

//get tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

//get a detail task 
const getTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findById(id)
        if (!task) {
            return res.status(404).json(`not found this id ${id}`)
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

//delete task
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findByIdAndDelete(id)
        if (!task) {
            return res.status(404).json(`not found this id ${id}`)
        }
        res.status(200).json("task is deleted")
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

//update a task
const updateTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findByIdAndUpdate(
            { _id: id }, req.body, { new: true, runValidators: true }
        )
        if (!task) {
            return res.status(404).json(`not found this id ${id}`)
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


export { createTask, getTasks, getTask, deleteTask, updateTask }