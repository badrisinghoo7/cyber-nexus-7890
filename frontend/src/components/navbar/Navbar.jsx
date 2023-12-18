import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [ismenu, setIsMenu] = useState(false);
  const isAuth = useSelector((store) => store?.authreducer?.isAuth);
  console.log(isAuth);
  return (
    <section id="navbar">
      <div className="logo__div">
        <img src={logo} alt="" />
      </div>

      <Link className="home__text" to="/">
        Home
      </Link>
      <div className="sub__text" onClick={() => setIsMenu(!ismenu)}>
        Subjects <IoIosArrowDown />
        {ismenu && (
          <div className="menu__div">
            <div>
              <div>
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/plasticine/100/language.png"
                  alt="language"
                />
                Languages
              </div>
              <RiArrowRightSLine />{" "}
            </div>
            <div>
              <div>
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/plasticine/100/000000/calculator.png"
                  alt="calculator"
                />
                Math
              </div>{" "}
              <RiArrowRightSLine />{" "}
            </div>
            <div>
              <div>
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/plasticine/100/000000/microscope.png"
                  alt="microscope"
                />
                Science
              </div>{" "}
              <RiArrowRightSLine />{" "}
            </div>
            <div>
              <div>
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/plasticine/100/social-studies.png"
                  alt="social-studies"
                />
                Social Science
              </div>
              <RiArrowRightSLine />{" "}
            </div>
            <div>
              <div>
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/fluency/48/studio-display.png"
                  alt="studio-display"
                />
                Others
              </div>
              <RiArrowRightSLine />{" "}
            </div>
          </div>
        )}
      </div>

      <div className="search__div">
        <FaSearch />
        <input type="text" placeholder="search it here" id="" />
      </div>

      <div className="link__div">
        {isAuth ? (
          <Link className="link" to={"/logout"}>
            Logout
          </Link>
        ) : (
          <Link className="link" to={"/login"}>
            Login
          </Link>
        )}
        {/* <Link className="link" to={"/login"}>
          Login
        </Link> */}
        <Link className="register" to={"/signup"}>
          SignUp
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
