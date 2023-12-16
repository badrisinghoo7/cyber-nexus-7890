import React from 'react';
import styled from 'styled-components';
import { List, ListIcon, ListItem } from '@chakra-ui/layout';
import { MdCheckCircle } from 'react-icons/md';

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Section>
        <SectionTitle>About Us</SectionTitle>
        <AboutContent>
          <p>
            Welcome to TreasureNest, where exquisite jewelry meets
            your unique style. At TreasureNest, we are dedicated to
            providing exceptional jewelry that reflects your individuality and
            elegance. Our mission is to offer you the finest quality jewelry,
            ensuring your satisfaction and style are our top priorities.
          </p>
        </AboutContent>
        <AboutImage>
          <img src="https://plus.unsplash.com/premium_photo-1681486928780-67d70f1ea3c2?auto=format&fit=crop&q=80&w=2032&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Jewelry Store" />
        </AboutImage>
      </Section>
      <SectionDivider />
      <Section>
        <SectionTitle>Our Mission & Vision</SectionTitle>
        <MissionVisionContainer>
          <MissionVisionImage>
            <img src="https://plus.unsplash.com/premium_photo-1683140764019-641f6990d651?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mission Image" />
          </MissionVisionImage>
          <MissionVisionText>
            <h2>Mission</h2>
            <p>
              "Our mission at TreasureNest is to provide exquisite,
              handcrafted jewelry that reflects your unique style and elegance.
              We aim to offer a personalized shopping experience that meets the
              diverse preferences of our customers, ensuring their complete
              satisfaction and confidence in our jewelry."
            </p>
          </MissionVisionText>
        </MissionVisionContainer>
        <SectionDivider />
        <MissionVisionContainer>
       