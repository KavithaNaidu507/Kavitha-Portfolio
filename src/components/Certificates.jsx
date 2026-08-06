import { useState } from "react";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

function Certificates() {

  const [open, setOpen] = useState(false);


  const certificates = [

    {
      title: "Programming in Modern C++",
      issuer: "NPTEL",
      year: "2025",
      link: "https://drive.google.com/file/d/1m5gvRq_A_bKof02gEhZ_18MOgt2uYlkW/view?usp=sharing",
    },

    {
      title: "Java Programming",
      issuer: "NPTEL",
      year: "2025",
      link: "https://drive.google.com/file/d/16n2t9UKifWJR-GrLyag-HGPhM6fgO_ch/view?usp=sharing",
    },

    {
      title: "Python Intermediate",
      issuer: "SoloLearn",
      year: "2025",
      link: "https://drive.google.com/file/d/1NgjxrHnyaMOJCkAGRhx7SLiY4hLKkxcW/view?usp=sharing",
    },

    {
      title: "Introduction to Python",
      issuer: "SoloLearn",
      year: "2025",
      link: "https://drive.google.com/file/d/1TOY69nKubejvCp4zWIKQIeK2okTFnDf1/view?usp=sharing",
    },

    {
      title: "Python for Data Science",
      issuer: "Infosys Springboard",
      year: "2025",
      link: "https://drive.google.com/file/d/1-A6a1T2de913sPFIhruEukcLWAGj_ND9/view?usp=sharing",
    },

    {
      title: "Explore Machine Learning using Python",
      issuer: "Infosys Springboard",
      year: "2025",
      link: "https://drive.google.com/file/d/16JDpwkY7oagLg5VuocDQR_dZXikSTDnf/view?usp=sharing",
    },
    {
  title: "Introduction to C",
  issuer: "SoloLearn",
  year: "2025",
  link: "https://drive.google.com/file/d/1bdDU4CNvE5p9-4JOob_nYgAXUBgUT_wL/view?usp=sharing",
},

  ];


  return (

    <section className="certificates" id="certificates">


      <div
        className="certificate-header"
        onClick={() => setOpen(!open)}
      >

        <FaCertificate />

        <h2>
          Certificates
        </h2>

        {
          open ? <FaChevronUp /> : <FaChevronDown />
        }

      </div>



      {
        open && (

          <div className="certificate-list">

            {
              certificates.map((certificate,index)=>(

                <div
                  className="certificate-item"
                  key={index}
                >

                  <FaCertificate className="cert-icon"/>


                  <h3>
                    {certificate.title}
                  </h3>


                  <h4>
                    {certificate.issuer}
                  </h4>


                  <p>
                    Completed in {certificate.year}
                  </p>


                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noreferrer"
                  >

                    View Certificate
                    <FaExternalLinkAlt/>

                  </a>


                </div>

              ))
            }


          </div>

        )
      }


    </section>

  );
}

export default Certificates;