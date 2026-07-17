import Menu from '../models/menu.js';

const getMenues = async (req, res) => {
  try {
    const menues = await Menu.find();
    console.log('Menu Fetched Successfully');
    res.json(menues);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const addMenu = async (req, res) => {
  try {
    const data = req.body;
    const newData = new Menu(data);
    const saveMenu = await newData.save();
    console.log('New Menu addeded to DB');
    res.json(saveMenu);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const updateMenu = async (req, res) => {
  try {
    const menuID = req.params.id;
    const menuDataToUpdate = req.body;
    const updateMenu = await Menu.findByIdAndUpdate(menuID, menuDataToUpdate, {
      new: true, // return updated document
      runValidators: true,
    });
    res.json({'Menu Item Updates in DB': updateMenu});
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const deleteMenu = async (req, res) => {
  try {
    const menuID = req.params.id;
    const deletedMenu = await Menu.findByIdAndDelete(menuID);
    res.json({ 'Menu Item Deleted Successfully': deleteMenu });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

export { getMenues, addMenu, updateMenu, deleteMenu };
