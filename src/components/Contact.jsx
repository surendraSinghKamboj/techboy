import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter Your Name Here"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              required
              placeholder="Enter Your Email Here"
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <input
              type="text"
              name="message"
              required
              placeholder="Tell us about your query........."
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
