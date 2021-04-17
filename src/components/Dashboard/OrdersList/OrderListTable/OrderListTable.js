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

                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allOrder.map((order, index) =>
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.service}</td>

                                <td>
                                    <select name="" id="" >
                                        <option value="" className="bg-danger">Pending</option>
                                        <option value="" className="bg-warning">On Going</option>
                                        <option value="" className="bg-success">Done</option>
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

export default OrderListTable;