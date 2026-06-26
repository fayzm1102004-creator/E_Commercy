import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextAuth } from '../../../Context/ContextAuth';
import styles from './Login.module.css';
import { FiPhone, FiLock, FiLogIn } from 'react-icons/fi';

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(ContextAuth);
  const [pass, setPass] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!phone || !pass) {
      setError('Please fill in all fields');
      return;
    }
    if (login(phone, pass)) {
      navigate('/Home');
      window.location.reload();
    } else {
      setError('Invalid phone number or password');
    }
  };

  return (
    <div className={styles.authPage}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.formHeader}>
          <div className={styles.iconCircle}>
            <FiLogIn size={26} />
          </div>
          <h2>Welcome Back</h2>
          <p>Sign in to your account</p>
        </div>

        {error && <div className={styles.errorMsg}>{error}</div>}

        <div className={styles.inputGroup}>
          <FiPhone className={styles.inputIcon} />
          <input
            type='text'
            placeholder='Phone Number'
            className={styles.inputField}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <FiLock className={styles.inputIcon} />
          <input
            type='password'
            placeholder='Password'
            className={styles.inputField}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </div>

        <button type='submit' className={styles.submitButton}>Sign In</button>

        <div className={styles.formFooter}>
          <p>Don't have an account? <span className={styles.link} onClick={() => navigate('/Register')}>Register</span></p>
          <p><span className={styles.linkSecondary} onClick={() => navigate('/Profile')}>Go to Profile</span></p>
        </div>
      </form>
    </div>
  );
}

export default Login;
