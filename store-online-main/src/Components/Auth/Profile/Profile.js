import React, { useContext } from 'react';
import { ContextAuth } from '../../../Context/ContextAuth';
import { useNavigate } from 'react-router';
import styles from './Profile.module.css';
import { FiUser, FiMail, FiPhone, FiLogOut, FiLogIn, FiUserPlus } from 'react-icons/fi';

function Profile() {
  const { user, logout } = useContext(ContextAuth);
  const navigate = useNavigate();

  return (
    <div className={styles.authPage}>
      <div className={styles.profileContainer}>
        {user ? (
          <>
            <div className={styles.profileHeader}>
              <div className={styles.avatar}>
                {user.fristname ? user.fristname.charAt(0).toUpperCase() : 'U'}
              </div>
              <h1 className={styles.profileName}>{user.fristname} {user.lastname}</h1>
              <span className={styles.badge}>Active Member</span>
            </div>

            <div className={styles.infoSection}>
              <div className={styles.infoCard}>
                <FiUser className={styles.infoIcon} />
                <div>
                  <span className={styles.infoLabel}>Full Name</span>
                  <span className={styles.infoValue}>{user.fristname} {user.lastname}</span>
                </div>
              </div>

              <div className={styles.infoCard}>
                <FiMail className={styles.infoIcon} />
                <div>
                  <span className={styles.infoLabel}>Email</span>
                  <span className={styles.infoValue}>{user.email}</span>
                </div>
              </div>

              <div className={styles.infoCard}>
                <FiPhone className={styles.infoIcon} />
                <div>
                  <span className={styles.infoLabel}>Phone</span>
                  <span className={styles.infoValue}>{user.phone}</span>
                </div>
              </div>
            </div>

            <button className={styles.logoutButton} onClick={() => {
              logout();
              window.location.reload();
            }}>
              <FiLogOut size={18} />
              Logout
            </button>
          </>
        ) : (
          <div className={styles.notLoggedIn}>
            <div className={styles.avatarEmpty}>
              <FiUser size={36} />
            </div>
            <h2>You're not logged in</h2>
            <p>Please sign in to view your profile</p>
            <div className={styles.authButtons}>
              <button className={styles.loginBtn} onClick={() => navigate('/login')}>
                <FiLogIn size={18} />
                Sign In
              </button>
              <button className={styles.registerBtn} onClick={() => navigate('/Register')}>
                <FiUserPlus size={18} />
                Create Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
