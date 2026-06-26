import React, { useContext, useEffect, useState } from 'react';
import styles from './Promo.module.css';
import popup from '../../images/popup_img.jpg';
import { ContextAuth } from '../../Context/ContextAuth';

function Promo() {
  const { user } = useContext(ContextAuth);
  const [isVisible, setIsVisible] = useState(false);
  const [dontShow, setDontShow] = useState(false);

  useEffect(() => {
    // Only show popup if user IS logged in
    if (user) {
      const closed = localStorage.getItem('promoPopupClosed');
      if (!closed) {
        setIsVisible(true);
      }
    } else {
      // If user is not logged in, hide the popup
      setIsVisible(false);
    }
  }, [user]);

  const handleClose = () => {
    if (dontShow) {
      localStorage.setItem('promoPopupClosed', 'true');
    }
    setIsVisible(false);
  };

  const handleSubscribe = () => {
    alert("Thanks for subscribing!");
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupBox}>
        <div className={styles.left}>
          <img src={popup} alt="promo" className={styles.image} />
        </div>
        <div className={styles.right}>
          <span className={styles.closeBtn} onClick={handleClose}>&times;</span>
          <h2 className={styles.title}>Sign up & get 25% OFF</h2>
          <p className={styles.description}>
            Join our newsletter to get updates on new arrivals and special offers.
          </p>
          <input
            type="email"
            placeholder="Enter your email address"
            className={styles.input}
          />
          <button onClick={handleSubscribe} className={styles.button}>Subscribe</button>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              onChange={(e) => setDontShow(e.target.checked)}
            />
            Don't show this popup again
          </label>
        </div>
      </div>
    </div>
  );
}

export default Promo;
