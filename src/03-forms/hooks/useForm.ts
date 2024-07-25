import React, { ChangeEvent, FormEvent, useState } from 'react'
import { RegisterData } from '../interfaces/Registerdata';


const initialState:RegisterData = {
    name: '',
    email: '',
    password1: '',
    password2: '',
}



export const useForm = () => {


    const [registerDate, setregisterDate] = useState(initialState);
    const { name,email, password1 ,password2 }= registerDate;

    const  onChange = ({target}:ChangeEvent<HTMLInputElement>) => {
        
        const { name,value} = target;
        setregisterDate({
            ...registerDate,
            [name]: value
        });
       // console.log(registerDate);
       
    }

    const onClear = ()=>{
        setregisterDate(initialState);
    }
    const onSummit = (event:FormEvent<HTMLElement> ) =>{
        event.preventDefault();
      //  console.log(registerDate);
        //const errror = 'al menos un campo esta vacio';
        /*
        if(name.trim() === '' || email.trim() === '' || password1.trim() === '' || password2.trim() === ''){
           // console.log('All fields are required');
          //  return;
          
         return  alert('All fields are required');
        }
        if(password1.trim() !== password2.trim()){
            console.log('Passwords do not match');
            return;
        }*/
        onClear();
    }

    const isValidName = ( name: string ) => {
        return name.trim().length <= 0;
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       
        return re.test(email) || email.trim().length <= 0;
    }
    const isValidPassword = ( password1: string, password2: string ) => {
        return password1.trim() !== password2.trim() ;
    }
   


   
  return {
        ...registerDate, // name,email,password1,password2 es lo mismo enviarlos por separado
        onChange,
        onSummit,
        isValidName,
        isValidEmail,
        isValidPassword,
       


  }
}
