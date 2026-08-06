import { useState } from "react";
import Certificates from "./Certificates";
import Achievements from "./Achievements";
import { FaCertificate, FaTrophy } from "react-icons/fa";

function CertificationAchievement() {

  const [active, setActive] = useState("");

  return (
    <section className="cert-ach-section">

      <h2>Certifications & Achievements</h2>

      <div className="cert-ach-container">

        <div
          className={`small-box ${active==="cert" ? "active":""}`}
          onClick={() => setActive("cert")}
        >

          <FaCertificate />

          <h3>Certificates</h3>

          <p>
            View my certifications
          </p>

        </div>


        <div
          className={`small-box ${active==="ach" ? "active":""}`}
          onClick={() => setActive("ach")}
        >

          <FaTrophy />

          <h3>Achievements</h3>

          <p>
            View my achievements
          </p>

        </div>

      </div>


      {
        active==="cert" &&
        <Certificates/>
      }


      {
        active==="ach" &&
        <Achievements/>
      }


    </section>
  );
}

export default CertificationAchievement;