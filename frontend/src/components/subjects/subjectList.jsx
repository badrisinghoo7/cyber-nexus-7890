import React, { useState,useEffect } from "react";
import SubjectCard from "./subjectCard";
import styled,{ keyframes } from "styled-components"



const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HeadContainer = styled.div`
  font-size: 30px;
  /* border: 1px solid #131010; */
  background-color: antiquewhite;
  color: green;
  text-align: center;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-in-out; /* Apply the fade-in animation */
`;


const SubjectList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://crowded-gray-apron.cyclic.app/notes/all")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return <div>
    <HeadContainer>Geography</HeadContainer>
    {
        data?.map((item,index)=>{
            return <SubjectCard key={item._id} {...item}/>
        })
    }
  </div>;
};

export default SubjectList;


