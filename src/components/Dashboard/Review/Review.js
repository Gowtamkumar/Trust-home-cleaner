import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import ReviewForm from '../ReviewForm/ReviewForm';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext)
    return (
        <div>
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
                                <h6>Add Review</h6>

                                <h6 className="ms-auto">{userLoggedIn.displayName}</h6>
                            </div>
                        </div>
                        <div className="row p-2 mt-4">
                            <ReviewForm></ReviewForm>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Review;