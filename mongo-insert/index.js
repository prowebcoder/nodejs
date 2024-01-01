const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany([
    {
      name: "Glass 1",
      size: "large",
      color: "red",
      price: "high",
      imgSrc: "prod.png",
    },
    {
      name: "Glass 2",
      size: "medium",
      color: "blue",
      price: "medium",
      imgSrc: "prod.png",
    },
    {
      name: "Glass 3",
      size: "large",
      color: "yellow",
      price: "low",
      imgSrc: "prod.png",
    },
    {
      name: "Glass 4",
      size: "small",
      color: "red",
      price: "high",
      imgSrc: "prod.png",
    },
    {
      name: "Glass 5",
      size: "small",
      color: "green",
      price: "low",
      imgSrc: "prod.png",
    },
    {
      name: "Glass 6",
      size: "large",
      color: "indigo",
      price: "medium",
      imgSrc: "prod.png",
    },
    {
      name: "Glass 7",
      size: "medium",
      color: "blue",
      price: "high",
      imgSrc: "prod.png",
    },
  ]);
  if (result.acknowledged) {
    console.log("Data Instered");
  }
};

insert();
