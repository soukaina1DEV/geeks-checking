import React, { useState } from "react";
import Input from "./Input";
import "./Form.css";

function Form() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const phoneRegex = /^[0-9]{8,14}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validate = () => {
    let newErrors = {};

    if (!values.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!values.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!values.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!phoneRegex.test(values.phone)) {
      newErrors.phone = "Phone number is invalid";
    }

    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      newErrors.email = "Email is invalid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully 🎉");
      console.log(values);
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <Input
          label="First Name"
          name="firstName"
          type="text"
          value={values.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />

        <Input
          label="Last Name"
          name="lastName"
          type="text"
          value={values.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />

        <Input
          label="Phone"
          name="phone"
          type="text"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <Input
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
