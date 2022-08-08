import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import marketplace from "../../assets/car.png";
import pc from "../../assets/pcb.png";
import instag from "../../assets/instag.png";

const PortfolioContainer = styled.div`
  ${tw`
        w-full
        mt-44
        md:mt-0
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
        mt-24
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

  const work = [
    { name: "Instagators Podcast Website", description: "A local Australian car podcast called The Instagators asked me to create a website for the podcast as they needed a platform to sell their stickers. They wanted a simple single-page website where they could list different merchandise to sell. I decided to build the website in NextJS to try out a new framework. The website went live and was able to accommodate the sale of the merchandise to real-world customers.", features: ["Serverless functionality using Next JS", "Stripe checkout for orders", "Although just stickers for now, very easy to expand and list future merchandise for sale"], img: instag, code:"https://github.com/CodyCodes95/instagators", website:"https://theinstagator.com.au/" },
    { name: "PC Builder Application", description: "Our final assessment at Coder Academy was to create a full stack application in a team built upon the MERN stack. Myself and my teamamte Sam decided to build a PC building application, where users could select different components and parts for their dream PC build then order that build directly. The application also featured a shopfront where users could buy parts for their own build individually.", features: ["Build your own PC", "Stripe checkout for a PC build or individual parts", "User authentication using JWT", "Shopfront for computer parts", "Shopping cart functionality to buy multiple products", "Admin functionality to create new listings with image upload, modify existing, or review orders"], img: pc, code: "https://github.com/orgs/Cody-Sam/repositories", website:"https://pc-builder-t2a3.herokuapp.com/" },
    { name: "Two Sided Marketplace", description: "One of our assessments in Coder Academy was to create a full stack application using Ruby on Rails and PostgreSQL. The goal was to design a two sided marketplace application with all required functionality. Some of the website features include:", features: ["User accounts", "Admin roles/functionality", "Direct private messaging between user accounts", "Options to filter listings", "Image upload for listings", "Ability to send/accept offers on listings"], img:marketplace, code:"https://github.com/CodyCodes95/CodyPartington_T2A2", website:"https://modified-rides.herokuapp.com/"} 
  ]

  return (
    <PortfolioContainer name="work">
      <PortfolioContentContainer>
        <TitleContainer>
          <Title>Portfolio</Title>
        </TitleContainer>
        {work.map((project, i) => {
          return i % 2 == 0 ? (
            <ProjectsContainer key={i} className={i !== 0 && "border-t-2"}>
              <ProjectImage>
                <img src={project.img} alt="" />
                <ButtonContainer>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <ProjectButtons>Code</ProjectButtons>
                  </a>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <ProjectButtons>Website</ProjectButtons>
                  </a>
                </ButtonContainer>
              </ProjectImage>
              <ProjectDescriptionContainer>
                <ProjectTitle>{project.name}</ProjectTitle>
                <ProjectDescription>
                  {project.description}
                  <FeatureList>
                    {project.features.map((feature, i) => {
                      return <li key={i}>{feature}</li>;
                    })}
                  </FeatureList>
                </ProjectDescription>
              </ProjectDescriptionContainer>
            </ProjectsContainer>
          ) : (
            <ProjectsContainer key={i} className={i !== 0 && "border-t-2"}>
              <ProjectDescriptionContainer>
                <ProjectTitle>{project.name}</ProjectTitle>
                <ProjectDescription>
                  {project.description}
                  <FeatureList>
                    {project.features.map((feature, i) => {
                      return <li key={i}>{feature}</li>;
                    })}
                  </FeatureList>
                </ProjectDescription>
              </ProjectDescriptionContainer>
              <ProjectImage>
                <img src={project.img} alt="" />
                <ButtonContainer>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <ProjectButtons>Code</ProjectButtons>
                  </a>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <ProjectButtons>Website</ProjectButtons>
                  </a>
                </ButtonContainer>
              </ProjectImage>
            </ProjectsContainer>
          );
        })}
      </PortfolioContentContainer>
      </PortfolioContainer>
  );
};

export default Portfolio;
