import {Field, Form, Formik, ErrorMessage} from "formik";
import{useSignUp} from '../hooks/useSignUp.js'

export default function SignUp(){
    const {Shema, signUp} = useSignUp()

    return (
    <div className="sign-up-box">
                 <Formik 
                    validationSchema={Shema}
                    initialValues={{name:"", email:"", password:"", passwordConfirmation:""}} 
                    onSubmit={
                      (values, actions)=>{
                        signUp(values)
                        actions.resetForm()
                      }}>
                      <Form className="sign-up-user">
                      <div className="sign-up-input-box">
                          <Field className="sign-up-input" type="text" name="name" placeholder="Name"/>
                          <div className="sign-up-error-msg">
                            <ErrorMessage name="name" as='span' className="error-msg"/>
                          </div>
                        </div>
                        <div className="sign-up-input-box">
                          <Field className="sign-up-input" type="email" name="email" placeholder="E-mail"/>
                          <div className="sign-up-error-msg">
                            <ErrorMessage name="email" as='span' className="error-msg"/>
                          </div>
                        </div>
                        <div className="sign-up-input-box">
                          <Field className="sign-up-input" type="password" name="password" placeholder="Password"/>
                          <div className="sign-up-error-msg">
                            <ErrorMessage name="password" as='div' className="error-msg"/>
                          </div>
                        </div>
                        <div className="sign-up-input-box">
                          <Field className="sign-up-input" type="password" name="passwordConfirmation" placeholder="Repeate Password"/>
                          <div className="sign-up-error-msg">
                            <ErrorMessage name="passwordConfirmation" as='div' className="error-msg"/>
                          </div> 
                        </div>                        
                        <button type="submit" className="sign-up-buton">Sign Up</button>
                      </Form>
                 </Formik>
    
    
    
    
    </div>);
}

