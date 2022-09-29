# Backend using Express.js, Mongoose.js for Task Assignment App

# 3 Collections - Teams, Employees, Tasks

# Models
Teams: {
    name: String,
    employees: String[]
}
Employees: {
    name: String,
    hasTask: Boolean,
    teamId: String (ref Team)
}
Tasks: {
    name: String,
    teamId: String (ref Team),
    employeedId: String (ref Employee)
}

# Functionality
Connect to local instance of mongodb &
Seed Teams & Employees data &
install deps & spin the server
`npm i && npm run dev`


# Note
More functionality can be added as per the requirement.