import {Field, Form, Formik, ErrorMessage} from "formik";
import{useAddUserForm} from '../hooks/useAddUserForm'

  export default function AddUserForm(){
    const {Shema, addNewContact} = useAddUserForm()
    
    
return      (<div className="add-contact-box">
  <Formik 
    validationSchema={Shema}
    initialValues={{name:"", number:""}} 
    onSubmit={
      (values, actions)=>{
        addNewContact(values)
        actions.resetForm()
      }}>
    <Form className="add-contact">
      {/* <labels></labels> useID()*/}
      <div className="add-contact-input-box">
      <Field className="add-contact-input" type="text" name="name" placeholder="Name and Surneme"/>
      <div className="add-contact-error-msg">
        <ErrorMessage name="name" as='span' className="error-msg"/>
      </div>
      
      </div>
      <div className="add-contact-input-box">
      <Field className="add-contact-input" type="phone" name="number" placeholder="+48 111 111 111"/>
      <div className="add-contact-error-msg">
        <ErrorMessage name="number" as='div' className="error-msg"/>
      </div>
      </div>
      <button type="submit" className="add-contact-buton">Add Contact</button>
    </Form>
  </Formik>
</div>)



      
}