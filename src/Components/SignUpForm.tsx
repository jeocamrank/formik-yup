import { FormEvent, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import './SignUpForm.css'

const SignUpForm = () => {
    const formik = useFormik({
        initialValues:{
            name: '',
            email: '',
            phone: '',
            password: '',
            conFirmedPassword: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required').min(4,"Must be 4 characters or more"),
            email: Yup.string().required('Required').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email address"),
            password: Yup.string().required('Required').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, "Password must be 8 character and containt at least one leter and one number"),
            conFirmedPassword: Yup.string().required('Required').oneOf([Yup.ref("password")], "Password must match"),
            phone: Yup.string().required('Required').matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, "Phone number must have at least 9 number")     
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <section>
            <form className='infoform' onSubmit={formik.handleSubmit}>
                <label> Your Name </label>
                <input
                    type="text"
                    id='name'
                    name='name'
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    placeholder='Enter your name'
                />
                {formik.touched.name && formik.errors.name && (
                    <div className='errorMsg'>{formik.errors.name}</div>
                )}

                <label> Email Address </label>
                <input
                    type="email"
                    id='email'
                    name='email'
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    placeholder='Enter your email'
                />
                {formik.touched.email && formik.errors.email && (
                    <div className='errorMsg'>{formik.errors.email}</div>
                )}

                <label> Password  </label>
                <input
                    type="password"
                    id='password'
                    name='password'
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    placeholder='Enter your password'
                />
                {formik.touched.password && formik.errors.password && (
                    <div className='errorMsg'>{formik.errors.password}</div>
                )}

                <label> Confirm Password </label>
                <input
                    type="password"
                    id='conFirmedPassword'
                    name='conFirmedPassword'
                    value={formik.values.conFirmedPassword}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    placeholder='Confirm your password'
                />
                {formik.touched.conFirmedPassword && formik.errors.conFirmedPassword && (
                    <div className='errorMsg'>{formik.errors.conFirmedPassword}</div>
                )}

                <label> Phone Number </label>
                <input
                    type="text"
                    id='phone'
                    name='phone'
                    value={formik.values.phone}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    placeholder='Enter your phone number'
                />
                {formik.touched.phone && formik.errors.phone && (   
                    <div className='errorMsg'>{formik.errors.phone}</div>
                )}

                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default SignUpForm;