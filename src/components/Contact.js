import './Contact.css';
import emailjs from "@emailjs/browser";
import { useRef, useState } from 'react';

const Contact = () => {
    const form = useRef();
    const [statusMessage, setStatusMessage] = useState("");  
    const [statusType, setStatusType] = useState(""); 

    const sendEmail = (e) => {
        e.preventDefault();
        setStatusMessage("");

        emailjs
          .sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_USER_ID
          )
          .then(
            (result) => {
              console.log(result.text);
              setStatusMessage("Message sent successfully!");
              setStatusType("success");
              e.target.reset();
              setTimeout(() => {
                setStatusMessage("");
                setStatusType("");
              }, 3000);
            },
            (error) => {
              console.log(error.text);
              setStatusMessage("Failed to send message. Please try again.");
              setStatusType("error");
              setTimeout(() => {
                setStatusMessage("");
                setStatusType("");
              }, 3000);
            }
          );
    };

    return (
        <section className="container contact">
            <h2 className="text-center mb-4">Connect With Me...</h2>
            <p className="text-center text-muted">"Let’s connect and collaborate on exciting projects."</p>         
            <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" name="user_name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" name="user_email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" name="message" rows="4" required></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary submit-button" value="Send">Send Message</button>
                </div>
            </form>

            {statusMessage && (
                <div className={`alert alert-${statusType === 'success' ? 'success' : 'danger'} mt-4 text-center`}>
                    {statusMessage}
                </div>
            )}
        </section>
    );
};

export default Contact;
