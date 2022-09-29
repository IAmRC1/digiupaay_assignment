import express from 'express'
import { Team } from './models/team.js'
import { Employee } from './models/employee.js'
import { Task } from './models/task.js'

const taskRouter = express.Router()

taskRouter.get('/teams', async (req, res) => {
    const teams = await Team.find({}, 'name')
    res.json({ data: teams, message: 'teams loaded successfully!' })
})

taskRouter.post('/assign', async (req, res) => {
    const { teamId } = req.body
    const freeEmployees = await Employee.where({ hasTask: false, teamId }).find({})
    if (freeEmployees.length > 0) {
        await Employee.findByIdAndUpdate({ _id: freeEmployees[0]._id }, { hasTask: true }, { upsert: true })
        const task = await Task.findOneAndUpdate({ teamId }, { ...req.body, employeeId: freeEmployees[0]._id }, { upsert: true })
        res.status(201).json({ data: task, message: 'task assigned successfully!' })
    } else {
        res.status(200).json({ data: {}, message: 'no free employees available!' })
    }
})

export default taskRouter
