import React from 'react'
import styledComponents from 'styled-components'
import tw from 'twin.macro'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialIconsContainer = styledComponents.div`
    ${tw`
        hidden
        md:flex
        fixed
        flex-col
        top-[35%]
        left-0
    `}
`

const SocialLinks = styledComponents.li`
    ${tw`
        w-[160px]
        h-[60px]
        flex
        justify-between
        items-center
        ml-[-100px]
        hover:ml-[-10px]
        duration-300
    `}

    & > a {
        ${tw`
        flex
        p-[0.9em]
        justify-between
        items-center
        w-full
        text-white
        `}
    }
`

const NavbarSide = () => {


  return (
    <SocialIconsContainer>
              <ul>
                  <SocialLinks className='bg-blue-600'>
                <a href="/">LinkedIn <FaLinkedin size={30} /></a>
                </SocialLinks>
                  <SocialLinks className={'bg-slate-800'}>
                <a href="/">Github <FaGithub size={30} /></a>
                </SocialLinks>
                  <SocialLinks className='bg-emerald-200'>
                <a href="/">Email <HiOutlineMail size={30} /></a>
                </SocialLinks>
                  <SocialLinks className='bg-gray-500'>
                <a href="/">Resume <BsFillPersonLinesFill size={30} /></a>
                  </SocialLinks>
                </ul>
          </SocialIconsContainer>
  )
}

export default NavbarSide