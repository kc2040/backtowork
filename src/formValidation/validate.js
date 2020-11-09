export default function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = 'email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'email address is invalid';
  }
  if (!values.fname) {
    errors.fname = 'first name is required';
  } else if (values.fname.length < 2) {
    errors.fname = 'first name must be 2 or more characters';
  }
  if (!values.lname) {
    errors.lname = 'last name is required';
  } else if (values.lname.length < 2) {
    errors.fname = 'last name must be 2 or more characters';
  }
  if (!values.cell) {
    errors.cell = 'cell number is required';
  } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(values.cell)) {
    errors.cell = 'phone number is invalid';
  }

  if (!values.date) {
    errors.date = 'return date is required';
  }
  
  //^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$
  return errors;
};