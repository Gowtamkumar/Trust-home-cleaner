import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ManageOrdersTable from '../ManageOrdersTable/ManageOrdersTable';
import Sidebar from '../Sidebar/Sidebar';

const ManageOrders = () => {

    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext)
    const [ManageOrder, sertManageOrder] = useState([])

    useEffect(() => {
        fetch('https://cryptic-sea-20754.herokuapp.com/orderUser', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: userLoggedIn.email })
        })
            .then(res => res.json())
            .then(data => sertManageOrder(data))
    }, [])

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
                                <h6>Orders List</h6>

                                <h6 className="ms-auto">{userLoggedIn.displayName}</h6>
                            </div>
                        </div>
                        <div className="row p-2 mt-4">
                            <ManageOrdersTable ManageOrder={ManageOrder} ></ManageOrdersTable>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageOrders;