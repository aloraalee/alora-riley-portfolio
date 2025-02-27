import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-content">
        <div className="contact-photo">
          <img src="/Portfolio-photo.png" alt="Photo of Alora Riley"/>
        </div>
        <div className="contact-form">
          <h2>Contact Me</h2>
          <form action="mailto:alora.riley@gmail.com" method="post" enctype="text/plain">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <p className="email">
        Or send your own email to alora.riley@gmail.com
      </p>
    </section>
  );
};

export default Contact;
