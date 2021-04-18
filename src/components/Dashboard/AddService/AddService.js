import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {

    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext)
    const [serviceInfo, serServiceInfo] = useState({})
    const [file, setFile] = useState(null)

    const handleBlur = (event) => {
        const newServiceInfo = { ...serviceInfo }
        newServiceInfo[event.target.name] = event.target.value
        serServiceInfo(newServiceInfo)
    }
    const handlesubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('service', serviceInfo.service)
        formData.append('price', serviceInfo.price)
        formData.append('description', serviceInfo.description)

        fetch('https://cryptic-sea-20754.herokuapp.com/addservice', {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => alert(" Service Add Successfully"))
            .catch(error => {
                alert(error)
            })
        e.preventDefault()
    }

    const handleFileChange = (e) => {
        const NewFile = e.target.files[0]
        setFile(NewFile)
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
                                <h6>Add Service</h6>
                                <h6 className="ms-auto">{userLoggedIn.displayName}</h6>
                            </div>
                        </div>
                        <div className="row p-2">
                            <form className="row g-3" onSubmit={handlesubmit}>
                                <div className="col-6">

                                    <input type="text" onBlur={handleBlur} name="service" className="form-control" placeholder="Service Title" />
                                </div>
                                <div className="col-6">
                                    <input type="number" onBlur={handleBlur} name="price" className="form-control" placeholder="Price" />
                                </div>
                                <div className="col-md-6">
                                    <textarea name="description" onBlur={handleBlur} cols="20" className="form-control" rows="5" placeholder="Product Description.."></textarea>
                                </div>
                                <div className="col-md-6">
                                    <input type="file" onChange={handleFileChange} name="file" className="form-control" />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn brand-button">Add Service</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddService;