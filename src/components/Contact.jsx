import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaEnvelope, FaGithub, FaPhone, FaMapMarkerAlt } from "react-icons/fa";


function Contact() {


  const form = useRef();



  const sendEmail = (e) => {

    e.preventDefault();


    emailjs.sendForm(

      "YOUR_SERVICE_ID",

      "YOUR_TEMPLATE_ID",

      form.current,

      "YOUR_PUBLIC_KEY"

    )

    .then(() => {

      alert("Message sent successfully!");

      form.current.reset();

    })

    .catch(() => {

      alert("Failed to send message");

    });


  };





  return (


    <section className="contact" id="contact">


      <motion.h2

        initial={{opacity:0,y:40}}

        whileInView={{opacity:1,y:0}}

        transition={{duration:0.7}}

      >

        Contact Me

      </motion.h2>





      <div className="contact-wrapper">





        <motion.div

          className="contact-card"

          initial={{opacity:0,x:-70}}

          whileInView={{opacity:1,x:0}}

          transition={{duration:0.7}}

        >



          <h3>

            Let's Work Together

          </h3>



          <p>

            Feel free to reach out for internships,
            projects, collaborations, or opportunities.

          </p>





          <div className="contact-item">

            <FaEnvelope/>

            <a href="mailto:kavithanaidu47@gmail.com">

              kavithanaidu47@gmail.com

            </a>

          </div>





          <div className="contact-item">

            <FaPhone/>

            <a href="tel:+919398855783">

              9398855783

            </a>

          </div>





          <div className="contact-item">

            <FaMapMarkerAlt/>

            <span>

              Andhra Pradesh, India

            </span>

          </div>





          <a

            className="github-contact"

            href="https://github.com/KavithaNaidu507"

            target="_blank"

            rel="noreferrer"

          >

            <FaGithub/>

            GitHub Profile

          </a>




        </motion.div>








        <motion.form


          ref={form}

          onSubmit={sendEmail}

          className="contact-box"


          initial={{opacity:0,x:70}}

          whileInView={{opacity:1,x:0}}

          transition={{duration:0.7}}

        >




          <input

            type="text"

            name="user_name"

            placeholder="Your Name"

            required

          />





          <input

            type="email"

            name="user_email"

            placeholder="Your Email"

            required

          />





          <textarea

            name="message"

            placeholder="Your Message"

            required

          />






          <button type="submit">

            Send Message

          </button>




        </motion.form>




      </div>



    </section>


  );

}


export default Contact;