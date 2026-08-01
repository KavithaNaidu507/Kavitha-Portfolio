import { motion } from "framer-motion";

function Education() {

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      branch: "Artificial Intelligence and Data Science",
      institute: "Vasireddy Venkatadri Institute of Technology",
      year: "2023 - 2027",
      score: "CGPA: 8.82 / 10"
    },

    {
      degree: "Intermediate",
      branch: "MPC",
      institute: "Narayana Junior College",
      year: "2021 - 2023",
      score: "Percentage: 98.2%"
    },

    {
      degree: "Secondary School Certificate",
      branch: "SSC",
      institute: "Sri Vani and Rama High School",
      year: "2021",
      score: "Percentage: 99.9%"
    }
  ];


  const certifications = [
    "Introduction to Python - Infosys Springboard",
    "Programming in Java (Intermediate) - NPTEL",
    "Python Beginner & Intermediate - SoloLearn",
    "C Programming - SoloLearn",
    "Advanced Problem Solving - Striver, Smart Interviews, CodeChef"
  ];


  return (

    <section className="education" id="education">


      <motion.h2

        initial={{opacity:0, y:50}}

        whileInView={{opacity:1, y:0}}

        transition={{duration:0.8}}

        viewport={{once:true}}

      >

        Education & Certifications

      </motion.h2>



      <div className="education-container">


        <div className="timeline">


          {
            education.map((item,index)=>(


              <motion.div

                className="education-card"

                key={index}

                initial={{opacity:0, x:-80}}

                whileInView={{opacity:1, x:0}}

                transition={{
                  duration:0.7,
                  delay:index * 0.2
                }}

                viewport={{once:true}}

              >


                <h3>
                  {item.degree}
                </h3>


                <h4>
                  {item.branch}
                </h4>


                <p>
                  {item.institute}
                </p>


                <p>
                  {item.year}
                </p>


                <span>
                  {item.score}
                </span>


              </motion.div>


            ))
          }


        </div>



        <motion.div

          className="certifications"

          initial={{opacity:0, x:80}}

          whileInView={{opacity:1, x:0}}

          transition={{duration:0.8}}

          viewport={{once:true}}

        >


          <h3>
            Certifications
          </h3>


          <ul>

            {
              certifications.map((certificate,index)=>(

                <li key={index}>
                  {certificate}
                </li>

              ))
            }

          </ul>


        </motion.div>


      </div>


    </section>

  );

}


export default Education;