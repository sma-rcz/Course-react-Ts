import {  FormikErrors, useFormik } from 'formik' // import useFormik hook
import '../styles/styles.css' // import styles.css files


interface FormValues { // create interface for form values
    firstName: string;
    lastName: string;
    email: string;
}




export const FormikYupPage = () => {


    const validate = ({ firstName, lastName, email }: FormValues) => {
        const errores: FormikErrors<FormValues> = {}
        if (!firstName) {
            errores.firstName = 'First name is required'

        } else if (firstName.trim().length <= 10) {
            errores.firstName = 'must be more than 10 characters or less'
        }

        if (!lastName) {
            errores.lastName = 'Last name is required'
        } else if (lastName.length >= 15) {
            errores.lastName = 'must be more than 15 characters'
        }
        if (!email) {
            errores.email = 'email is required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errores.email = 'Invalid email address'
        }

        return errores;
    }

    //hadleChange es para manejar el cambio de los inputs
    //values es para manejar los valores de los inputs
    //handleSubmit es para manejar el submit del formulario
    //errors es para manejar los errores de los inputs 
    //touched es un meotod formik para saber si se ha tocado el input
    //handleBlur es para manejar el blur de los inputs osea cuando se sale del input o entra
    const { handleChange, values, handleSubmit, errors, touched, handleBlur, isValid, dirty } = useFormik({ //isValid es para saber si el formulario es valido y dirty es para saber si el formulario ha sido tocado
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit(values) {
            console.log(values)
        },
        validate

    })
    return (
        <div>
            <h1>Formik basic Tutorial</h1>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor='firstName'>First Name</label>
                <input type='text'
                    id='firstName'
                    name='firstName'
                    onChange={handleChange}  //este  metodo de formik es para manejar el cambio de los inputs
                    onBlur={handleBlur} //este metodo de formik es para manejar el blur de los inputs osea cuando se sale del input o entra
                    value={values.firstName}
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor='lastName'>Last Name</label>
                <input type='text'
                    id='lastName'
                    name='lastName'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor='email'>Email</label>
                <input type='email'
                    id='email'
                    name='email'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type='submit' disabled={!isValid || !dirty} >Submit</button>


            </form>
        </div>

    )
}
