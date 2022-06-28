import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Marketplace from "../../assets/car.png";
import Terminal from "../../assets/terminal.png";
import Port from "../../assets/port.png";

const PortfolioContainer = styled.div`
  ${tw`
        w-full
         
    `}
`;

const PortfolioContentContainer = styled.div`
  ${tw`
      flex
      flex-col
      // justify-center
      items-center
      w-full
      h-full
    `}
`;

const TitleContainer = styled.div`
  ${tw`
        w-[75%]
        // mb-auto
    `}
`;

const Title = styled.h2`
  ${tw`
        border-b-2
        border-color[#ffd100]
        text-4xl
    `}
`;

const ProjectsContainer = styled.div`
  ${tw`
    mt-8
    md:w-[75%]
    p-5
    flex
    flex-wrap
    flex-row
    border-color[#ffd100]
    `}
`;

const ProjectImage = styled.div`
  ${tw`
    w-[100%]
    md:w-[50%]
    flex
    flex-col
    items-center
    justify-center
`}

  img {
    ${tw`
      w-[50em]
    `}
  }
`;

const ProjectDescriptionContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    text-center
    w-[100%]
    md:w-[50%]
    h-full
    
  `}
`;

const ProjectTitle = styled.h3`
  ${tw`
    text-3xl
    md:ml-5
    mt-7
  `}
`;

const ProjectDescription = styled.p`
  ${tw`
    text-lg
    mt-5
    p-1
    md:p-5
  `}
`;

const ButtonContainer = styled.span`
  ${tw`
    mt-3
    flex
    flex-row
    justify-center
    w-full
  `}
`;

const ProjectButtons = styled.button`
  ${tw`
        m-5
        text-lg
        text-white
        border-2
        px-6
        py-3
        my-2
        flex
        items-center
        hover:bg-[#ffd100]
        hover:border-[#ffd100]
        duration-200
  `}
`;

const FeatureList = styled.ul`
  ${tw`
    mt-5
    list-style[square]
    md:text-left
    md:p-5
  `}
`;

const Portfolio = () => {
  return (
    <PortfolioContainer name="work">
      <PortfolioContentContainer>
        <TitleContainer>
          <Title>Portfolio</Title>
        </TitleContainer>
        <ProjectsContainer>
          <ProjectImage>
            <img src={Marketplace} alt="" />
            <ButtonContainer>
              <a href="https://github.com/CodyCodes95/CodyPartington_T2A2" target="_blank" rel="noreferrer noopener">
                <ProjectButtons>Code</ProjectButtons>
              </a>
              <a href="https://modified-rides.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                <ProjectButtons>Website</ProjectButtons>
              </a>
            </ButtonContainer>
          </ProjectImage>
          <ProjectDescriptionContainer>
            <ProjectTitle>Two Sided Marketplace</ProjectTitle>
            <ProjectDescription>
              One of our assessments in Coder Academy was to create a full stack
              application using Ruby on Rails and PostgreSQL. The goal was to
              design a two sided marketplace application with all required
              functionality. Some of the website features include:
              <FeatureList>
                <li>User accounts</li>
                <li>Admin roles/functionality</li>
                <li>Direct private messaging between user accounts</li>
                <li>Options to filter listings</li>
                <li>Image uploads for listings</li>
                <li>Ability to send/accept offers on listings</li>
              </FeatureList>
            </ProjectDescription>
          </ProjectDescriptionContainer>
        </ProjectsContainer>
        <ProjectsContainer className="border-t-2">
          <ProjectDescriptionContainer>
            <ProjectTitle>Terminal Application</ProjectTitle>
            <ProjectDescription>
              Our first project assignment for Coder Academy was to create a
              terminal application using Ruby. Inspired by the daily Kahoot's we
              played in class, I set out to make a full fledged Kahhot style
              quiz game in the terminal. Some of the features of the application
              are:
              <FeatureList>
                <li>Allows for multiple choice quizzes to be made</li>
                <li>
                  Quizzes that are made are saved to a file, allowing them to be
                  played at anytime
                </li>
                <li>Stores high score data for each quiz</li>
                <li>Admin controls to manage high score data/modify quizzes</li>
              </FeatureList>
            </ProjectDescription>
          </ProjectDescriptionContainer>
          <ProjectImage>
            <img src={Terminal} alt="" />
            <ButtonContainer>
              <a href="https://github.com/CodyCodes95/CodyPartington_T2A2" target="_blank" rel="noreferrer noopener">
                <ProjectButtons>Code</ProjectButtons>
              </a>
            </ButtonContainer>
          </ProjectImage>
        </ProjectsContainer>
        <ProjectsContainer className="border-t-2">
          <ProjectImage>
            <img src={Port} alt="" />
            <ButtonContainer>
              <a href="https://github.com/CodyCodes95/portfolio" target="_blank" rel="noreferrer noopener">
                <ProjectButtons>Code</ProjectButtons>
              </a>
              <a href="https://modified-rides.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                <ProjectButtons>Website</ProjectButtons>
              </a>
            </ButtonContainer>
          </ProjectImage>
          <ProjectDescriptionContainer>
            <ProjectTitle>Portfolio Website</ProjectTitle>
            <ProjectDescription>
              Our first assignment at Coder Academy was to create a portfolio
              website using only vanilla HTML and CSS. Although I have since
              recreated it using React, Im proud of what was achieved using no
              frameworks.
            </ProjectDescription>
          </ProjectDescriptionContainer>
        </ProjectsContainer>
      </PortfolioContentContainer>
    </PortfolioContainer>
  );
};

export default Portfolio;
