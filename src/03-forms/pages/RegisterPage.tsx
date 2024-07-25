import '../styles/styles.css'
import { useForm } from '../hooks/useForm'
export const RegisterPage = () => {
  const { name, email, password1, password2, onChange, onSummit,
    isValidName,isValidEmail,isValidPassword
    
   } = useForm();
  // const { name,email, password1 ,password2 }= registerDate;










  return (
    <div>

      <h1>RegisterPage</h1>
      <form onSubmit={onSummit}>
        <input type='text'
          placeholder='name'
          value={name}
          name='name'
          onChange={onChange} 
          className={`${isValidName(name) ?  'has-error' : ''}`}
          />
          {isValidName(name) && <span> Este name no es valido:{name}</span>}

        <input type='email'
         placeholder='email' 
         value={email}
          name='email'
          className={`${!isValidEmail(email) ?  'has-error' : ''}`}
           onChange={onChange} />
            {!isValidEmail(email) && <span> Este correo no es valido {email}</span>}
            {email.trim().length <= 0 && <span> Este campo es requerido</span>}
           

        <input type='password1'
         placeholder='password'
          value={password1}
           name='password1'
          className={`${isValidPassword(password1,password2) ?  'has-error' : ''} `}
           onChange={onChange} />
            {isValidPassword(password1,password2) && <span> Las contraseñas no coinciden</span>}
            {(password1.trim().length <= 0 && <span> Este campo es requerido</span>)}
            

           
           
        <input type='password2'
         placeholder='Repeat Password'
          value={password2} 
          name='password2' onChange={onChange}
          className={`${isValidPassword(password1,password2) ?  'has-error' : ''}`}
          />
          {isValidPassword(password1,password2) && <span> Las contraseñas no coinciden</span>}
          {password2.trim().length <= 0 && <span> Este campo es requerido</span>}
         
          

        <button type='submit'>Register</button>

      </form>
    </div>
  )
}
