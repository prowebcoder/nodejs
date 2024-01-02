const dbConnect = require("./mongodb");

const updateData = async () => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: "Product 3" },
    { $set: { price: "Low" } }
  );
  // to delete many records Use deleteMany
  console.log(result);
};

updateData();
