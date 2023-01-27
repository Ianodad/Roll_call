const Joi = require("joi");
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  employmentNumber: Number,
  salary: {
    type: Number,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

function validateEmployee(employee) {
  const schema = {
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string(),
    employmentNumber: Joi.number(),
    salary: Joi.number(),
  };

  return Joi.validate(employee, schema);
}


module.exports.validate = validateEmployee;
module.exports.Employee = Employee;
module.exports.employeeSchema = employeeSchema;
