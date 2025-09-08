import mongoose from "mongoose";
const buyerSchema= new mongoose.Schema({
  buyerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: String,
  contact: String,
  addressId: String
});
const Buyer= mongoose.model("Buyer",buyerSchema);
export default Buyer;