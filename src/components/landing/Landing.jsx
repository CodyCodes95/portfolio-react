import React from "react";
import styledComponents from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll/modules";

const HomeContainer = styledComponents.div`
    ${tw`
        w-full
        h-screen
    `}
`

const ContentContainer = styledComponents.div`
    ${tw`
        max-w-[1000px]
        mx-auto
        px-8
        flex
        flex-col
        justify-center
        items-center
        h-full
    `}
`

const Title = styledComponents.h1`
    ${tw`
        text-5xl
        text-center
        md:text-9xl
        font-family['Kaushan Script']
    `}
`

const SmallText = styledComponents.h4`
    ${tw`
        border-b-2
        border-color[#ffd100]
        mt-12
        text-2xl
    `}
`

const ButtonContainer = styledComponents.div`
    ${tw`
        mt-12       
    `}
`

const Button = styledComponents.button`
    ${tw`
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
`

const ButtonIcon = styledComponents.span`
    ${tw`
        group-hover:animate-bounce
        p-2
    `}
`



const Home = () => {
    return (
        <HomeContainer name="home">
            <ContentContainer>
                <Title>Cody Partington</Title>
                <SmallText>Full Stack Web Developer</SmallText>
                <ButtonContainer>
                    <Link to="about" smooth={true} duration={500}>
                    <Button className='group'>View Work
                        <ButtonIcon>
                            <FontAwesomeIcon icon={faAngleDoubleDown} />
                        </ButtonIcon>
                        </Button>
                        </Link>
                </ButtonContainer>
            </ContentContainer>
        </HomeContainer>
    )
}

export default Home