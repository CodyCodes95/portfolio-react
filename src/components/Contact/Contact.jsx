import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';

const Contactcontainer = styled.div`
    ${tw`
        w-full
        h-[65em]       
    `}
`;

const ContactContentContainer = styled.div`
    ${tw`
        flex
        flex-col
        items-center
        w-full
        h-full        
    `}
`;

const TitleContainer = styled.div`
    ${tw`
        w-[75%]
    `}
`;

const Title = styled.h2`
    ${tw`
        border-b-2
        border-color[#ffd100]
        text-4xl
    `}
`;

const ContactForm = styled.form`
    ${tw`
        flex
        flex-col
        max-w-[75%]
        w-full
    `}
`;

const FormSection = styled.div`
    ${tw`
        pb-8
    `}
`;

const FormText = styled.p`
    ${tw`
        text-gray-300
        py-4
        text-xl
    `}
`;

const SubmitButton = styled.button`
  ${tw`
        text-white
        border-2
        hover:bg-[#ffd100]
        hover:border-[#ffd100]
        px-4
        py-3
        my-8
        mx-auto
        flex
        items-center
        duration-100
    `}
`;

const Contact = () => {
  return (
    <Contactcontainer>
      <ContactContentContainer>
        <TitleContainer>
          <Title>Contact</Title>
        </TitleContainer>
        <ContactForm
          method="post"
          action="https://getform.io/f/6b781004-ef9f-4b18-89c9-4c090df941ae"
        >
          <FormSection>
            <FormText>
              Submit the form below or shoot me an email - codythatsme@gmail.com
            </FormText>
          </FormSection>
          <input
            className="bg-gray-300"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-gray-300"
            type="text"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-gray-300"
            name="message"
            rows="10"
            placeholder="Message"
          />
          <SubmitButton>Get In Touch</SubmitButton>
        </ContactForm>
      </ContactContentContainer>
    </Contactcontainer>
  );
}

export default Contact