import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../redux/Authentication/action";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.jpg";

const initialState = {
  email: "",
  pass: "",
  subject: "",
};

function Signup() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(initialState);
  const [gotoLogin, setGotoLogin] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    if (userData.email && userData.pass && userData.subject) {
      let user = {
        email: userData.email,
        pass: userData.pass,
        subject: userData.subject,
      };
      dispatch(signup(user)).then((res) => {
        setGotoLogin(true);
      });
    } else {
      alert("Please fill All Sections");
    }
  };
  if (gotoLogin) {
    return <Navigate to="/login" />;
  }
  const { email, pass, subject } = userData;
  return (
    <DIV>
      <div className="box">
        <div className="logo">
          <img
            src={logo}
            alt="image"
            style={{ width: "200px", maxHeight: "10rem" }}
          />
          <h1>Login</h1>
        </div>
        <form className="formData">
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Enter password"
            name="pass"
            value={pass}
            onChange={(e) => setUserData({ ...userData, pass: e.target.value })}
          />
          <input
            type="text"
            placeholder="Enter subjectName"
            name="subject"
            value={subject}
            onChange={(e) =>
              setUserData({ ...userData, subject: e.target.value })
            }
          />
          <button type="submit" onClick={handleSignup}>
            Submit
          </button>
          <p>
            Already have an account{" "}
            <Link to="/login">
              <span style={{ color: "red" }}>Login</span>
            </Link>
          </p>
        </form>
      </div>
    </DIV>
  );
}

export default Signup;

const DIV = styled.div`
  width: 100%;
  .box {
    width: 400px;
    margin: auto;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
    padding: 20px 30px;
    border-radius: 10px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .logo {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .logo h1 {
    margin-right: 50px;
    margin-top: 10px;
  }
  .formData {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  h1 {
    font-size: 30px;
    color: red;
    margin-bottom: 20px;
  }
  input {
    padding: 8px;
    border-radius: 5px;
    border: 1px solid grey;
  }
  button {
    padding: 5px;
    border-radius: 10px;
    background-color: #47bd47;
    color: aliceblue;
    font-size: 20px;
  }
`;
