import React from 'react'

// Import Semantic resources
import { Container, Image } from 'semantic-ui-react'

// Import Link Icons
import github from '../assets/github-50.png'
import linkedin from '../assets/linkedin-50.png'
import resume from '../assets/resume-50.png'

const Header = () => {
    return (
        <Container className="header">
            <h1>Nick Abbott</h1>
            <h3
                >Software Engineer | Full Stack Developer | Mechanical Engineer</h3>
            <Image.Group size='miny'>
                    {/* Github */}
                    <Image 
                        src = { github }
                        href = "https://github.com/nabbott98"
                    />
                    {/* LinkedIn */}
                    <Image 
                        src = { linkedin }
                        href = "https://www.linkedin.com/in/nicksabbott/"
                    />
                    {/* Resume */}
                    <Image 
                        src = { resume }
                        href = "https://docs.google.com/document/d/1Jw-zVnNLAMp9knGbqrHMPUO76nRaxlO8hSAa0bTYBm0/export?format=pdf"
                    />
            </Image.Group>
        </Container>
    )
}

export default Header