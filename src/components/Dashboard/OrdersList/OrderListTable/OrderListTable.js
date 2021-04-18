import React from 'react';

const OrderListTable = ({ allOrder }) => {
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
                        allOrder.length === 0 && <p>Lodding.....</p>
                    }
                    {
                        allOrder.map((order, index) =>
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.service}</td>
                                <td>{order.paymentmethod}</td>
                                <td> {order.status}</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default OrderListTable;