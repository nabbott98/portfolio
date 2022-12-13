import React from 'react'

// Import Semantic resources
import { Container, Image, Button, Icon, Link } from 'semantic-ui-react'

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
                            I am an engineer with a passion for solving complex problems. I started my career as a mechanical engineer and am now a full stack developer. As a software engineer and web developer, I use my technical analysis training to solve problems. I have demonstrated exceptional work ethic and team leadership skills in my professional career. I bring strong collaboration skills and a positive attitude to every team.                        </p>
                        <p>
                            I earned a Bachelor of Science in Mechanical Engineering from the University of Maryland in 2020.
                        </p>
                        {/* <Link></Link> */}
                        <Button inverted icon labelPosition='left' href="mailto:nicholasabbott98@gmail.com?subject=Portfolio%20Contact">
                            <Icon name='mail'/>
                            Contact Me
                        </Button>
                        </div>
                    </div>
                </div>
            </Container>
    )
}

export default AboutMe