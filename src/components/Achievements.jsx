import { useState } from "react";
import {
  FaTrophy,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

function Achievements() {

  const [open, setOpen] = useState(false);


  const achievements = [
    {
  title: "APSCHE AI & Machine Learning Virtual Internship",
  description:
    "Successfully completed a 2-month (120-hour) Virtual Internship Program in Artificial Intelligence and Machine Learning organized by SmartBridge Educational Services Pvt. Ltd. in collaboration with the Andhra Pradesh State Council of Higher Education (APSCHE).",
  link: "https://drive.google.com/file/d/1yffQFYTzzU6re1Tp02--7Oy3dNLqJJs4/view?usp=sharing",
},
    {
      title: "LeetCode Problem Solving",
      description:
        "Solved coding problems and improved Data Structures and Algorithms skills.",
      link: "https://drive.google.com/file/d/1eagvuj3lMVOOdcjdcMJOFrJjhJ7_A-qf/view?usp=sharing",
    },

    {
      title: "CodeChef Arrays Completion",
      description:
        "Completed Arrays learning track and strengthened problem-solving skills.",
      link: "https://drive.google.com/file/d/1qHJBBuXrxsxedOcfHTAdLel77RIwKZYb/view?usp=sharing",
    },

    {
      title: "CodeChef Python Completion",
      description:
        "Completed Python programming practice.",
      link:
        "https://drive.google.com/file/d/162qPp_MvLSqv_FD9zB2stjhwzYZcRW9w/view?usp=sharing",
    },

    {
      title: "Innovahack Participation",
      description:
        "Participated in Innovahack and explored innovative solutions.",
      link:
        "https://drive.google.com/file/d/1-A6a1T2de913sPFIhruEukcLWAGj_ND9/view?usp=sharing",
    },
    {
  title: "CodeChef 500 Difficulty Problem",
  description:
    "Solved CodeChef 500 difficulty level problem and improved competitive programming skills.",
  link:
    "https://drive.google.com/file/d/16JDpwkY7oagLg5VuocDQR_dZXikSTDnf/view?usp=sharing",
},
{
  title: "Generative AI on Cloud - L4G",
  description:
    "Completed a Generative AI on Cloud learning program and gained exposure to cloud-based AI technologies.",
  link:
    "https://drive.google.com/file/d/1ffHjo9QTn4JbSO9SAJ0zjlioyx1lnNSS/view?usp=sharing",
},

    {
      title: "Volunteer - Spardha Event",
      description:
        "Worked as a volunteer and interacted with participants.",
      link:
        "https://drive.google.com/file/d/1KhpHgxEdDA6ATUvQx77td-TcP9NYjIo3/view?usp=sharing",
    },
  ];


  return (

    <section className="achievements" id="achievements">


      <div
        className="achievement-header"
        onClick={() => setOpen(!open)}
      >

        <FaTrophy />

        <h2>
          Achievements
        </h2>

        {
          open ? <FaChevronUp /> : <FaChevronDown />
        }

      </div>



      {
        open && (

          <div className="achievement-list">

            {
              achievements.map((item,index)=>(

                <div
                  className="achievement-item"
                  key={index}
                >

                  <h3>
                    {item.title}
                  </h3>


                  <p>
                    {item.description}
                  </p>


                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >

                    View Proof
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

export default Achievements;