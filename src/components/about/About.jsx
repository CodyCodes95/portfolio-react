import React from 'react'
import styledComponents from 'styled-components'
import tw from 'twin.macro'
import Me from '../../assets/me.jpg'

const AboutContainer = styledComponents.div`
    ${tw`
        w-full
        h-screen
    `}
`

const AboutContentContainer = styledComponents.div`
    ${tw`
        flex
        flex-col
        justify-center
        items-center
        w-full
        h-full
    `}
`

const AboutContent = styledComponents.div`
    ${tw`
        w-[75%]
        h-[100%]
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
        mt-6
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
        pr-10    
    `}
`

const ImageContainer = styledComponents.div`
    ${tw`
    
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
          <AboutContentContainer>
              <AboutContent>
                  <Title>About Me</Title>
                  <ContentGrid>
                      <AboutText>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, non ullam. Fuga nam adipisci odio, laborum a est harum ea expedita voluptates ex, reprehenderit facilis atque minima dolore fugiat aliquid? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui illo consequatur blanditiis voluptatibus quisquam quidem ratione beatae repudiandae ex, numquam commodi laudantium accusantium eligendi iste reprehenderit nulla et enim earum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum velit quo, nemo aspernatur beatae accusamus obcaecati ducimus perspiciatis in autem, corporis quod? Officia nulla est facilis maxime laboriosam odit minus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dolorem minima non, nostrum vel necessitatibus dolore, labore eaque aperiam porro expedita dolor pariatur quod facere! Dolor perferendis aut vitae qui.
                      </AboutText>
                      <ImageContainer>
                          <img className='' src={Me} alt="" />
                      </ImageContainer>
                  </ContentGrid>
                </AboutContent>
          </AboutContentContainer>
    </AboutContainer>
  )
}

export default About