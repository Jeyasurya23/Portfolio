import './Contact.css';
import emailjs from "@emailjs/browser";
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pw0mqpz",
        "template_vgyvp95",
        form.current,
        "sYIRgEVClS5vZDq_9"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
    return (
        <section className="container contact">
            <h2 className="text-center mb-4">Contact Me</h2>
            <p class="text-center text-muted">"Let’s connect and collaborate on exciting projects."</p>
            <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label" >Your Name</label>
                    <input type="text" className="form-control" name="user_name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label" >Email Address</label>
                    <input type="email" className="form-control" name="user_email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label" >Message</label>
                    <textarea className="form-control" name="message" rows="4" required></textarea>
                </div>
                <div className='text-center'>
                <button type="submit" className="btn btn-primary" value="Send">Send Message</button>
                </div>
            </form>
        </section>
    );
};

export default Contact;
