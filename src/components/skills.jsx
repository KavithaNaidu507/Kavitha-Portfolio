import { motion } from "framer-motion";

function Skills() {

  const skillGroups = [
    {
      title: "Programming Languages",
      skills: [
        "Python",
        "Java",
        "C"
      ]
    },

    {
      title: "Artificial Intelligence & Machine Learning",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
        "LLMs",
        "Transformers",
        "RAG",
        "AI Agents"
      ]
    },

    {
      title: "Data Analytics & Tools",
      skills: [
        "SQL",
        "NumPy",
        "Pandas",
        "Data Handling",
        "Data Analysis"
      ]
    },

    {
      title: "Web Development",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Flask"
      ]
    }
  ];


  return (

    <section className="skills" id="skills">


      <motion.h2

        initial={{opacity:0, y:50}}

        whileInView={{opacity:1, y:0}}

        transition={{duration:0.8}}

        viewport={{once:true}}

      >
        Technical Skills
      </motion.h2>



      <div className="skills-container">


        {
          skillGroups.map((group,index)=>(


            <motion.div

              className="skill-category"

              key={index}

              initial={{opacity:0, y:50}}

              whileInView={{opacity:1, y:0}}

              transition={{
                duration:0.6,
                delay:index * 0.2
              }}

              viewport={{once:true}}

            >


              <h3>
                {group.title}
              </h3>



              <div className="skill-items">


                {
                  group.skills.map((skill,i)=>(

                    <span key={i}>
                      {skill}
                    </span>

                  ))
                }


              </div>


            </motion.div>


          ))
        }


      </div>


    </section>

  );

}


export default Skills;