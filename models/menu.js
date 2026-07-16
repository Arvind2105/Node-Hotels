import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  tasteType:{
    type: String,
    required: true
  },
  is_drink: {
    type: String
  },
  ingredients: {
    type: String,
    enum: ["black salt, pepper, chilly, honey "],
    required: true
  }
});

const Menu = mongoose.model('Menu', menuSchema);
export default Menu;