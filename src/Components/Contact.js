import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import "./HomePage.css";
import { Element } from "react-scroll";
import { Card, CardBody, CardImg, CardTitle, Input, Button } from 'reactstrap';
import { FaEnvelope } from 'react-icons/fa';
import Myimg from "../assets/Myimg.jpeg";
const Contact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [numberError, setNumberError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    let valid = true;

   

    if (number.length !== 10) {
      setNumberError('OOPS!!👀Mobile number should have 10 digits');
      valid = false;
    } else {
      setNumberError('');
    }

    if (!email.match(/^\S+@\S+\.\S+$/)) {
      setEmailError('Email address is not valid');
      valid = false;
    } else {
      setEmailError('');
    }

    if (message.length < 10) {
      setMessageError('Message should have at least 10 characters');
      valid = false;
    } else {
      setMessageError('');
    }

    if (valid) {
      const data = { name, number, email, message };
      await axios.post('http://localhost:100/submit-form', data);
      alert('Form submitted successfully!');
      setName('');
      setNumber('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div>
      <Element id="contact">
        <Card className="contact-card">
          <CardBody>
            <CardTitle tag="h2">Connect with Me</CardTitle>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <Input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
                {nameError && <p className="error">{nameError}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="number">Number</label>
                <Input
                  type="tel"
                  name="number"
                  value={number}
                  onChange={(event) => setNumber(event.target.value)}
                  required
                />
                {numberError && <p className="error">{numberError}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
                {emailError && <p className="error">{emailError}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <Input
                  type="textarea"
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                />
                {messageError && <p className="error">{messageError}</p>}
              </div>
              <Button type="submit" className="connect-btn">Connect</Button>
            </form>
            <div className="contact-info">
              <p>Mail To: swethasakthi927@gmail.com</p>
              <div><FaEnvelope className="contact-icon" /></div>
            </div>
          </CardBody>
        </Card>
      </Element>
    </div>
  );
};


export default Contact;
