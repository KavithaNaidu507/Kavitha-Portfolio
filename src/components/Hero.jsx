import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import profile from "../assets/profile.png.jpg";


function Hero() {


  return (


    <section className="hero" id="home">



      <motion.div

        className="hero-content"

        initial={{opacity:0,x:-80}}

        animate={{opacity:1,x:0}}

        transition={{duration:1}}

      >



        <p className="hero-small">

          Hello, I'm

        </p>




        <h1>

          Vennam <span>Kavitha</span>

        </h1>





        <h2>

          AI & Data Science Student

        </h2>





        <p>

          I am a 4th year Artificial Intelligence and Data Science student
          passionate about Artificial Intelligence, Machine Learning,
          Data Analysis, and Full Stack Development.
          I build intelligent solutions that solve real-world problems.

        </p>






        <div className="hero-buttons">





          <Link

            to="projects"

            smooth={true}

            duration={500}

          >

            <button>

              View Projects

            </button>


          </Link>






          <a

            href="https://drive.google.com/file/d/1kGsK7TSsrH3CptojRbDSHsZdNyPOOeIm/view?usp=sharing"

            target="_blank"

            rel="noreferrer"

          >

            <button className="resume-btn">

              Resume

            </button>


          </a>





        </div>








        <div className="hero-social">





          <a

            href="https://github.com/KavithaNaidu507"

            target="_blank"

            rel="noreferrer"

          >

            <FaGithub />

          </a>






          <a

            href="mailto:kavithanaidu47@gmail.com"

          >

            <FaEnvelope />

          </a>





        </div>





      </motion.div>








      <motion.div

        className="hero-image"

        initial={{opacity:0,scale:0.5}}

        animate={{opacity:1,scale:1}}

        transition={{duration:1}}

      >





        <div className="profile-circle">



          <img

            src={profile}

            alt="Kavitha"

          />



        </div>





      </motion.div>





    </section>


  );

}


export default Hero;