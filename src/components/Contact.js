import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { FaMailBulk, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [inputs, setInputs] = useState({
    email: '',
    message: ''
  });
  const data = {
    name:'',
    email:''
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or other actions here
  };

  return (
    <div>
      <div className="contact">
        <p>Contact</p>
        <div className="contact-form">
          <div className='inputs'>
            <form >
              <input type="text" placeholder="Name"name='name' />
              <input type="email" placeholder="Email"name='email' />
              <TextField
                name="email"
                type="email"
                variant="outlined"
                value={inputs.email}
                onChange={handleChange} // Add onChange event handler
              />
              <TextField
                name="message"
                variant="outlined"
                type="text"
                multiline
                rows={4}
                value={inputs.message}
                onChange={handleChange} // Add onChange event handler
              />
              <Button type="submit" variant="contained">
                Submit
              </Button>
              <Button variant="outlined">Solid</Button>
              <Button variant="text">Soft</Button>
            </form>
          </div>
        </div>
        <div className="icons">
          <div className="contact-icons">
            <a><FaGithub size={50} style={{ color: "#fff" }} /></a>
            <a><FaMailBulk size={50} style={{ color: "#fff" }} /></a>
            <a><FaLinkedin size={50} style={{ color: "#fff" }} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
