const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function ValidateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2-30 chars";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "password must be between 6-30 chars";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password required";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Password doesn't match";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "password2 required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
