import { FaGithub, FaEnvelope } from "react-icons/fa";


function Footer() {


  return (

    <footer className="footer">


      <p>

        © {new Date().getFullYear()} Kavitha. All Rights Reserved.

      </p>




      <div className="footer-links">



        <a

          href="https://github.com/KavithaNaidu507"

          target="_blank"

          rel="noreferrer"

        >

          <FaGithub />

        </a>





        <a href="mailto:kavithanaidu47@gmail.com">

          <FaEnvelope />

        </a>




      </div>



    </footer>

  );

}


export default Footer;