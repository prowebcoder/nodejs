const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/prowebcoder");
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  size: String,
  color: String,
});

const saveInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = new Product({
    name: "max 100",
    price: 200,
    size: "maxx",
    color: "Mobile",
  });
  const result = await data.save();
  console.log(result);
};
saveInDB();
const updateInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.updateOne(
    { name: "Glass 6" },
    {
      $set: { price: 550, name: "max pro 6" },
    }
  );
  console.log(data);
};
// updateInDB();
const deleteInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.deleteOne({ name: "Glass 7" });
  console.log(data);
};
const findInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.find({ name: "Glass 3" });
  console.log(data);
};
// deleteInDB();
// findInDB();
