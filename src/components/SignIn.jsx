import {Field, Form, Formik, ErrorMessage} from "formik";
import{useSignIn} from '../hooks/useSignIn.js'

export default function SignIn(){
    const {Shema, signIn} = useSignIn()




    return      (<div className="sign-in-box">
                    <Formik 
                    validationSchema={Shema}
                    initialValues={{email:"", password:""}} 
                    onSubmit={
                      (values, actions)=>{
                        signIn(values)
                        actions.resetForm()
                      }}>
                      <Form className="sign-in-user">
                        {/* <labels></labels> useID()*/}
                        <div className="sign-in-input-box">
                        <Field className="sign-in-input" type="email" name="email" placeholder="E-mail"/>
                        <div className="sign-in-error-msg">
                          <ErrorMessage name="email" as='span' className="error-msg"/>
                        </div>
                        
                        </div>
                        <div className="sign-in-input-box">
                        <Field className="sign-in-input" type="password" name="password" placeholder="Password"/>
                        <div className="sign-in-error-msg">
                          <ErrorMessage name="password" as='div' className="error-msg"/>
                        </div>
                        </div>
                        <button type="submit" className="sign-in-buton">Sign In</button>
                      </Form>
                    </Formik>
                 </div>)
}



