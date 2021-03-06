import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import PaymentProcess from '../PaymentProcess/PaymentProcess';
import Sidebar from '../Sidebar/Sidebar';

const Order = () => {
    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext)
    let { ID } = useParams();
    const [Order, setOrder] = useState({})
    const [orderProcess, setOrderProcess] = useState({})

    useEffect(() => {
        fetch(`https://cryptic-sea-20754.herokuapp.com/service/${ID}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    const handelpayment = (PaymentID) => {
        const orderDetails = {
            name: userLoggedIn.displayName,
            email: userLoggedIn.email,
            service: Order.service,
            price: Order.price,
            address: orderProcess.address,
            paymentmethod: orderProcess.paymentmethod,
            status: 'Pending',
            PaymentID,
            OrderTime: new Date()
        }
        fetch('https://cryptic-sea-20754.herokuapp.com/addorder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => alert("Payment Successfull"))
            .catch(error => {
                console.log(error)
            })
    }

    const OrderhandleBlur = (e) => {
        const address = { ...orderProcess }
        address[e.target.name] = e.target.value;
        setOrderProcess(address)
    }
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 sidebar">
                        <div>
                            <Sidebar></Sidebar>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="main bg-light m-2">
                            <div className="d-flex">
                                <h6>Order</h6>
                                <h6 className="ms-auto">{userLoggedIn.displayName}</h6>
                            </div>
                        </div>
                        <div className="p-2 mt-4">
                            <form className="row g-3" >
                                {/* onSubmit={handlesubmit} */}
                                <div className="col-md-6">
                                    <input type="text" defaultValue={userLoggedIn.displayName} className="form-control" />
                                </div>
                                <div className="col-6">
                                    <input type="email" defaultValue={userLoggedIn.email} className="form-control" />
                                </div>
                                <div className="col-12">
                                    <input type="text" defaultValue={Order.service} className="form-control" />
                                </div>
                                <div className="col-12">
                                    <input type="text" name="address" onBlur={OrderhandleBlur} className="form-control" />
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="paymentmethod" onBlur={OrderhandleBlur} defaultValue="Credit Card" />
                                    <label class="form-check-label" for="inlineRadio1">Credit Card</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="paymentmethod" onBlur={OrderhandleBlur} defaultValue="Paypal" />
                                    <label class="form-check-label" for="inlineRadio2">Paypal</label>
                                </div>

                                <p>Your service charge will be ${Order.price}</p>
                                {/* <div className="col-12">
                                    <button type="submit" className="btn btn-primary">Order Process</button>
                                </div> */}
                            </form>
                            <div className="col-12">
                                <PaymentProcess handelPayment={handelpayment}></PaymentProcess>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;