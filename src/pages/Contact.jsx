import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Whether you have a question about our products, services, or anything else, our team is ready to answer all your questions.</p>
            </div>
            <div className="contact-content">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p><FontAwesomeIcon icon={faPhone} /> +1 234 567 890</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> contact@mobilemarvels.com</p>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Mobile Marvels Street, Tech City</p>
                </div>
                <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="contact-button">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
