import React from 'react';

const ManageServicesTable = ({ allServices }) => {
    const deleteService = (id) => {
        fetch(`https://cryptic-sea-20754.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                alert("Delete Successfull")
            })

    }
    return (
        <div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Services Title</th>

                        <th scope="col">Price</th>
                        <th scope="col" style={{ width: '600px' }}>Description</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                {
                    allServices.length === 0 && <p>Lodding.....</p>
                }
                    {
                        allServices.map((order, index) =>
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{order.service}</td>
                                <td>{order.price}</td>
                                <td>{order.description}</td>

                                <td>
                                    <button className="btn btn-danger" onClick={() => deleteService(order._id)}>Delete</button>
                                </td>

                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageServicesTable;