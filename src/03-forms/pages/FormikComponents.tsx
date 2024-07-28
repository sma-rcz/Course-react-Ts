import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik' // import useFormik hook
import '../styles/styles.css' // import styles.css files
import * as Yup from 'yup' // import yup for validation

interface FormValues { // create interface for form values
    firstName: string;
    lastName: string;
    email: string;
}




export const FormikComponents = () => {




    return (
        <div>
             <h1>Formik basic Tutorial</h1>
            {/*este es un haiorder component que se encarga de manejar el estado del formulario y la validacion de los campos */}
            <Formik initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: '',

            }}
                onSubmit={(values, {resetForm}) => {  //este es el evento que se dispara cuando se envia el formulario
                    console.log(values);
                    resetForm(); //este metodo se utiliza para resetear el formulario despues de que se envia
                }}
                validationSchema={Yup.object({ // aqui se define el esquema de validacion de los campos que se van a validar
                    firstName: Yup.string()
                        .max(15, 'debe de tener 15 caracteres o menos')
                        .required('el firstName es requerido'),
                    lastName: Yup.string()
                        .max(20, 'debe de tener 20 caracteres o menos')
                        .required('el lastName es requerido'),
                    email: Yup.string()
                        .email('email invalido')
                        .required('El correo electronico es requerido'),
                    terms:Yup.boolean()
                    .oneOf([true],'Debe de aceptar los terminos y condiciones'), // se valida que el campo sea un booleano y que sea true
                    jobType:Yup.string()
                    .oneOf(['designer','development','jrDevelopment' ,'product','other'],'Debe de seleccionar un tipo de trabajo')
                    .test('not-jrDevelopment', 'No puede ser jrDevelopment', value => value !== 'jrDevelopment')
                    .required('debe de seleccionar un tipo de trabajo'),

                })}
            >   
                {({isValid ,dirty}) => ( // destructuring the formik props
                    <Form >{/* aqui se define el formulario de formik */}
                        <label htmlFor='firstName'>First Name</label>
                        <Field type='text ' id='firstName' name='firstName' placeholder="firstName"   /> {/* aqui se define el campo del formulario */}
                        <ErrorMessage name='firstName' component={'span'} /> {/* aqui se define el mensaje de error que se va a mostrar si el campo no cumple con la validacion */}

                        <label htmlFor='lastName'>Last Name</label>
                        <Field type='text ' id='lastName' name='lastName' placeholder="lastName"  />
                        <ErrorMessage name='lastName' component={'span'} />

                        <label htmlFor='email'>Email</label>
                        <Field type='email' id='email' name='email' placeholder="email" />
                        <ErrorMessage name='email' component={'span'}  />

                        <label htmlFor='terms'>Terms and Condicions</label>
                        <Field type='checkbox' id='terms' name='terms' />
                        <ErrorMessage name='terms' component={'span'} />

                        <label htmlFor='jobType'>Job Type</label>
                        <Field  as='select' id='jobType' name='jobType' >
                            <option value={''}>Select a job type</option>
                            <option value={'designer'}>Designer</option>
                            <option value={'development'}>Developer</option>
                            <option value={'jrDevelopment'}>Junior Developer</option>
                            <option value={'product'}>Product Manager</option>
                            <option value={'other'}>Other</option>
                        </Field>
                        <ErrorMessage name='jobType' component={'span'} />

                        {/*isvalid y dirty son propiedades de formik que se utilizan para deshabilitar el boton de submit si el formulario no es valido o si no ha sido modificado */}
                        <button type='submit' disabled={!isValid || !dirty} >Submit</button>


                    </Form>
                )}

            </Formik>
           
        </div>

    )
}
