import {  FormikErrors, useFormik } from 'formik' // import useFormik hook
import '../styles/styles.css' // import styles.css files
import * as Yup from 'yup' // import yup for validation

interface FormValues { // create interface for form values
    firstName: string;
    lastName: string;
    email: string;
}




export const FormikYupPage = () => {


    

    //hadleChange es para manejar el cambio de los inputs
    //values es para manejar los valores de los inputs
    //handleSubmit es para manejar el submit del formulario
    //errors es para manejar los errores de los inputs 
    //touched es un meotod formik para saber si se ha tocado el input
    //handleBlur es para manejar el blur de los inputs osea cuando se sale del input o entra
    const {  handleSubmit, errors,
         touched, isValid, dirty ,getFieldProps } = useFormik({ //isValid es para saber si el formulario es valido y dirty es para saber si el formulario ha sido tocado
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit(values) {
            console.log(values)
        },
        validationSchema:Yup.object({
            firstName:Yup.string()
            .max(15 , 'debe de tener 15 caracteres o menos')
            .required('el firstName es requerido'),
            lastName:Yup.string()
            .max(20 , 'debe de tener 20 caracteres o menos')
            .required('el lastName es requerido'),
            email:Yup.string()
            .email('email invalido')
            .required('El correo electronico es requerido')

        })
       

    })
    return (
        <div>
            <h1>Formik basic Tutorial</h1>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor='firstName'>First Name</label>
                <input type='text'
                    id='firstName'
                    
                    {...getFieldProps('firstName')} //getfieldprops es un metodo de formik para obtener los props de los inputs  osea los eventos , los valores y metodos de los inputs
                   
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor='lastName'>Last Name</label>
                <input type='text'
                    id='lastName'
                    {...getFieldProps('lastName')}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor='email'>Email</label>
                <input type='email'
                    id='email'
                    {...getFieldProps('email')}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type='submit' disabled={!isValid || !dirty} >Submit</button>


            </form>
        </div>

    )
}
