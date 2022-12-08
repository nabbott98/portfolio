import React from 'react'

// Import Semantic resources
import { Container, Image } from 'semantic-ui-react'

// Import Picture of Nick
import me from '../assets/me.jpeg'

const AboutMe = () => {
    return (
        <div>
            <Container style = {{borderTop: "black 0.25rem solid"}}>
                <h2 style = {{textAlign: 'center'}}>About Me</h2>
                <div className = "about-me">
                    <Image 
                        className = "about-me-contents"
                        src = { me }
                        size='medium' 
                        rounded
                    />
                    <p className = "about-me-contents">I am a mechanical engineer who turned a passion for software into becoming a software engineer and web developer. I have been trained as a full stack developer, and utilize my technical analysis skills when solving problems. Creatively solving challenging problems under pressure excites me. Additionally, exceptional work ethic and efficient solutions are things that I bring to every team with a positive attitude.
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default AboutMe