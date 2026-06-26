import React, { useEffect, useRef, useState } from 'react';
import ContactStyle from './Contact.module.css';
import { FiUser, FiMail, FiMessageSquare, FiSend } from 'react-icons/fi';

function Contact() {
  const userName = useRef();
  const email = useRef();
  const textarea = useRef();
  const [msg, setmsg] = useState([]);

  useEffect(() => {
    const savemsg = localStorage.getItem('message');
    if (savemsg) {
      setmsg(JSON.parse(savemsg));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('message', JSON.stringify(msg));
  }, [msg]);

  const handelform = (e) => {
    e.preventDefault();
    const Data = {
      Name: userName.current.value,
      Em: email.current.value,
      Tx: textarea.current.value,
      date: new Date().toLocaleDateString()
    };
    setmsg((prev) => [...prev, Data]);
    userName.current.value = "";
    email.current.value = "";
    textarea.current.value = "";
  };

  return (
    <section className={ContactStyle.Contact}>
      <form className={ContactStyle.form} onSubmit={handelform}>
        <div className={ContactStyle.formHeader}>
          <div className={ContactStyle.iconCircle}>
            <FiMessageSquare size={26} />
          </div>
          <h2>Contact Us</h2>
          <p>We'd love to hear your suggestions or feedback</p>
        </div>

        <div className={ContactStyle.inputGroup}>
          <FiUser className={ContactStyle.inputIcon} />
          <input type='text' placeholder='Your Name' ref={userName} className={ContactStyle.inputField} required />
        </div>

        <div className={ContactStyle.inputGroup}>
          <FiMail className={ContactStyle.inputIcon} />
          <input type='email' placeholder='Email Address' ref={email} className={ContactStyle.inputField} required />
        </div>

        <div className={ContactStyle.inputGroup}>
          <textarea placeholder='Write your message here...' ref={textarea} className={ContactStyle.textareaField} required />
        </div>

        <button type='submit' className={ContactStyle.submitButton}>
          <FiSend style={{ marginRight: '8px' }} /> Send Message
        </button>
      </form>

      <div className={ContactStyle.messagesContainer}>
        {msg.map((m, id) => (
          <div className={ContactStyle.msgCard} key={id}>
            <div className={ContactStyle.msgHeader}>
              <div className={ContactStyle.msgAvatar}>{m.Name.charAt(0).toUpperCase()}</div>
              <div>
                <h3>{m.Name}</h3>
                <span>{m.Em}</span>
              </div>
              <span className={ContactStyle.msgDate}>{m.date}</span>
            </div>
            <div className={ContactStyle.msgBody}>
              <p>{m.Tx}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;