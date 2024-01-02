const dbConnect = require("./mongodb");

const deleteData = async () => {
  let data = await dbConnect();
  let result = await data.deleteOne({ name: "Product 2" });
  // to delete many records Use deleteMany
  console.log(result);
  console.log("Database deleted");
};

deleteData();
