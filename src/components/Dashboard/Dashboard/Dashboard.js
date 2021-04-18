import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext)
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
                                <h6>Dashboard</h6>

                                <h6 className="ms-auto">{userLoggedIn.displayName}</h6>
                            </div>
                        </div>
                        <div className="row p-2 mt-4">

                            <div className="col-md-3">
                                <div className="d-flex justify-content-center bg-danger p-2 rounded text-light">
                                    <div>
                                        <h1>09</h1>
                                    </div>
                                    <div className="dashboardTop">
                                        <ul>
                                            <li>Panding</li>
                                            <li>Orders</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d-flex justify-content-center bg-primary p-2 rounded text-light">
                                    <div>
                                        <h2>34</h2>
                                    </div>
                                    <div className="dashboardTop">
                                        <ul>
                                            <li>Todays</li>
                                            <li>Orders</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d-flex justify-content-center bg-success p-2 rounded text-light">
                                    <div>
                                        <h2>34</h2>
                                    </div>
                                    <div className="dashboardTop">
                                        <ul>
                                            <li>Total</li>
                                            <li>Orders</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d-flex justify-content-center bg-warning p-2 rounded text-light">
                                    <div>
                                        <h2>34</h2>
                                    </div>
                                    <div className="dashboardTop">
                                        <ul>
                                            <li>Total</li>
                                            <li>Services</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;