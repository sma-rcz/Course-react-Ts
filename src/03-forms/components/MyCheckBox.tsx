import { useField, Field, ErrorMessage } from 'formik';
import React from 'react'


//interface para definir las propiedades que va a recibir el componente
interface Props {
    label:string;
    name:string;
    [x:string]:any;
}

export const MyCheckBox = ({ label, ...props }: Props) => { //aqui pasamos el label y el resto de las propiedades que va a recibir el componente
    //de aqui viene el field y el meta
    const [field] = useField({...props, type:'checkbox' });  //aqui destruturamos el field y el meta de useField que es un hook de formik
  //  console.log(field);
    
    return (
        <>
        <label htmlFor={props.id || props.name}>
            <input type='checkbox' {...field} {...props} />
            {label}
            </label>
            <ErrorMessage name={props.name} component='span' className='cutom-span-erorr-class' />{/*De aqui viene el mensaje del error */}

             {/*{
            meta.touched && meta.error  && (
                <span className='error>' >{meta.error}</span>
            )
        } */}
       
        </>
    )
}
