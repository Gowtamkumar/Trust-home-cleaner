import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentProcessForm from './PaymentProcessForm';

const stripePromise = loadStripe('pk_test_51Ie7s7Luh80SIttKpDJ2lCPGMkKIKza09lKoNOYz2M2XfLi9ITI9O06kCagZV3w8B48WR9enWQYsp0zGASspPAUO0086889qtd');
const PaymentProcess = ({ handelPayment }) => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentProcessForm handelPayment={handelPayment}></PaymentProcessForm>
        </Elements>
    );
};

export default PaymentProcess;