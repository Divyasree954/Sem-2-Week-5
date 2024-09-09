const express = require('express');
const sequelize = require('./src/config/database');
const employeeRoutes = require('./src/routes/employee');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/employee', employeeRoutes);

sequelize.sync().then(() => {
    console.log('Database synced');
    app.listen(process.env.PORT || 3000, () => {
        console.log('Server running on port 3000');
    });
});
