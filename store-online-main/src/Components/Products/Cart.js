import React, { useState } from 'react';
import cartstyle from './Cart.module.css';
import { FaCreditCard, FaPaypal, FaMoneyBillWave } from 'react-icons/fa';

function Cart({ cart, setCart }) {
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [orderSuccess, setOrderSuccess] = useState(false);

  // remmove button
  const remove = (id) => {
    setCart(cart.filter(product => product.id !== id));
  };

  //button
  const increment = (id) => {
    setCart(cart.map(product =>
      product.id === id
        ? { ...product, quantity: (product.quantity || 1) + 1 }
        : product
    ));
  };

  const decrement = (id) => {
    setCart(cart.map(product =>
      product.id === id && (product.quantity || 1) > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    ));
  };

  const subtotalPrice = cart.reduce((total, item) =>
    total + (item.price * (item.quantity || 1)), 0);
  
  const shippingFee = 10.00;
  const finalTotal = (subtotalPrice + shippingFee).toFixed(2);

  const handleConfirmOrder = () => {
    setOrderSuccess(true);
    setTimeout(() => {
      setCart([]);
      setOrderSuccess(false);
      setShowCheckout(false);
    }, 3000);
  };

  return (
    <div className={cartstyle.cartWrapper}>
      <div className={cartstyle.cartHeader}>
        <h2>سلة المشتريات</h2>
      </div>

      {cart.length === 0 ? (
        <p className={cartstyle.emptyText}>السلة فارغة</p>
      ) : (
        <>
          {cart.map((product, index) => (
            <div className={cartstyle.productItem} key={index}>
              <img src={product.image} alt={product.title} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
              <div style={{ flex: 1, marginLeft: '10px' }}>
                <h4>{product.title}</h4>
                <p>${product.price}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button onClick={() => decrement(product.id)} className={cartstyle.qtyBtn}>-</button>
                  <span className={cartstyle.qtySpan}>{product.quantity || 1}</span>
                  <button onClick={() => increment(product.id)} className={cartstyle.qtyBtn}>+</button>
                </div>
                <p>المجموع: ${(product.price * (product.quantity || 1)).toFixed(2)}</p>
                <button onClick={() => remove(product.id)} className={cartstyle.removeBtn}>
                  حذف
                </button>
              </div>
            </div>
          ))}

          <div className={cartstyle.totalSection}>
            <div className={cartstyle.totalRow}>
              <strong>الإجمالي:</strong>
              <span>${subtotalPrice.toFixed(2)}</span>
            </div>
            <button className={cartstyle.checkoutBtn} onClick={() => setShowCheckout(true)}>
              إتمام الشراء
            </button>
          </div>
        </>
      )}

      {showCheckout && (
        <div className={cartstyle.checkoutOverlay}>
          <div className={cartstyle.checkoutModal}>
            <span className={cartstyle.closeModal} onClick={() => {setShowCheckout(false); setOrderSuccess(false);}}>&times;</span>
            
            {orderSuccess ? (
              <div className={cartstyle.successMessage}>
                <div className={cartstyle.successIcon}>✓</div>
                <h3>تم تأكيد طلبك بنجاح!</h3>
                <p>شكراً لتسوقك معنا. جاري تحضير طلبك.</p>
              </div>
            ) : (
              <>
                <h3 className={cartstyle.modalTitle}>فاتورة الشراء</h3>
                
                <div className={cartstyle.invoiceSummary}>
                  <div className={cartstyle.invoiceRow}>
                    <span>المجموع الفرعي:</span>
                    <span>${subtotalPrice.toFixed(2)}</span>
                  </div>
                  <div className={cartstyle.invoiceRow}>
                    <span>مصاريف الشحن:</span>
                    <span>${shippingFee.toFixed(2)}</span>
                  </div>
                  <div className={cartstyle.invoiceTotal}>
                    <span>الإجمالي النهائي:</span>
                    <span>${finalTotal}</span>
                  </div>
                </div>

                <div className={cartstyle.paymentSection}>
                  <h4>طرق الدفع</h4>
                  <div className={cartstyle.paymentOptions}>
                    <label className={`${cartstyle.paymentOption} ${paymentMethod === 'card' ? cartstyle.selected : ''}`}>
                      <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                      <FaCreditCard size={24} className={cartstyle.payIcon} />
                      <span>بطاقة ائتمان</span>
                    </label>
                    <label className={`${cartstyle.paymentOption} ${paymentMethod === 'paypal' ? cartstyle.selected : ''}`}>
                      <input type="radio" name="payment" value="paypal" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} />
                      <FaPaypal size={24} className={cartstyle.payIcon} />
                      <span>باي بال</span>
                    </label>
                    <label className={`${cartstyle.paymentOption} ${paymentMethod === 'cash' ? cartstyle.selected : ''}`}>
                      <input type="radio" name="payment" value="cash" checked={paymentMethod === 'cash'} onChange={() => setPaymentMethod('cash')} />
                      <FaMoneyBillWave size={24} className={cartstyle.payIcon} />
                      <span>دفع عند الاستلام</span>
                    </label>
                  </div>
                </div>

                <button className={cartstyle.confirmBtn} onClick={handleConfirmOrder}>
                  تأكيد الطلب
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
