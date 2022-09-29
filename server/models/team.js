import mongoose from 'mongoose'
const { Schema } = mongoose

const teamSchema = new Schema({
    name: String,
    employees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }]
})

export const Team = mongoose.model('Team', teamSchema)
