import React from 'react'
import styledComponents from 'styled-components'
import tw from 'twin.macro'
import Js from '../../assets/js.svg'
import ReactIcon from '../../assets/react.svg'
import Node from '../../assets/node.svg'
import Pg from '../../assets/pg.png'
import TwIcon from '../../assets/tw.png'
import Ruby from '../../assets/ruby.png'
import Html from '../../assets/html.png'
import Ts from '../../assets/ts.png'



const SkillsContentContainer = styledComponents.div`
    ${tw`
        flex
        flex-col
        justify-center
        items-center
        w-full
        h-screen        
    `}
`

const TitleContainer = styledComponents.div`
    ${tw`
        w-[75%]
        mb-auto
        mt-24
    `}
`

const Title = styledComponents.h2`
    ${tw`
        border-b-2
        border-color[#ffd100]
        text-4xl
    `}
`

const ContentContainer = styledComponents.div`
    ${tw`
        mt-10
        h-[100%]
        w-[100%]
        flex
        flex-wrap
        justify-center
    `}
`


const SkillItem = styledComponents.div`
    ${tw`
        text-center
        flex
        flex-col
        w-[45%]
        md:w-[20%]
        min-h-[25%]
        m-1
        items-center
        justify-center
    `}
    img {
        ${tw`
        `}
    }

`
const SkillText = styledComponents.p`
    ${tw`
    mt-2
        text-base
    `}
`



const Skills = () => {
  return (
          <SkillsContentContainer name="skills">
              <TitleContainer>
                  <Title>Skills</Title>
              </TitleContainer>
              <ContentContainer>
                  <SkillItem>
                      <img class='w-[125px] h-[125px]' src={Js} alt="" />
                      <SkillText>Javascript</SkillText>
                  </SkillItem>
                  <SkillItem>
                      <img class='w-[125px] h-[125px]' src={Ts} alt="" />
                      <SkillText>Typescript</SkillText>
                  </SkillItem>
                  <SkillItem>
                    <img class='w-[125px] h-[125px]' src={ReactIcon} alt="" />
                    <SkillText>React</SkillText>
                  </SkillItem>
                  <SkillItem>
                    <img class='w-[125px] h-[125px]' src={Node} alt="" />
                    <SkillText>Node/Express</SkillText>
                  </SkillItem>
                  <SkillItem>
                      <img class='w-[125px] h-[125px]' src={Pg} alt="" />
                      <SkillText>PostgreSQL</SkillText>
                  </SkillItem>
                  <SkillItem>
                      <img class='w-[125px] h-[125px]' src={TwIcon} alt="" />
                      <SkillText>Tailwind CSS</SkillText>
                  </SkillItem>
                  <SkillItem>
                      <img class='w-[125px] h-[125px]' src={Ruby} alt="" />
                      <SkillText>Ruby/Rails</SkillText>
                  </SkillItem>
                  <SkillItem>
                      <img class='w-[125px] h-[125px]' src={Html} alt="" />
                      <SkillText>HTML/CSS</SkillText>
                  </SkillItem>
              </ContentContainer>
          </SkillsContentContainer>

  )
}

export default Skills