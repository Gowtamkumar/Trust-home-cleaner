import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ManageServicesTable from '../ManageServicesTable/ManageServicesTable';
import Sidebar from '../Sidebar/Sidebar';


const ManageServices = () => {

    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext)
    const [allServices, setAllServices] = useState([])
    useEffect(() => {
        fetch('https://cryptic-sea-20754.herokuapp.com/allservices')
            .then(res => res.json())
            .then(data => setAllServices(data))
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
                                <h6>Manage Services</h6>

                                <h6 className="ms-auto">{userLoggedIn.displayName}</h6>
                            </div>
                        </div>
                        <div className="row p-2 mt-4">
                            <ManageServicesTable allServices={allServices} key={allServices._id}></ManageServicesTable>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageServices;