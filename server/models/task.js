import mongoose from 'mongoose'
const { Schema } = mongoose

const taskSchema = new Schema({
    name: String,
    teamId: { type: Schema.Types.ObjectId, ref: 'Team' },
    employeeId: { type: Schema.Types.ObjectId, ref: 'Employee' }
})

export const Task = mongoose.model('Task', taskSchema)
