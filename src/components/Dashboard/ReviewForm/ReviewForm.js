import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ReviewForm = () => {
    const [review, setReview] = useState({})
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        setReview(data)
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => alert("Make Admin successfully"))

    };
    console.log(review)
    return (
        <div>
            <form className="row" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-6">
                    <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="form-control" />
                    {errors.name && <span>This field is required</span>}<br />
                </div>
                <div className="col-md-6">
                    <input type="text" {...register("companyName", { required: true })} placeholder="Company name" className="form-control" />
                    {errors.companyName && <span>This field is required</span>}<br />
                </div>
                <div className="col-md-12">
                    <textarea name="" id=""   {...register("description", { required: true })} cols="20" rows="5" placeholder="Description..." className="form-control"></textarea>
                    {errors.description && <span>This field is required</span>}<br />
                </div>
                <button type="submit" className="btn brand-button">Submit</button>
            </form>
        </div>
    );
};

export default ReviewForm;