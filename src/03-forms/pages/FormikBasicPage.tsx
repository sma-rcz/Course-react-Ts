import '../styles/styles.css'

export const FormikBasicPage = () => {
    return (
        <div>
            <h1>Formik basic Tutorial</h1>
            <form noValidate>
               <label htmlFor='firstName'>First Name</label>
                <input type='text' id='firstName' name='firstName' />
               <span>First name is required</span>

                <label htmlFor='lastName'>Last Name</label>
                <input type='text' id='lastName' name='lastName' />
                <span>Last name is required</span>

                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' />
                <span>Email is required</span>

                <button type='submit'>Submit</button>


            </form>
        </div>

    )
}
