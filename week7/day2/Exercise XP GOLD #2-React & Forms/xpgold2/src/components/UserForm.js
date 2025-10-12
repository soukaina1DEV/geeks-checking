import React, { useState } from "react";
import "./UserForm.css"; 

function UserForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.email
    ) {
      alert("Please fill in all fields");
      return;
    }

    if (isNaN(formData.phone)) {
      alert("Phone number must contain only numbers");
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="container">
      {!submitted ? (
        <div className="form-box">
          <h1>Welcome!</h1>
          <p>Please provide your information below.</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div className="form-box">
          <h2>
            {formData.lastName}, {formData.firstName}
          </h2>
          <p>
            {formData.phone} | {formData.email}
          </p>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default UserForm;
