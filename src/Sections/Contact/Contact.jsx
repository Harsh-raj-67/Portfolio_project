import React from 'react'
import './Contact.css';
import Heading from '../../Components/Heading/Heading';
const Contact = () => {
  return (
   <section id = "contact" className='contact_section'>
    <div className='contact_heading_1'>
    <Heading index="04" heading="What's Next"  />
    </div>
   <h1 className='contact_heading_2'>Get in touch</h1>
   <p className='contact_desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt reprehenderit assumenda accusamus, doloribus sint minima in magnam asperiores fugiat ab officiis esse iure nulla dolorum quasi. Libero ut ullam quia dicta corrupti, et incidunt modi cum eligendi perferendis minima provident?</p>
   <a href='mailto:Harshraj02032002@gmail.com'><button className='contact_btn'>Say Hello</button></a>

   </section>
  )
}

export default Contact;