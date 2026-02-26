import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(){
  const formRef = useRef(null);
  const [status, setStatus] = useState({ msg: '', color: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    const name = formRef.current.name.value.trim();
    const email = formRef.current.email.value.trim();
    const message = formRef.current.message.value.trim();

    if (name.length < 2) return setStatus({ msg: 'Please enter your full name.', color: 'red' });
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) return setStatus({ msg: 'Please enter a valid email address.', color: 'red' });
    if (message.length < 10) return setStatus({ msg: 'Message must be at least 10 characters long.', color: 'red' });

    setSending(true);
    setStatus({ msg: '', color: '' });

    const serviceID = 'service_ayvgebi';
    const templateID = 'template_dq3vdfi';
    const publicKey = 'N8wm1IDcZJJPyJw8T';

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
        setStatus({ msg: 'Message sent successfully! 🚀', color: 'green' });
        formRef.current.reset();
      })
      .catch(() => {
        setStatus({ msg: 'Failed to send... Please try again.', color: 'red' });
      })
      .finally(() => setSending(false));
  };

  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div className="card">
        <a href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" width="40" alt="logo"/></a>
        <h1 style={{fontSize:28,margin:'15px 0'}}>Get in touch</h1>

        <form id="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <input type="text" name="name" id="name" placeholder="Your Name" required />
          <input type="email" name="email" id="email" placeholder="Your Email" required />
          <textarea name="message" id="message" placeholder="What's on your mind?" required />
          <button type="submit" className="btn btn-primary" style={{width:'100%',marginTop:10}} disabled={sending}>
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status.msg && <div id="status-msg" style={{marginTop:12,color: status.color}}>{status.msg}</div>}

        <a href="/" style={{display:'block',marginTop:20,color:'#767676',textDecoration:'none',fontSize:14}}>Back to Home</a>
      </div>
    </div>
  );
}
