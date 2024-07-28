import '../styles/styles.css'
import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import { useState } from 'react';





export const RegisterFormikPage = () => {
    const [showPassword, setshowPassword] = useState(false);
    const [shwoPassword2, setshwoPassword2] = useState(false);


    /*
    const handleShowPassword = () => {
        setshowPassword(!showPassword)
    }

    const handleShowPassword2 = () => {
        setshwoPassword2(!shwoPassword2)
    }



    const { handleSubmit, handleReset, errors, dirty, isValid, touched, getFieldProps } = useFormik({
        initialValues: {
            name: '',
            email: '',
            password1: '',
            password2: ''
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, 'debe de tener 2 caracteres o mas')
                .max(15, 'debe de tener 15 caracteres o menos')
                .required('el name es requerido'),
            email: Yup.string()
                .email('email invalido')
                .required('El correo electronico es requerido'),
            password1: Yup.string()
                .min(6, 'debe de tener 6 caracteres o mas')
                //  .oneOf([Yup.ref('passwrord1')], 'Las contraseñas no coinciden')
                .required('la contraseña es requerida'),
            password2: Yup.string()
                .min(6, 'debe de tener 6 caracteres o mas')
                .oneOf([Yup.ref('password1')], 'Las contraseñas no coinciden')
                .required('la contraseña es requerida'),



        })

    })*/




    return (
        <div>

            <h1>Register Formik Page</h1>
            <Formik initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: ''
            }}
                onSubmit={(values ,{resetForm}) => {
                    console.log(values)
                    resetForm();
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                .min(2, 'debe de tener 2 caracteres o mas')
                .max(15, 'debe de tener 15 caracteres o menos')
                .required('el name es requerido'),
            email: Yup.string()
                .email('email invalido')
                .required('El correo electronico es requerido'),
            password1: Yup.string()
                .min(6, 'debe de tener 6 caracteres o mas')
                //  .oneOf([Yup.ref('passwrord1')], 'Las contraseñas no coinciden')
                .required('la contraseña es requerida'),
            password2: Yup.string()
                .min(6, 'debe de tener 6 caracteres o mas')
                .oneOf([Yup.ref('password1')], 'Las contraseñas no coinciden')
                .required('la contraseña es requerida'),



                })}
            >
                {
                    ({isValid,dirty}) => (
                        <Form>
                            <label htmlFor='name'>Name</label>
                            <Field type='text' id='name' name='name'  placeholder='name' />
                            <ErrorMessage name='name' component='span' />

                            <label htmlFor='email'>Email</label>
                            <Field type='email' id='email' name='email' placeholder='email' />
                            <ErrorMessage name='email' component='span' />

                            <label htmlFor='password1'>Password</label>
                            <div>
                                <Field type={showPassword ? 'text' : 'password'} id='password1' name='password1' placeholder='password' />
                                <button type='button' onClick={() => setshowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</button>
                            </div>
                            <ErrorMessage name='password1' component='span' />
                            <label htmlFor='password2'>Repeat Password</label>
                            <div>
                               
                                <Field type={shwoPassword2 ? 'text' : 'password'} id='password2' name='password2'  placeholder='password' />
                                <button type='button' onClick={ () => setshwoPassword2(!shwoPassword2 )} >{shwoPassword2 ? 'Hide' : 'Show'} </button>
                            </div>
                            <ErrorMessage name='password2' component='span' />
                            <button type='submit' disabled={!isValid || !dirty}>Register</button>

                        </Form>

               ) }


            </Formik>
            {/*    <form onSubmit={handleSubmit} onReset={handleReset}>
                <label htmlFor='name'>Name</label>
                <input type='text'
                    id='name'
                    {...getFieldProps('name')} />
                {touched.name && errors.name && <span>{errors.name}</span>}

                <label htmlFor='email'>Email</label>

                <input type='email'
                    id='email'
                    {...getFieldProps('email')} />
                {touched.email && errors.email && <span>{errors.email}</span>}
                <label htmlFor='password1'>Password</label>

                <div>
                    <input type={showPassword ? 'text' : 'password'}
                        id='password1'
                        {...getFieldProps('password1')} />
                    <button type='button' onClick={handleShowPassword}>{showPassword ? 'Hide' : 'Show'}</button>
                </div>


                {touched.password1 && errors.password1 && <span>{errors.password1}</span>}

                <label htmlFor='password2'>Repeat Password</label>
                <div>

                    <input type={shwoPassword2 ? 'text' : 'password'}
                        id='password2'
                        {...getFieldProps('password2')} />
                    <button type='button' onClick={handleShowPassword2}>{shwoPassword2 ? 'Hide' : 'Show'}</button>
                </div>
                {touched.password2 && errors.password2 && <span>{errors.password2}</span>}




                <button type='submit' disabled={!isValid || !dirty}   >Register</button>

                
                
            </form> */}
        
        </div>
    )
}
