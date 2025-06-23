import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section">
            <h2>Contact Me</h2>
            <form>
                <label>Name:</label>
                <input type="text" required />
                <label>Email:</label>
                <input type="email" required />
                <label>Message:</label>
                <textarea rows="5" required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;
