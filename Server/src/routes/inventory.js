const express = require("express");
const inventorySchema = require("../models/inventory");
const { removeAllListeners } = require("nodemon");
const router = express.Router();
// create inventory
router.post("/inventory", (req, res) => {
  const inventory = inventorySchema(req.body);
  inventory
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//get all inventory
router.get('/inventory', (req, res) => {
  inventorySchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//Mostrar un inventario
// get a inventory
router.get("/inventory/:id", (req, res) => {
  const { id } = req.params;
  inventorySchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// update a inventory
router.put("/inventory/:id", (req, res) => {
  const { id } = req.params;
  const { equipment_name, equipment_code, equipment_description, quantity_available, expiration_date } = req.body;
  inventorySchema
    .updateOne({ _id: id }, { $set: { equipment_name, equipment_code, equipment_description, quantity_available, expiration_date } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// delete a inventory
router.delete("/inventory/:id", (req, res) => {
  const { id } = req.params;
  inventorySchema
  .findByIdAndRemove(id)
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});
module.exports = router;