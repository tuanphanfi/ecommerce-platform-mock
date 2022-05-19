import React from 'react';
import { useForm } from "react-hook-form";

const FromRegister = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (

        <form onSubmit={handleSubmit(props.onSubmit)} className="needs-validation" >
            <div className="mb-3">
                <label className="mb-2 text-muted" htmlFor="name">Name</label>
                <input id="name" type="text" className="form-control" name="name"
                    {...register("name", { required: true })}
                />
                <div className="text-danger">
                    {errors.name && <span>This field is required</span>}
                </div>
            </div>
            <div className="mb-3">
                <label className="mb-2 text-muted" htmlFor="email">E-Mail Address</label>
                <input id="email" type="email" className="form-control" name="email"
                    {...register("email", { required: true })}
                />

                <div className="text-danger">
                    {errors.email && <span>This field is required</span>}
                </div>
            </div>
            <div className="mb-3">
                <label className="mb-2 text-muted" htmlFor="password">Password</label>
                <input id="password" type="password" className="form-control" name="password"
                    {...register("password", { required: true })}
                />
                <div className="text-danger">
                    {errors.password && <span>This field is required</span>}
                </div>
            </div>

            <div className="mb-3">
                <label className="mb-2 text-muted" htmlFor="password">Confirm Password</label>
                <input id="password" type="password" className="form-control" name="password"
                    {...register("c_password", { required: true })}
                />
                <div className="text-danger">
                    {errors.c_password && <span>Confirm password field is required</span>}
                </div>
            </div>

            <p className="form-text text-muted mb-3">
                By registering you agree with our terms and condition.
            </p>
            <div className="align-items-center d-flex">
                <button type="submit" className="btn btn-primary ms-auto">
                    Register
                </button>
            </div>
        </form>
    );
};

export default FromRegister;