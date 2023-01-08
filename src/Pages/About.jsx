import { Avatar, Container, Wrap, WrapItem,Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <>
      
  <Wrap>
    <WrapItem padding="10px">
    <Avatar style={{marginLeft:"500px"}}  size='2xl' name='arif' src='https://avatars.githubusercontent.com/u/72196304?v=4' />{' '}
  </WrapItem>
</Wrap>

<Text bg="red" color="white" w="12%" padding="2px">Full Stack Web Developer</Text>

    
    <Container  bg="" maxW="90%" mt={0} centerContent overflow="hidden" maxH="full" marginTop="2rem" padding="30px" fontFamily="monospace" fontSize="14px">

      <h3>As a full stack web developer, I am skilled in both front-end and back-end web development. I have a strong foundation in HTML, CSS, and JavaScript for building web user interfaces.

I am comfortable working with a variety of tools like chakra UI,Tailwind CSS and Bootstrap. I am also familiar with version control systems such as Git and can collaborate effectively with a team of developers using these tools.

In addition to my technical skills, I am a problem-solver at heart and enjoy the challenge of creating innovative and effective solutions for web-based projects. I am also a strong communicator and can translate technical concepts to both technical and non-technical stakeholders.

Overall, my passion for web development and my strong technical skills make me a valuable asset to any development team.</h3>



    </Container>
    </>
  )
}

export default About