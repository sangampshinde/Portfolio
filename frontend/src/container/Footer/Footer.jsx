import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);


 console.log("1", process.env.REACT_APP_SERVICE_ID);
console.log("2", process.env.REACT_APP_TEMPLATE_ID);
console.log("3", process.env.REACT_APP_PUBLIC_KEY);
 

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = async () => {
  setLoading(true);

  try {

    // ✅ Send Email First
    await emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
    'template_68gn0rp',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      process.env.REACT_APP_PUBLIC_KEY
    );

    // ✅ Optional: Save to Sanity
    try {
      const contact = {
        _type: 'contact',
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      await client.create(contact);
    } catch (sanityError) {
      console.log('Sanity save failed:', sanityError);
    }

    // ✅ Success
    setLoading(false);
    setIsFormSubmitted(true);

    // ✅ Clear form
    setFormData({
      name: '',
      email: '',
      message: '',
    });

  } catch (error) {
    setLoading(false);
    console.log('Email error:', error);
  }
};

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
              <a href="mailto:sangampshinde@gmail.com" className="p-text">
        sangampshinde@gmail.com
      </a>
        </div>
       <div className="app__footer-card">
        <img src={images.mobile} alt="phone" />
        
        <a href="tel:+919823448966" className="p-text">
          +91 9823448966
        </a>
      </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
  className="p-text"
  type="text"
  placeholder="Your Name"
  name="name"
  value={name}
  onChange={handleChangeInput}
/>
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
