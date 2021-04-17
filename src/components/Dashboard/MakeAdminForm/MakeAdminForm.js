import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
const MakeAdminForm = () => {
    const [makeAdmin, setMakeAdmin] = useState({})
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        setMakeAdmin(data)
        fetch('http://localhost:5000/makeadmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => alert("Make Admin successfully"))

    };


    console.log(makeAdmin)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name", { required: true })} placeholder="Gowtam kumar" className="form-control" />
                {errors.name && <span className="text-danger">This field is required</span>}<br />

                <input type="email" {...register("email", { required: true })} placeholder="gowtampaul0@gmail.com " className="form-control" />
                {errors.email && <span className="text-danger">This field is required</span>}<br />

                <button type="submit" className="btn brand-button">Submit</button>
            </form>
        </div>
    );
};

export default MakeAdminForm;