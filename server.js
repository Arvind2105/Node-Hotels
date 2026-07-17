import express from 'express';
import db from './config/db.js';
import personRoutes from './routes/personRoutes.js';
import menuRoutes from './routes/menuRoutes.js';
import 'dotenv/config';
import passport from './middleware/auth.js';
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to read JSON request body
app.use(express.json());

//to use the passport authentication we need to initialize it.
app.use(passport.initialize());

// Routes
app.use('/persons', personRoutes);
app.use('/menu', menuRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
