import React, { useState } from 'react';
import PageTransition from '../../components/PageTransition';
import './contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = 'Name is required.';
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) err.email = 'Valid email required.';
    if (!form.message.trim()) err.message = 'Message required.';
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length) return;
    setSending(true);
    // fake send
    await new Promise(res => setTimeout(res, 900));
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <PageTransition>
      <div className="container contact-page">
        <div className="contact-header">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-sub">Have a question, feedback or need help? Send us a message and we'll get back to you shortly.</p>
        </div>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="row">
              <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" value={form.name} onChange={handleChange} />
                {errors.name && <div style={{ color: 'red', fontSize: 12 }}>{errors.name}</div>}
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" value={form.email} onChange={handleChange} />
                {errors.email && <div style={{ color: 'red', fontSize: 12 }}>{errors.email}</div>}
              </div>
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" value={form.subject} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={6} value={form.message} onChange={handleChange} />
              {errors.message && <div style={{ color: 'red', fontSize: 12 }}>{errors.message}</div>}
            </div>

            <div style={{ marginTop: 8 }}>
              <button className="btn" type="submit" disabled={sending}>{sending ? 'Sending...' : 'Send Message'}</button>
              {sent && <span style={{ marginLeft: 12, color: 'green', fontWeight: 700 }}>Message sent</span>}
            </div>
          </form>

          <aside className="contact-info">
            <h4>Contact information</h4>
            <p>We typically reply within 24-48 hours.</p>

            <div className="info-item">
              <div>
                <strong>Email</strong>
                <div>support@r-ecommerce.com</div>
              </div>
            </div>

            <div className="info-item">
              <div>
                <strong>Phone</strong>
                <div>+1 (555) 123-4567</div>
              </div>
            </div>

            <div className="info-item">
              <div>
                <strong>Address</strong>
                <div>123 Commerce St, React City, JS 12345</div>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </PageTransition>
  );
}

export default Contact;