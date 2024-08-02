import React, { useState } from 'react';

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    termsAccepted: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with data:', formData);
    // Further processing, e.g., sending data to backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleInputChange}
        />
        Accept terms and conditions
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
