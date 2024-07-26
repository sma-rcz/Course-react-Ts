import { useField, Field, ErrorMessage } from 'formik';
import React from 'react'


//interface para definir las propiedades que va a recibir el componente
interface Props {
    label:string;
    name:string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x:string]:any;
}

export const MyTextInputs = ({ label, ...props }: Props) => { //aqui pasamos el label y el resto de las propiedades que va a recibir el componente
    const [field] = useField(props);  //aqui destruturamos el field y el meta de useField que es un hook de formik
  //  console.log(field);
    
    return (
        <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className='text-input' type='text' {...field} {...props}/>
        <ErrorMessage name={props.name} component='span' className='cutom-span-erorr-class' />

        {/*{
            meta.touched && meta.error  && (
                <span className='error>' >{meta.error}</span>
            )
        } */}
        
        </>
    )
}
