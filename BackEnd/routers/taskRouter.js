import express from 'express';
import Task from '../models/taskModel'
import { createTask, getTasks, getTask, deleteTask, updateTask } from '../controllers/taskController';
const route = express.Router();

route.route('/').get(getTasks).post(createTask);

route.route('/:id').get(getTask).delete(deleteTask).put(updateTask).patch(updateTask);


// //create a task
// route.post('/', createTask);

// //Get data
// route.get('/', getTasks)
// // get a detail data
// route.get('/:id', getTask)
// // delete a task
// route.delete('/:id', deleteTask)
// //update a task
// route.put('/:id', updateTask)
// //update a task but only a column
// route.patch('/:id', updateTask)

export default route;