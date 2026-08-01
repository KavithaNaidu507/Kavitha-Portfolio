import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";


function Projects() {


  const projects = [


    {
      featured:true,

      title:"AI Resume Analyzer",

      category:"AI • NLP • Full Stack Development",

      description:
      "An AI-powered Resume Analyzer that automatically extracts candidate information, evaluates resume quality using ATS scoring, compares resumes with job descriptions, identifies matched and missing skills, and provides personalized improvement recommendations.",

      tech:
      "Python | Flask | NLP | Machine Learning | MySQL | HTML | CSS",

      features:[
        "ATS Resume Score Calculation",
        "AI Semantic Job Matching",
        "Skill Gap Analysis",
        "Personalized Learning Recommendations"
      ],

      github:
      "https://github.com/KavithaNaidu507/AI_RESUME_ANALYZER",

      demo:null

    },



    {

      featured:false,

      title:"Crop Disease Prediction",

      category:"AI • Deep Learning",

      description:
      "A deep learning application that detects crop diseases from leaf images using CNN models and provides disease details, causes, and treatment recommendations.",

      tech:
      "Python | CNN | Deep Learning | Image Processing",

      features:[

        "Image-based Disease Detection",

        "Treatment Suggestions",

        "Voice and Multilingual Support"

      ],

      github:
      "https://github.com/KavithaNaidu507/CropDiseasePrediction",

      demo:null

    },




    {

      featured:false,

      title:"Sanitation Issue Reporting System",

      category:"Web Development",

      description:
      "A digital platform that enables citizens to report sanitation problems with location details and helps authorities manage complaints efficiently.",

      tech:
      "HTML | CSS | JavaScript | Web Technologies",

      features:[

        "Complaint Registration",

        "Location-based Reporting",

        "Issue Tracking"

      ],

      github:"#",

      demo:null

    }


  ];





  return (

    <section className="projects" id="projects">


      <h2>
        My Projects
      </h2>



      <div className="projects-container">


      {

        projects.map((project,index)=>(


          <motion.div

          className={
            project.featured
            ? "project-card featured-card"
            : "project-card"
          }

          key={index}


          initial={{opacity:0,y:50}}

          whileInView={{opacity:1,y:0}}

          transition={{duration:0.6}}

          viewport={{once:true}}

          >




          {

            project.featured &&

            <div className="featured-badge">

              <FaStar />

              Featured Project

            </div>

          }





            <h3>

              {project.title}

            </h3>





            <h4>

              {project.category}

            </h4>





            <p>

              {project.description}

            </p>





            <div className="project-tech">

              {project.tech}

            </div>






            <ul className="project-features">


            {

              project.features.map((item,i)=>(

                <li key={i}>

                  {item}

                </li>

              ))

            }


            </ul>






            <div className="project-buttons">



              <a

                href={project.github}

                target="_blank"

                rel="noreferrer"

              >

                <button>

                  <FaGithub />

                  GitHub

                </button>

              </a>





              {

                project.demo &&

                <a

                  href={project.demo}

                  target="_blank"

                  rel="noreferrer"

                >

                  <button>

                    <FaExternalLinkAlt />

                    Demo

                  </button>

                </a>

              }




            </div>




          </motion.div>


        ))

      }


      </div>



    </section>

  );

}


export default Projects;