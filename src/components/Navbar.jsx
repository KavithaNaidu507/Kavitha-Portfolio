import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {


  const [menuOpen, setMenuOpen] = useState(false);



  const closeMenu = () => {

    setMenuOpen(false);

  };



  return (

    <nav className="navbar">


      <Link
        to="home"
        smooth={true}
        duration={500}
        className="logo"
        onClick={closeMenu}
      >
        Kavitha
      </Link>



      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >

        {
          menuOpen ? <FaTimes /> : <FaBars />
        }

      </div>




      <ul className={menuOpen ? "nav-links active" : "nav-links"}>


        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>


        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            About
          </Link>
        </li>


        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Skills
          </Link>
        </li>


        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Projects
          </Link>
        </li>


        <li>
          <Link
            to="education"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Education
          </Link>
        </li>


        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </li>


      </ul>


    </nav>

  );

}


export default Navbar;