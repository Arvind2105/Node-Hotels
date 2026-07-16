import express from 'express';
import {getPerson, addPerson, updatePerson, deletePerson} from '../controllers/personController.js'

const router = express.Router();


//Get All Persons
router.get("/", getPerson);

//Add a Person
router.post("/addPerson", addPerson);

//Update a Person
router.put("/updatePerson/:id", updatePerson)

// Delete a Person
router.delete("/deletePerson/:id", deletePerson)


export default router;