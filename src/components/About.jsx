import { motion } from "framer-motion";


function About() {


  return (


    <section className="about" id="about">



      <motion.h2

        initial={{opacity:0,y:50}}

        whileInView={{opacity:1,y:0}}

        transition={{duration:0.8}}

        viewport={{once:true}}

      >

        About Me

      </motion.h2>






      <motion.div


        className="about-container"


        initial={{opacity:0,scale:0.9}}

        whileInView={{opacity:1,scale:1}}

        transition={{duration:0.8}}

        viewport={{once:true}}

      >





        <p>

          I am <strong>Vennam Kavitha</strong>, a 4th year 
          <strong> Artificial Intelligence and Data Science </strong>
          student at Vasireddy Venkatadri Institute of Technology
          with a strong interest in Artificial Intelligence,
          Machine Learning, Data Analysis, and Software Development.

        </p>





        <p>

          I have hands-on experience working with 
          <strong> Python, SQL, Data Handling, Machine Learning,
          NLP, and Full Stack Development </strong>.
          I enjoy transforming ideas into practical solutions
          by combining programming skills with intelligent technologies.

        </p>





        <p>

          My key project,
          <strong> AI Resume Analyzer </strong>,
          is an AI-powered application that analyzes resumes,
          calculates ATS scores, performs semantic job matching,
          identifies skill gaps, and provides personalized
          recommendations to improve career readiness.

        </p>





        <p>

          I am continuously improving my technical skills through
          DSA practice, AI learning, and real-world projects.
          My goal is to start my career as a
          <strong> Data Analyst or Software Engineer </strong>
          where I can contribute, learn, and grow with an organization.

        </p>






        <div className="about-stats">





          <div>

            <h3>

              8.82

            </h3>

            <span>

              CGPA

            </span>

          </div>






          <div>

            <h3>

              2+

            </h3>

            <span>

              Projects

            </span>

          </div>







          <div>

            <h3>

              AI

            </h3>

            <span>

              Specialization

            </span>

          </div>





        </div>






      </motion.div>




    </section>


  );

}


export default About;