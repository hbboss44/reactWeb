import React, { useRef } from "react";
import { BsLinkedin,BsGithub,BsTwitterX } from "react-icons/bs";
import { useForm } from "@formspree/react";
import '../project/contact.css'
import { useFormik } from "formik";
import * as yup from 'yup'
import Alert from "./Alert";
const ContactPage = () => {
  const [state, handleSubmit] = useForm("mjkgovwd");
  console.log(state);
  let fullName=useRef("")
  let mail=useRef("")
  let message=useRef("")
  let print=()=>{
    <Alert userName={fullName.current.value}/>
  }  


  // let form=useFormik({
  //   initialValues:{
  //       firstname:"",
  //       lastname:"",
  //       email:""
  //   },
  //   onSubmit:(values)=>{
  //       console.log(values);
  //   },

  //   validationSchema:yup.object({
  //       firstname: yup.string().required("This field is required").min(5, "Must be at least 5 character log").max(12),
  //       lastname: yup.string().required("This field is required").min(5).max(10),
  //       email:yup.string().email("This is not a valid email")
  //   })
  // })


    return ( <>
    {
        state.succeeded && <Alert userName={fullName.current.value}/>
      }
       <div className="contact-page-container">
      <div className="contact-page-grid">
        {/* Column 1: Contact Information */}
        <div className="contact-info">
          <h2 className="section-title">Contact Information</h2>
          <p><strong>Address:</strong> KingsWay Estate Oke-Oko Isawo Ikorodu, Lagos State, Nigeria</p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/+2349018857567" className="highlight">Chat on WhatsApp</a></p>
          <p><strong>Email:</strong> <a href="mailto:habibsulaiman51@gmail.com" className="highlight">habibsulaiman51@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+2349018857567" className="highlight">+2349018857567</a></p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/habibullahi-ade-sulaiman-07b65a319" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/hbboss44" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
            <a href="https://x.com/hbboss44" target="_blank" rel="noopener noreferrer"><BsTwitterX/></a>
          </div>
        </div>
      
        {/* Column 2: Get in Touch Form */}
        <div className="contact-form-container">
          <h2 className="section-title">Get in Touch</h2>
          <form className="contact-form" onSubmit={handleSubmit} >
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="FullName" placeholder="Enter your name" ref={fullName} required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="Email" placeholder="Enter your email" ref={mail} required/>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="Message"rows="4" placeholder="Write your message here" ref={message} required></textarea>
            </div>
            <button type="submit" className="submit-button" disabled={state.submitting} onClick={print}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
    </> );
}
 
export default ContactPage;
