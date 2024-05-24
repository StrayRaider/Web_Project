const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const UserSchema = new mongoose.Schema({
  id: { type: String,default: () => uuidv4(),required:true},
  name: { type: String, required: true },
  surname:{ type: String, required: true },
  gender:{ type: String, required: true },
  phonenumber: { type: String, required: true },
  email:{ type: String, unique: true, required: true },
  password: { type: String, required: true },
  dob: {type: String, required: true},
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  cart: [{ 
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, default: 1 }
  }],
  role: {type:String, required: true},
})
module.exports = mongoose.model("User", UserSchema);
