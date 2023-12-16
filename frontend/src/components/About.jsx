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
          <MissionVisionText>
            <h2>Vision</h2>
            <p>
              "Our vision at TreasureNest is to be a leading jewelry store
              known for offering timeless and one-of-a-kind jewelry pieces. We
              aspire to set new standards in the jewelry industry by combining
              craftsmanship, innovation, and style. We envision a future where
              our jewelry enhances the beauty and confidence of those who wear
              it."
            </p>
          </MissionVisionText>
          <MissionVisionImage>
            <img src="https://plus.unsplash.com/premium_photo-1664301627859-b21ebb8f891d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Vision Image" />
          </MissionVisionImage>
        </MissionVisionContainer>
      </Section>
      <SectionDivider />
      <Section>
        <SectionTitle>Our Jewelry Collection</SectionTitle>
        <JewelryCollectionDescription>
          <p>
            At TreasureNest, we take pride in curating a collection of
            jewelry that combines timeless elegance and contemporary style.
            Explore our stunning range of pieces, from exquisite engagement
            rings to statement necklaces and classic bracelets. Each piece is
            handcrafted with precision and showcases the highest quality
            gemstones and materials.
          </p>
        </JewelryCollectionDescription>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Exquisite Gemstones
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Handcrafted Jewelry
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Unique Designs
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Quality Craftsmanship
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Personalized Service
          </ListItem>
        </List>
        <JewelryCollectionImage>
          <img src="https://plus.unsplash.com/premium_photo-1661645473770-90d750452fa0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Jewelry Collection" />
        </JewelryCollectionImage>
      </Section>
    </AboutUsContainer>
  );
};

const AboutUsContainer = styled.div`
  width: 90%;
  margin: auto;
  padding: 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  padding-top: 5%;

  img{
    width: 90%;
  }
`;

const Section = styled.div`
  margin-top: 20px;
`;

const SectionTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;
