import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

function Welcome() {

  const navigate = useNavigate();

  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const moveGlow = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <section
      className="welcome"
      onMouseMove={moveGlow}
    >
      <div
        className="mouse-glow"
        style={{
          left: position.x,
          top: position.y,
        }}
      ></div>

      <div className="particles">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 5}s`,
            }}
          ></span>
        ))}
      </div>

      <motion.div
        className="glass-card"
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <h1>
          <Typewriter
            words={["WELCOME", "TO MY PORTFOLIO"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={40}
          />
        </h1>

        <p>
          Turning Ideas into Intelligent Solutions
        </p>

        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 40px #3b82f6",
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => navigate("/portfolio")}
        >
          Enter Portfolio
          <FaArrowRight />
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Welcome;