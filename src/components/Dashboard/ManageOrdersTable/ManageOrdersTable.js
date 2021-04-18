import React, { useEffect, useState } from 'react';

const ManageOrdersTable = ({ ManageOrder }) => {
    const [selectOption, setSelectOption] = useState({})
    const id = selectOption.OrderID;
    const status = selectOption.selectStatus
    const statusUpdate = { id, status }
    useEffect(() => {
        fetch(`https://cryptic-sea-20754.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(statusUpdate)
        })
            .then(res => res.json())
            .then(data => alert("Order Status Update Successfully"))
    }, [id])

    return (
        <div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Services</th>
                        <th scope="col">Pay With</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ManageOrder.length === 0 && <p>Lodding.....</p>
                    }
                    {
                        ManageOrder.map((order, index) =>
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.service}</td>
                                <td>{order.paymentmethod}</td>
                                <td>{order.status}</td>
                                <td>
                                    <select onChange={(e) => {
                                        const selectStatus = e.target.value
                                        const OrderID = order._id
                                        const test = { selectStatus, OrderID }
                                        setSelectOption(test)
                                    }}>
                                        <option value="Pending" className="bg-danger">Pending</option>
                                        <option value="On Going" className="bg-warning">On Going</option>
                                        <option value="Done" className="bg-success">Done</option>
                                    </select>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageOrdersTable;