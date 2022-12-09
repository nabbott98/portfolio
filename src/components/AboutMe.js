import React from 'react'

// Import Semantic resources
import { Container, Image } from 'semantic-ui-react'

// Import Picture of Nick
import me from '../assets/me.jpeg'

const AboutMe = () => {
    return (
            <Container fluid className = "about-me" id = "AboutMe">
                <h2 style = {{textAlign: 'center'}}>About Me</h2>
                <div className = "about-me-container">
                    <Image 
                        className = "about-me-container"
                        src = { me }
                        size='large' 
                        rounded
                    />
                    <div className = "about-me-contents-container">
                        <div className="about-me-contents">
                        <p>
                            I am a mechanical engineer who turned a passion for software into becoming a software engineer and web developer. I have been trained as a full stack developer, and utilize my technical analysis skills when solving problems. Creatively solving challenging problems under pressure excites me. Additionally, exceptional work ethic and efficient solutions are things that I bring to every team with a positive attitude.
                        </p>
                        <p>
                            I earned a Bachelors Degree in Mechanical Engineering from the University of Maryland in 2020
                        </p>
                        </div>
                    </div>
                </div>
            </Container>
    )
}

export default AboutMe