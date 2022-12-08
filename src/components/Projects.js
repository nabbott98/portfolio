import React, { useEffect, useState } from 'react'


// Import Semantic resources
import { Container, Card, Image, Icon, CardContent } from 'semantic-ui-react'

// Import Project JSON Data
// projectData =  projects.json

import duckHuntImg from '../assets/duck-hunt.jpeg'
import spacr from '../assets/spacr-home.png'
import bamPow from '../assets/bam-pow.png'

const Projects = () => {
    return (
        <Container className = "projects">
            <h2>Projects</h2>
            <Card.Group 
                itemsPerRow={3} stackable
                className = "projects-container">
                <Card
                    href = 'https://nabbott98.github.io/duck-hunt-remake/' target= "_blank"
                    image = {duckHuntImg}
                    header = "Duck Hunt™ Remake"
                    description = "This game was createdas a starter project into HTML CSS and JS. It utilizes one main setInterval function to control all the phases of the game"
                    extra = {    
                        <a>
                            <Icon name='code' />
                            HTML5 | CSS | JS
                        </a>
                    }
                    
                />
                <Card
                    href = 'https://spacr.fly.dev/' target="_blank"
                    image = {spacr}
                    header = "Spacr - Built on NASA Open API"
                    meta='Public Acc: U: user P: user'
                    description = "This app..."
                    extra = {    
                        <a>
                            <Icon name='code' />
                            HTML5 | CSS | JS | MongoDB | Express | Liquid.js
                        </a>
                    }

                />
                <Card
                    // href = '' target="_blank"
                    image = {bamPow}
                    header = "Bam Pow"
                    // meta='Public Acc: U: user P: user'
                    description = "This app..."
                    extra = {    
                        <a>
                            <Icon name='code' />
                            HTML5 | CSS | JS | MongoDB | Express | Liquid.js
                        </a>
                    }

                />
                <Card
                    // href = '' target="_blank"
                    // image = {bamPow}
                    header = "Lane Detection"
                    // meta='Public Acc: U: user P: user'
                    description = "This app ustilized python and the OpenCV package to filter images to detect of a car is in the lane"
                    extra = {    
                        <a>
                            <Icon name='code' />
                            Python | OpenCV
                        </a>
                    }

                />
                <Card
                    // href = '' target="_blank"
                    // image = {bamPow}
                    header = "Ring Doorbell"
                    // meta='Public Acc: U: user P: user'
                    description = "This app ustilized python and the OpenCV package to filter images to detect of a car is in the lane"
                    extra = {    
                        <a>
                            <Icon name='code' />
                            Python | OpenCV | Twilio
                        </a>
                    }

                />
                <Card
                    // href = '' target="_blank"
                    // image = {bamPow}
                    header = "QR Code Scanner"
                    // meta='Public Acc: U: user P: user'
                    description = "This app ustilized python and the OpenCV package to filter images to detect of a car is in the lane"
                    extra = {    
                        <a>
                            <Icon name='code' />
                            Python | OpenCV | QR Code Library
                        </a>
                    }

                />
                <Card
                    // href = '' target="_blank"
                    // image = {bamPow}
                    header = "Medical Robot"
                    // meta='Public Acc: U: user P: user'
                    description = "This app ustilized python and the OpenCV package to filter images to detect of a car is in the lane"
                    extra = {    
                        <a>
                            <Icon name='code' />
                            MATLAB | Arduino | Images Calibration
                        </a>
                    }

                />
            </Card.Group>
        </Container>
    )
}

export default Projects