const express = require("express");

const {
  createTable,
  createQR,
  showAllTables,
  showOneTable,
  updateTable,
  deleteTable
} = require("../controllers/Table.controller");

const route = express.Router();

route.post("/", createTable); // Create a new table in the database
route.post("/qr", createQR); 
route.get("/", showAllTables); // Get all tables data stored on server side and send it to client-side as response
route.get("/:id", showOneTable); // Get one Table by its id and send it to client-side as response
route.put("/:id", updateTable); // Update an existing Table by its id with given details provided through request body
route.delete("/:id", deleteTable); // Delete one or more Tables based upon their ids provided through query parameters

module.exports = route;
// export default router;
