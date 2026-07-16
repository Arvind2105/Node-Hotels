import express from 'express';
import { getMenues, addMenu, updateMenu, deleteMenu} from '../controllers/menuController.js'

const router = express.Router();


//Get All Menus
router.get("/", getMenues);

//Add a Menu
router.post("/addMenu", addMenu);

//Update a Menu
router.put("/updateMenu/:id", updateMenu)

// Delete a Menu
router.delete("/deleteMenu/:id", deleteMenu)


export default router;