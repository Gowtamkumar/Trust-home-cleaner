import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';


const Order = () => {

    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext)
    let { ID } = useParams();
    console.log(ID)
    const [Order, setOrder] = useState({})
    const [orderProcess, setOrderProcess] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/service/${ID}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])


    const handlesubmit = (e) => {
        // const newOrderProcess = { ...orderProcess }
        // setOrderProcessHandel(newOrderProcess)
        // const name = userLoggedIn.displayName;
        // const email = userLoggedIn.email;
        // const address = orderProcess.address
        // const data = { name, email, address, ...Order }


        const formData = new FormData()
        formData.append('name', userLoggedIn.displayName)
        formData.append('email', userLoggedIn.email)
        formData.append('service', Order.service)
        formData.append('price', Order.price)
        formData.append('address', orderProcess.address)
        formData.append('description', Order.description)
        


        // console.log("dsfasdfdsf", address)

        fetch('http://localhost:5000/addorder', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => alert("successfully data insert"))
            .catch(error => {
                console.log(error)
            })
        e.preventDefault()
    }


    const OrderhandleBlur = (e) => {
        const address = { ...orderProcess }
        address[e.target.name] = e.target.value;
        setOrderProcess(address)
    }

    // console.log(orderProcess)
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
                            <form className="row g-3" onSubmit={handlesubmit}>
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
                                <div className="col-12">
                                
                                </div>

                                <p>Your service charge will be ${Order.price}</p>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">Order Process</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;