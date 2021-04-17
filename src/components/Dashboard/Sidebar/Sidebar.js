import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripHorizontal, faSignOutAlt, faCog, faFileAlt, faUsers, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../App';


const Sidebar = () => {
    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: "POST",
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify({ email: userLoggedIn.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])
    console.log(userLoggedIn)
    return (
        <div className="d-flex flex-column justify-content-between bg-light pt-5">
            <ul className="list-group" style={{ height: "84vh" }}>
                <div>



                    <li className=" list-group-item-sidebar">
                        <Link to="/dashboard/dashboard" class="navbar-brand brand-text-color LogoBrand"> HOME CLENER</Link>
                    </li>
                    <li className=" list-group-item-sidebar">
                        <Link to="/orderlist"  >
                            <FontAwesomeIcon icon={faUsers} /> <span>Order List</span>
                        </Link>
                    </li>
                    <li className=" list-group-item-sidebar">
                        <Link to="/review" >
                            <FontAwesomeIcon icon={faUsers} /> <span>Review</span>
                        </Link>
                    </li>


                    {isAdmin && <div>

                        <li className=" list-group-item-sidebar">
                            <Link to="/dashboard/dashboard"  >
                                <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className=" list-group-item-sidebar">
                            <Link to="/addservices"  >
                                <FontAwesomeIcon icon={faFileAlt} /> <span>Add Services</span>
                            </Link>
                        </li>
                        <li className=" list-group-item-sidebar">
                            <Link to="/makeadmin" >
                                <FontAwesomeIcon icon={faUserAlt} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li className=" list-group-item-sidebar">
                            <Link to="/manageservices"  >
                                <FontAwesomeIcon icon={faCog} /> <span>Manage Services</span>
                            </Link>
                        </li>
                        <li className=" list-group-item-sidebar">
                            <Link to="/manageorders"  >
                                <FontAwesomeIcon icon={faCog} /> <span>Manage Orders</span>
                            </Link>
                        </li>
                        
                    </div>}
                </div>

            </ul>
            <div className="mb-5">
                <Link to="/"  ><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>

    );
};

export default Sidebar;