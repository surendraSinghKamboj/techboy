import React, { useState } from "react";

const Contact = () => {
  const defaultData = {
    name: "",
    email: "",
    message: "",
  };
  const [data, setData] = useState(defaultData);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  console.log(data);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const { name, email, message } = data;
  return (
    <div className="contact">
      <main>
        <div className="message"></div>
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
