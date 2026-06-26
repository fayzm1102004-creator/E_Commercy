import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { ContextAuth } from '../../../Context/ContextAuth';
import styles from './Register.module.css';
import { FiUser, FiMail, FiPhone, FiLock, FiUserPlus } from 'react-icons/fi';

function Register() {
  const navigate = useNavigate();
  const { reg } = useContext(ContextAuth);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    reg(firstname, lastname, email, phone, pass);
    navigate('/login');
  };

  return (
    <div className={styles.authPage}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.formHeader}>
          <div className={styles.iconCircle}>
            <FiUserPlus size={26} />
          </div>
          <h2>Create Account</h2>
          <p>Sign up to get started</p>
        </div>

        <div className={styles.nameRow}>
          <div className={styles.inputGroup}>
            <FiUser className={styles.inputIcon} />
            <input
              required
              type='text'
              placeholder='First Name'
              className={styles.inputField}
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <FiUser className={styles.inputIcon} />
            <input
              required
              type='text'
              placeholder='Last Name'
              className={styles.inputField}
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <FiMail className={styles.inputIcon} />
          <input
            required
            type='email'
            placeholder='Email Address'
            className={styles.inputField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <FiPhone className={styles.inputIcon} />
          <input
            required
            type='text'
            placeholder='Phone Number'
            className={styles.inputField}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <FiLock className={styles.inputIcon} />
          <input
            required
            type='password'
            placeholder='Password'
            className={styles.inputField}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <button type='submit' className={styles.submitButton}>Create Account</button>

        <div className={styles.formFooter}>
          <p>Already have an account? <span className={styles.link} onClick={() => navigate('/login')}>Sign In</span></p>
        </div>
      </form>
    </div>
  );
}

export default Register;