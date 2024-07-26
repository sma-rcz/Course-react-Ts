import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik' // import useFormik hook
import '../styles/styles.css' // import styles.css files
import * as Yup from 'yup' // import yup for validation


/*
import { MyTextInputs } from '../components/MyTextInputs';
import { MySelect } from '../components/MySelect';
import { MyCheckBox } from '../components/MyCheckBox';*/
import { MyTextInputs , MyCheckBox ,MySelect } from '../components';







export const FormikAbstractation = () => {




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
            

          
                onSubmit={(values ,{ resetForm}) => {  //este es el evento que se dispara cuando se envia el formulario
                    console.log(values);
                   resetForm(); // se resetea el formulario
                }}
               
                
                validationSchema={Yup.object({ // aqui se define el esquema de validacion de los campos que se van a validar
                    firstName: Yup.string()
                        .max(15, 'debe de tener 15 caracteres o menos')
                        .required('el firstName es requerido'),
                    lastName: Yup.string() // se valida que el campo sea un string
                        .max(20, 'debe de tener 20 caracteres o menos') // se valida que el campo tenga un maximo de 20 caracteres
                        .required('el lastName es requerido'), // se valida que el campo sea requerido
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
                {({ isValid, dirty }) => ( // destructuring the formik props
                    <Form >{/* aqui se define el formulario de formik */}
                        <MyTextInputs
                            id={'firstName'}
                            label={'First Name'}
                            name="firstName"
                            placeholder="firstName" />
                        <MyTextInputs
                            id={'lastName'}
                            label={'last name'}
                            name='lastName'
                            placeholder='lastName' />
                        <MyTextInputs
                            id={'email'}
                            label='Email Address'
                            name='email'
                            placeholder='email'
                            type='email'
                        />

                            <MySelect id={'jobType'} label='jobType' name='jobType'> 
                            <option value={''}>Select a job type</option>
                            <option value={'designer'}>Designer</option>
                            <option value={'development'}>Developer</option>
                            <option value={'jrDevelopment'}>Junior Developer</option>
                            <option value={'product'}>Product Manager</option>
                            <option value={'other'}>Other</option>
                            </MySelect>

                            <MyCheckBox id='terms' label={'Terms & Condicions'} name={'terms'} />

                        

                        {/*isvalid y dirty son propiedades de formik que se utilizan para deshabilitar el boton de submit si el formulario no es valido o si no ha sido modificado */}
                        <button type='submit' disabled={!isValid || !dirty} >Submit</button>


                    </Form>
                )}

            </Formik>

        </div>

    )
}
