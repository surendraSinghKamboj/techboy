import React, { useEffect, useState } from "react";
import "./styles/Contact.scss";

const Contact = () => {
  const defaultData = {
    name: "",
    email: "",
    message: "",
  };
  const [data, setData] = useState(defaultData);
  const [info, setInfo] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setTimeout(() => info && setInfo(false), 5000);
  }, [info]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setInfo(true);
  };

  const { name, email, message } = data;
  return (
    <div className="contact">
      <main>
        {info && (
          <div className="message">
            <div>
              <h1>Hi {name}</h1>
              <p>Your message has been sent to us...</p>
              <p>We will contact you shortly on your {email} email account</p>
            </div>
          </div>
        )}
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              required
              placeholder="Enter Your Name Here"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              required
              placeholder="Enter Your Email Here"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <input
              type="text"
              name="message"
              value={message}
              required
              placeholder="Tell us about your query........."
              onChange={handleChange}
            />
          </div>

          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Contact;
