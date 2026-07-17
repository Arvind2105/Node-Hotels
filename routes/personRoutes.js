import express from 'express';
import {
  getPerson,
  addPerson,
  updatePerson,
  deletePerson,
} from '../controllers/personController.js';
import passport from '../middleware/auth.js';

const router = express.Router();
const localPassportAuthMiddleware = passport.authenticate('local', { session: false });

//Get All Persons
router.get('/', localPassportAuthMiddleware, getPerson);

//Add a Person
router.post('/addPerson', addPerson);

//Update a Person
router.put('/updatePerson/:id', updatePerson);

// Delete a Person
router.delete('/deletePerson/:id', deletePerson);

export default router;
