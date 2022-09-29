import mongoose from 'mongoose'
const { Schema } = mongoose

const employeeSchema = new Schema({
    name: String,
    hasTask: Boolean,
    teamId: { type: Schema.Types.ObjectId, ref: 'Team' }
})

export const Employee = mongoose.model('Employee', employeeSchema)
