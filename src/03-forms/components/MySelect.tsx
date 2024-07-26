import { useField, Field, ErrorMessage } from 'formik';
import React from 'react'


//interface para definir las propiedades que va a recibir el componente
interface Props {
    label:string;
    name:string;
  //  type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x:string]:any;
}

export const MySelect = ({ label, ...props }: Props) => { //aqui pasamos el label y el resto de las propiedades que va a recibir el componente
    
        //aqui esta el meta y el field
    const [field] = useField(props);  //aqui destruturamos el field y el meta de useField que es un hook de formik
    return (
        <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />{/* */}
       <ErrorMessage name={props.name} component='span' className='cutom-span-erorr-class' />{/*de aqui viene  el mensaje del error */}
        {/*{
            meta.touched && meta.error  && (
                <span className='error>' >{meta.error}</span>
            )
        } */}

        </>
    )
}
