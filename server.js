import express from "express";

const fruits = [
  "apple",
  "banana",
  "orange",
  "mango",
  "pineapple",
  "grapes",
  "strawberry",
  "watermelon",
  "kiwi",
  "lemon",
  "lime",
  "coconut",
  "avocado",
  "peach",
  "cherry",
  "blueberry",
  "blackberry",
  "raspberry",
  "apricot",
  "nectarine",
  "plum",
  "guava",
  "mangosteen",
  "dragonfruit",
  "jackfruit",
  "tamarind",
  "clementine",
  "tangerine",
  "papaya",
  "passionfruit",
  "lychee",
  "honeydew",
  "cantaloupe",
  "strawberry",
  "watermelon",
  "kiwi",
  "lemon",
  "lime",
  "coconut",
  "avocado",
  "peach",
  "cherry",
  "blueberry",
  "blackberry",
  "raspberry",
  "apricot",
  "nectarine",
  "plum",
  "guava",
  "mangosteen",
  "dragonfruit",
  "jackfruit",
  "tamarind",
  "clementine",
  "tangerine",
  "papaya",
  "passionfruit",
  "lychee",
  "honeydew",
  "cantaloupe",
];

const server = express();

server.use(express.json());

server.get("/fruit", (req, res, next) => {
  res.status(200);
  res.json(fruits);
});

server.get("/fruit/:id", (req, res, next) => {
  console.log(req.params);

  res.status(200);
  res.json("get one fruit");
});

server.post("/fruit", (req, res, next) => {
  console.log(req.body);

  res.status(201);
  res.json({
    message: "Fruit added successfully",
    statusCode: 201,
    data: "ok",
  });
});
server.put("/fruit/:id", (req, res, next) => {
  res.status(200);
  res.json({
    message: "Fruit changed with put method",
    statusCode: 200,
    data: "ok",
  });
});
server.patch("/fruit/:id", (req, res, next) => {
  res.status(200);
  res.json({
    message: "Fruit changed with patch successfully",
    statusCode: 200,
    data: "ok",
  });
});
server.delete("/fruit/:id", (req, res, next) => {
  res.status(200);
  res.json({
    message: "Fruit deleted successfully",
    statusCode: 200,
    data: "ok",
  });
});

server.listen(7777, () => {
  console.log("http://localhost:7777");
});
