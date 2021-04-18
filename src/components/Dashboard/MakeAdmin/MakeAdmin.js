import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import MakeAdminForm from '../MakeAdminForm/MakeAdminForm';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext)
    return (
        <section>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 sidebar ">
                    <div>
                        <Sidebar></Sidebar>
                    </div>
                </div>
                <div className="col-md-10">
                    <div className="main bg-light m-2">
                        <div className="d-flex">
                            <h6>Make Admin</h6>
                            <h6 className="ms-auto">{userLoggedIn.displayName}</h6>
                        </div>
                    </div>
                    <div className="row p-2 mt-4">
                        <MakeAdminForm></MakeAdminForm>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    );
};

export default MakeAdmin;