import React from 'react'
import { Formik, Form } from 'formik'
import formjson from '../data/custom.form.json'
import { MySelect, MyTextInputs } from '../components'
import * as Yup from 'yup';
console.log(formjson)

const initialValues: { [key: string]: any } = {

}

const requiredFileds:{[key:string]:any} = {}

for (const input of formjson) { //recorremos el json para obtener los valores iniciales del formulario
  initialValues[input.name] = input.value; //agregamos los valores iniciales al objeto de valores iniciales

  let schema = Yup.string() //creamos un esquema de validacion para el campo

  if(!input.validations) continue;      //si no hay reglas de validacion continuamos con el siguiente campo
 // console.log('hola mundo')
 
 for(const rule of input.validations){ //recorremos las reglas de validacion
    if(rule.type === 'required'){ //si la regla es requerido
      schema = schema.required('Este camo es requerido'); //agregamos la regla de validacion al esquema
    }
    if(rule.type === 'minLength'){
      schema = schema.min( (rule as any).value || 2, `El campo debe tener al menos ${ (rule as any).value || 2} caracteres`)
    }

    if(rule.type === 'email'){
      schema = schema.email( ' El email deb de ser valido')
    }
     //... otras reglas de validacion
 }
 requiredFileds[input.name] =schema;        //agregamos el esquema de validacion al objeto de campos requeridos


}

const validationSchema = Yup.object({...requiredFileds}) //creamos el esquema de validacion con los campos requeridos



export const DynamicForm = () => {
  return (
    <div>

      <h1>DynamicForm</h1>
      <Formik initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {
          (formik) => (
            <Form>
              <span>hola mundo</span>
              {
                formjson.map(({ id, type, name, placeholder, label, options }) => {
                  if (type === 'input' || type === 'password' || type === 'email') {
                    return <MyTextInputs
                      key={name}
                      type={type as any}
                      name={name}
                      label={label}
                      placeholder={placeholder} />
                  } else if (type === 'select') {
                    return (
                      <MySelect key={name} name={name} label={label}>

                        {
                          options?.map(({  id, label }) =>
                            
                            <option key={id} value={id}>{label}</option>
                          )
                        }

                      </MySelect>


                    )
                  }

                   // return null;

                })
              }
              <button type='submit'>Submit</button>

            </Form>
          )
        }

      </Formik>
    </div>
  )
}
