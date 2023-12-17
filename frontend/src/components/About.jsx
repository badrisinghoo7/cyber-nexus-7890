import React from "react";
import imageDip from"../images/imageDip.png"
import styled from "styled-components";
const About = () => {
  let message=`let there be variations of something for writing.`
  return (
    <>
    <section className="section-white"></section>
      <div className="container">
        <div className="row">


          <div className="col-md-12 text-center">
            <h2 className="section-title">
              The Team Behind Study Brains
            </h2>
            <p className="section-subtitle">{message}</p>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <StyledImage src={imageDip} className="team-img" alt="" />
              <h3>Diptajit Das</h3>
              <div className="team-info">
                <p>Frontend Design</p>
                <p>Some Info that I am gonna put ...</p>
                <ul className="team-icon">
                  <li><a href="#" className="twitter"><i className="fa fa-twitter"></i> </a></li>
                  <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i> </a></li>
                  <li><a href="#" className="facebook"><i className="fa fa-facebook"></i> </a></li>
                  <li><a href="#" className="dribbble"><i className="fa fa-dribbble"></i> </a></li>
                </ul>
              </div>
            </div>
          </div>


          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <StyledImage src={imageDip} className="team-img" alt="" />
              <h3>Harsh</h3>
              <div className="team-info">
                <p>Frontend Design</p>
                <p>Some Info that I am gonna put ...</p>
                <ul className="team-icon">
                  <li><a href="#" className="twitter"><i className="fa fa-twitter"></i> </a></li>
                  <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i> </a></li>
                  <li><a href="#" className="facebook"><i className="fa fa-facebook"></i> </a></li>
                  <li><a href="#" className="dribbble"><i className="fa fa-dribbble"></i> </a></li>
                </ul>
              </div>
            </div>


          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <StyledImage src={imageDip} className="team-img" alt="" />
              <h3>Ashish</h3>
              <div className="team-info">
                <p>Frontend Design</p>
                <p>Some Info that I am gonna put ...</p>
                <ul className="team-icon">
                  <li><a href="#" className="twitter"><i className="fa fa-twitter"></i> </a></li>
                  <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i> </a></li>
                  <li><a href="#" className="facebook"><i className="fa fa-facebook"></i> </a></li>
                  <li><a href="#" className="dribbble"><i className="fa fa-dribbble"></i> </a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <StyledImage src={imageDip} className="team-img" alt="" />
              <h3>Badri</h3>
              <div className="team-info">
                <p>Frontend Design</p>
                <p>Some Info that I am gonna put ...</p>
                <ul className="team-icon">
                  <li><a href="#" className="twitter"><i className="fa fa-twitter"></i> </a></li>
                  <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i> </a></li>
                  <li><a href="#" className="facebook"><i className="fa fa-facebook"></i> </a></li>
                  <li><a href="#" className="dribbble"><i className="fa fa-dribbble"></i> </a></li>
                </ul>
              </div>
            </div>
          </div>


          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <StyledImage src={imageDip} className="team-img" alt="" />
              <h3>SaNDEEP</h3>
              <div className="team-info">
                <p>Frontend Design</p>
                <p>Some Info that I am gonna put ...</p>
                <ul className="team-icon">
                  <li><a href="#" className="twitter"><i className="fa fa-twitter"></i> </a></li>
                  <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i> </a></li>
                  <li><a href="#" className="facebook"><i className="fa fa-facebook"></i> </a></li>
                  <li><a href="#" className="dribbble"><i className="fa fa-dribbble"></i> </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
const StyledImage = styled.img`
  width: 25%; /* Adjust the width as needed */
  /* Add any additional styles here */
`;