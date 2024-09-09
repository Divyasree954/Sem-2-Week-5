require('dotenv').config(); // Load .env variables

const express = require('express');
const { sequelize } = require('./src/models/index');
const userRoutes = require('./src/routes/userRouter');

const app = express();
app.use(express.json());

// Use user routes
app.use('/api', userRoutes);

// Sync with the database and start the server
sequelize.sync().then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log('Server is running on port ${port}');
    });
}).catch(error => {
    console.error('Unable to connect to the database:', error);
});