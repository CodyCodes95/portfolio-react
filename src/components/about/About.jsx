import React from 'react'
import styled from 'styled-components'
import styledComponents from 'styled-components'
import tw from 'twin.macro'
import Me from '../../assets/me.jpg'

const AboutContainer = styledComponents.div`
    ${tw`
        flex
        flex-col
        justify-center
        items-center
        w-full
        h-screen
    `}
`

const AboutContent = styledComponents.div`
    ${tw`
        w-[75%]
        flex
        flex-col
        justify-center
        h-[75%]
    `}
`

const AboutTextContainer = styled.div`
    ${tw`
        flex
        flex-col
        justify-center
        items-center
    `}
`

const Title = styledComponents.h2`
    ${tw`
        border-b-2
        border-color[#ffd100]
        text-4xl
    `}
`

const ContentGrid = styledComponents.div`
    ${tw`
        grid
        md:grid-cols-2
        h-full
    `}
`

const AboutText = styledComponents.div`
    ${tw`
        flex
        flex-col
        flex-wrap  
        p-10
        text-xl
    `}
`

const ImageContainer = styledComponents.div`
    ${tw`
        flex
        items-center
    `}

    img {
        ${tw`
            border-4
            border-color[#ffd100]
        `}
    }
`


const About = () => {
  return (
    <AboutContainer name="about">
      <AboutContent>
        <Title>About Me</Title>
        <ContentGrid>
          <AboutTextContainer>
            <AboutText>
              Hi! My name is Cody, im 26 years old from Warwick, Australia. I
              have always had a passion for technology and the web from a young
              age. After finishing school in 2013 I went full time at the job I
              had since I was 14, McDonald's. I worked in every role the
              business has to offer eventually ending up as the Operations
              Supervisor for 2 stores, Warwick and Stanthorpe. I am still unsure
              what took me so long to pursue a career in something that I was
              really passionate about, but something clicked late 2021, which
              made me drop everything and focus on joining the Coder Academy Web
                          Development bootcamp.
                          
                      </AboutText>
            <AboutText>
              My professional skills mostly fall under business management,
              which at first glance may not seem to apply to a career in
              programming. But the soft skills like working with people, time
              management, task completion and many more, are all things which
              I've already noticed applying to programming.
            </AboutText>
          </AboutTextContainer>
          <ImageContainer>
            <img className="" src={Me} alt="" />
          </ImageContainer>
        </ContentGrid>
      </AboutContent>
    </AboutContainer>
  );
}

export default About