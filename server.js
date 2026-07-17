import express from 'express';
import db from './config/db.js';
import personRoutes from './routes/personRoutes.js';
import menuRoutes from './routes/menuRoutes.js';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to read JSON request body
app.use(express.json());

// Routes
app.use('/persons', personRoutes);
app.use('/menu', menuRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
