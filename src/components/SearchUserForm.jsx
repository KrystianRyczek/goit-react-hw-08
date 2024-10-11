import {Field, Form, Formik} from "formik"
import{useSearchForm} from '../hooks/useSearchForm'

  export default function SearchUserForm(){

    const {filterValue, updateFilterValue} = useSearchForm()

    return      (<div className="search-form-box">
                    
                    <Formik 
                    initialValues={{filter:""}}
                    //onSubmit={(event)=>{}}
                    >
                      <Form className="search-contact-form"> 
                        <p className="search-form-paragraf">Search contact by name:</p>
                        <Field
                        className="search-contact-input-box" 
                        type="text" 
                        name="filter"
                        placeholder="Search..."
                        value= {filterValue}
                        onChange={(event)=>{
                          updateFilterValue(event.target.value)
                                          }}
                        />
                      </Form>
                    </Formik>
                </div>)
}
