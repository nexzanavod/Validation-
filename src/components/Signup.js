import React from 'react';
import {Formik, Form} from 'formik';
import {TextField} from './TextField';
import * as Yup from "yup";

export const Signup = () => {

    const validate = Yup.object({
        firstName:Yup.string()
        .max(15,'Must be 15 characters or less')
        .required('Required'),
        lastName:Yup.string()
        .max(20,'Must be 20 characters or less')
        .required('Required'),
        email:Yup.string()
        .max('Email is invalid')
        .required('Required'),
        password:Yup.string()
        .max(6,'Password must be at least 6 charaters')
        .required('Password is Required'),
        confirmPassword:Yup.string()
        .max([Yup.ref('password'),null],'Password must match')
        .required('Password is Required')
    })



    return (
        <Formik
           initialValues ={{
               firstName:'',
               lastName:'',
               email:'',
               password:'',
               confirmPassword:'',
           }}
           validationSchema={validate}
        
        
        >
            

            {formik => (
                <div>
                   <h1 className="my-4 font-weight-bold-display-4">
                       Signup
                   </h1>
                   {console.log(formik.values)}

                   <form >
                     <TextField label="First Name" name="firstName" type="text" />
                     <TextField label="Last Name" name="lastName" type="text" />
                     <TextField label="Email" name="email" type="email" />
                     <TextField label="Password" name="password" type="password" />
                     <TextField label="Confirm Password" name="confirmPassword" type="confirmPassword" />
                     
                     <button className="btn btn-dark mt-3" type="submit">Register</button>
                     <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                   </form>
                </div>
            )}
        </Formik>
    )
}
