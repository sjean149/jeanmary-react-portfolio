import React, { useState } from 'react';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });

    if (name === 'email') {
      const emailValid = /\S+@\S+\.\S+/.test(value);
      setErrors({ ...errors, email: emailValid ? '' : 'Invalid email address' });
    }

    if (!value) {
      setErrors({ ...errors, [name]: 'This field is required' });
    } else {
      setErrors({ ...errors, [name]: '' });
    }
  };

  return (
    <section>
      <h2>Contact</h2>
      <form>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}

        <label>Message:</label>
        <textarea
          name="message"
          value={formState.message}
          onChange={handleChange}
        />
        {errors.message && <p>{errors.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
