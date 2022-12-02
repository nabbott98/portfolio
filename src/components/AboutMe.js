import React from 'react'

// Import Semantic resources
import { Container, Image } from 'semantic-ui-react'

// Import Picture of Nick
import me from '../assets/me.jpg'

const AboutMe = () => {
    return (
        <Container style = {{borderTop: "black 0.25rem solid"}}>
            <h2 style = {{textAlign: 'center'}}>About Me</h2>
            <div className = "about-me">
                <Image 
                    className = "about-me-contents"
                    src = { me }
                    size='medium' 
                    rounded
                />
                <p className = "about-me-contents">I'm a Software Engineer with a Mechanical Engineering background. I approach problems technically and solve them elegantly. I am motivated by a challenge and strive to learn more constantly.</p>
            </div>
        </Container>
    )
}

export default AboutMe