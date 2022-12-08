import React from 'react'


// Import Semantic resources
import { Container, Card, Icon } from 'semantic-ui-react'

import duckHuntImg from '../assets/duck-hunt.jpeg'
import spacr from '../assets/spacr-home.png'
import bamPow from '../assets/bam-pow.png'

const Projects = () => {
    return (
        <Container className = "projects" fluid >
            <h2>Recent Projects</h2>
            <Card.Group 
                itemsPerRow={3} 
                stackable
                centered
                className = "projects-container">
                <Card
                    href = 'https://nabbott98.github.io/duck-hunt-remake/' 
                        target= "_blank" 
                        rel="noreferrer"

                    image = {duckHuntImg}
                    header = "Duck Hunt™ Remake"
                    description = "An HTML5 canvas based browser game"
                    meta = 'HTML5 | CSS3 | JavaScript'
                    extra = {
                        <a href = 'https://github.com/nabbott98/duck-hunt-remake' target="_blank">
                            <Icon name='github' />
                            View Github Repo
                        </a>
                    }
                />
                <Card
                    href = 'https://spacr.fly.dev/' target="_blank"
                    image = {spacr}
                    header = "SPACR - Built on NASA Open API"
                    // meta='Public Acc: U: user P: user'
                    meta='Liquid.js | CSS | JavaScript | MongoDB | Mongoose | Express'
                    description = "This app..."
                    extra = {
                        <a href = 'https://github.com/nabbott98/duck-hunt-remake' target="_blank">
                            <Icon name='github' />
                            View Github Repo
                        </a>
                    }

                />
                <Card
                    // href = '' target="_blank"
                    image = {bamPow}
                    header = "Bam Pow"
                    meta='React.js | CSS | JavaScript | SQL | Django | Python'
                    description = "This app..."
                    extra = {
                        <a href = 'https://github.com/nabbott98/duck-hunt-remake' target="_blank">
                            <Icon name='github' />
                            View Github Repo
                        </a>
                    }
                />
                <Card
                    // href = '' target="_blank"
                    // image = {bamPow}
                    header = "Lane Detection"
                    meta = 'Python | OpenCV'
                    description = "This app utilized python and the OpenCV package to filter images to detect of a car is in the lane"
                    extra = {
                        <a 
                            // href = 'https://github.com/nabbott98/duck-hunt-remake' target="_blank"
                            >
                            <Icon name='github' />
                            View Github Repo
                        </a>
                    }

                />
                <Card
                    // href = '' target="_blank"
                    // image = {bamPow}
                    header = "Ring Doorbell"
                    meta = 'Python | OpenCV | Twilio API'
                    description = "This app ustilized python and the OpenCV package to filter images to detect of a car is in the lane"
                    extra = {
                        <a 
                            // href = 'https://github.com/nabbott98/duck-hunt-remake' target="_blank"
                            >
                            <Icon name='github' />
                            View Github Repo
                        </a>
                    }

                />
                <Card
                    // href = '' target="_blank"
                    // image = {bamPow}
                    header = "QR Code Scanner"
                    meta = 'Python | OpenCV | QR Code Library'
                    description = "This app ustilized python and the OpenCV package to filter images to detect of a car is in the lane"
                    extra = {
                        <a 
                            // href = 'https://github.com/nabbott98/duck-hunt-remake' target="_blank"
                            >
                            <Icon name='github' />
                            View Github Repo
                        </a>
                    }

                />
                <Card
                    // href = '' target="_blank"
                    // image = {bamPow}
                    header = "Medical Robot"
                    meta='MATLAB | Arduino | Images Calibration'
                    description = "This app ustilized python and the OpenCV package to filter images to detect of a car is in the lane"
                    extra = {
                        <a 
                            // href = 'https://github.com/nabbott98/duck-hunt-remake' target="_blank"
                            >
                            <Icon name='github' />
                            View Github Repo
                        </a>
                    }

                />
            </Card.Group>
        </Container>
    )
}

export default Projects

{/* <Card>
<Image src = {duckHuntImg}/>
<Card.Content>
    <Card.Header>Example Project</Card.Header>
</Card.Content>
<div class="ui bottom attached button">
    <i class="github icon"></i>
    View Github Repo
</div>

</Card> */}