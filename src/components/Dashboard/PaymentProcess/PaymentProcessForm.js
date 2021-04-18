import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
const PaymentProcessForm = ({ handelPayment }) => {
    const [paymentError, setpaymentError] = useState(null)
    const [paymentSuccess, setpaymentSuccess] = useState(null)
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setpaymentError(error.message)
            // console.log('[error]', error);
            setpaymentSuccess(null)
        } else {
            setpaymentSuccess(paymentMethod.id)
            setpaymentError(null)
            handelPayment(paymentMethod.id)
            // console.log('[PaymentMethod]', paymentMethod);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" disabled={!stripe} className="brand-button btn">
                    Payment
                </button>
            </form>
            {
                paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{ color: 'green' }}>Payment Successfully</p>
            }
        </div>
    );
};

export default PaymentProcessForm;