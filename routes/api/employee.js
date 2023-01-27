const express = require("express");
const router = express.Router();

const { Employee, validate } = require("../../models/employee");

router.get("/", async (req, res) => {
  const employee = await Employee.find().sort({
    index: 1,
  });

  res.send(employee);
});

router.post("/create", async (req, res) => {
  // const users = await User.find()

  // const { error } = validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);
  const { firstName, lastName, email, employmentNumber, salary } = req.body;

  let employee = new Employee({
    firstName,
    lastName,
    employmentNumber,
    email,
    salary,
    email,
  });
  // save product
  employee = await employee.save();
  res.send(employee);
});

router.put("/:id", async (req, res) => {
  // const users = await User.find()

  const { id: _id } = req.params;
  const { firstName, lastName } = req.body;

  const employeeFind = Employee.find({ _id });

  if (!employeeFind) return res.status(400).send("Employee not found");

  const newUpdate = await Employee.findByIdAndUpdate(_id, {
    firstName,
    lastName,
  });

  console.log("newUpdate", newUpdate);

  res.send(newUpdate).status(201);
});

router.delete("/:id", async (req, res) => {
  // const users = await User.find()
  const { id: _id } = req.params;

  const employeeFind = Employee.find({ _id });

  if (!employeeFind) return res.status(400).send("Employee not found");

  const deleted = await Employee.findByIdAndRemove({ _id });
  res.send(deleted).status(201);
});

router.get("/search/:query", async (req, res) => {
  const { query } = req.params;
  const employee = await Employee.find({ email: query });

  console.log("employee", employee);
  res.send(employee).status(201);
});

module.exports = router;
