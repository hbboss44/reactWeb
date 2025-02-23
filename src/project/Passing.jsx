import { Field, Formik } from "formik";
import { Form } from "react-router-dom";
import { useForm } from "@formspree/react";
import { ValidationError } from "@formspree/react";

const Passing = () => {
    const [state,handleSubmit]=useForm("mjkgovwd")
    // if (state.succeeded) {
    //     return <p>Thanks for joining!</p>;
    // }
    return (<>
        {/* <Formik>
            <Field type="email" placeholder="Enter your email"/>
            <Field type="submit" value="Submit"/>
        </Formik> */}

        
        <form action="https://formsubmit.co/habibsulaiman51@gmail.com" method="POST">
            <input type="email"  name="email" placeholder="Enter Your Email" />
            <input type="text" name="Full name" placeholder="Enter Name"/>
            <input type="submit" value='Submit' />
        </form>
        {/* {
            (state.succeeded)&&<p>Your form submitted succesfully</p>
            
        } */}

{

state.succeeded && <p>succeeded</p>
}
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </>  );
}
 
export default Passing;