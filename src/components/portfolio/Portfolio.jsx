import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Marketplace from "../../assets/car.png";

const PortfolioContainer = styled.div`
  ${tw`
        w-full
        h-screen               
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
    md:w-[75%]
    p-5
    flex
    flex-wrap
    flex-row
    `}
`;

const ProjectImage = styled.div`
  ${tw`
    w-[100%]
    md:w-[50%]
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
`

const ProjectTitle = styled.h3`
  ${tw`
    text-3xl
    md:ml-5
  `}
`;

const ProjectDescription = styled.p`
  ${tw`

    md:p-5
  `}
`;

const ButtonContainer = styled.span`
  ${tw`
    flex
    flex-row
    justify-center
    w-full
  `}
`

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

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioContentContainer>
        <TitleContainer>
          <Title>Portfolio</Title>
        </TitleContainer>
        <ProjectsContainer>
          <ProjectImage>
            <img src={Marketplace} alt="" />
            <ButtonContainer>
              <ProjectButtons>Code</ProjectButtons>
              <ProjectButtons>Website</ProjectButtons>
            </ButtonContainer>
          </ProjectImage>
          <ProjectDescriptionContainer>
              <ProjectTitle>Two Sided Marketplace</ProjectTitle>
            <ProjectDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestias quidem, voluptate animi sapiente numquam at unde quos tempore repellendus ut corporis consequuntur qui dolores placeat doloremque? Atque, reprehenderit omnis.
            </ProjectDescription>
          </ProjectDescriptionContainer>
        </ProjectsContainer>
      </PortfolioContentContainer>
    </PortfolioContainer>
  );
};

export default Portfolio;
