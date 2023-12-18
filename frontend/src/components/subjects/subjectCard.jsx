import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.jpg";

const CardContainer = styled.div`
  /* border: 1px solid #d24646; */
  background-color: antiquewhite;
  width: 60%;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
`;
const SubjectTitle = styled.h1`
  color: #333;
  margin-bottom: 16px;
`;

const QuestionTitle = styled.h2`
  color: #333;
`;

const Button = styled.button`
  background-color: #4caf50;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  margin-top: 8px;
`;

const Answer = styled.h3`
  margin-top: 8px;
  color: #555;
  text-align: center;
`;

const SubjectCard = (props) => {
  const [flag, setFlag] = useState(false);

  const handleQuestion = () => {
    setFlag(!flag);
  };

  return (
    <div style={{ marginLeft: "450px" }}>
      <CardContainer>
        <img src={logo} alt="" style={{ width: "100px", height: "100px" }} />
        <QuestionTitle>{props.question}</QuestionTitle>
        <Button onClick={handleQuestion}>
          {flag === false ? "Check answer" : "Hide answer"}
        </Button>
        {flag && <Answer>{props.answer}</Answer>}
      </CardContainer>
    </div>
  );
};

export default SubjectCard;
