import React from 'react'
import styledComponents from 'styled-components'
import tw from 'twin.macro'
import About from '../../components/about/About'
import Contact from '../../components/Contact/Contact'
import Landing from '../../components/landing/Landing'
import NavBarTop from '../../components/navbar/NavBarTop'
import Skills from '../../components/skills/Skills'
import Portfolio from '../../components/portfolio/Portfolio'

const PageContainer = styledComponents.div`
    ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
    background-color[#333533]
    text-[#d6d6d6]
    font-family['Noto Serif']
    `}
`

const HomePage = () => {
  return (
      <PageContainer>
          <NavBarTop />
          <Landing />
          <About />
          <Skills />
      <Portfolio />
      <Contact />
    </PageContainer>
  )
}

export default HomePage