import express from 'express';
import db from './config/db.js';
import personRoutes from './routes/personRoutes.js';
import menuRoutes from './routes/menuRoutes.js';

const app = express();
const port = 3000;

// Middleware to read JSON request body
app.use(express.json());

// Routes
app.use('/persons', personRoutes);
app.use('/menu', menuRoutes);

// Start server
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
