import React, { useState } from 'react';
import '../Contact.css'; // Import your CSS file

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check for allowed characters in the name field
    const allowedChars = /^[a-zA-Z ]+$/;
    if (!allowedChars.test(value)) {
      setErrors({ ...errors, name: 'Name can only contain letters and spaces.' });
    } else {
      setErrors({ ...errors, name: '' }); // Clear error if valid
    }

    // Update form data
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email } = formData;
    const newErrors = { name: '', email: '' };

    // Check for name errors again before submission
    if (!/^[a-zA-Z ]+$/.test(name)) {
      newErrors.name = 'Name can only contain letters and spaces.';
    }

    // Check for email validity before submission
    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email) {
      console.log('Form data submitted:', formData);
      // Replace with your form submission logic (e.g., send email)
      setFormData({ name: '', email: '', message: '' }); // Clear form after submission
    }
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <h6>For more inquires</h6>
      <form onSubmit={handleSubmit}>
        <div className={errors.name ? 'error-field' : ''}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className={errors.email ? 'error-field' : ''}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" disabled={!!errors.name || !!errors.email}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
