import React from 'react';
import { useForm } from "react-hook-form";
const MakeAdminForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('https://cryptic-sea-20754.herokuapp.com/makeadmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => alert("Admin Add Successfully"))
    };

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