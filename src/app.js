const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
const sequelize = require('./config/db');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/tasks', taskRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Sync database and start server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
