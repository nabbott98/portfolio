import React from 'react'

// Import Semantic resources
import { Container, Card, Icon } from 'semantic-ui-react'

import duckHuntImg from '../assets/duck-hunt.png'
import spacr from '../assets/spacr.png'
import bamPow from '../assets/bam-pow.png'

const Projects = () => {
    return (
        <Container className = "projects" id = "Projects" fluid >
            <h2>Recent Projects</h2>
            <h4>Click Bouncing Tiles to View Deployed Projects</h4>
            <Card.Group 
                itemsPerRow={3} 
                stackable
                centered
                className = "projects-container">
                <Card
                    href = 'https://nabbott98.github.io/duck-hunt-remake/' target= "_blank" rel="noreferrer"
                    image = {duckHuntImg}
                    header = "Duck Hunt™ Remake"
                    description = "An HTML5 canvas based browser game."
                    meta = 'HTML5 | CSS3 | JavaScript'
                    extra = {
                        <a href = 'https://github.com/nabbott98/duck-hunt-remake' target="_blank" rel="noreferrer">
                            <Icon name='github' />
                            View Github Repo
                        </a>
                    }
                />
                <Card
                    href = 'https://spacr.fly.dev/' target="_blank" rel="noreferrer"
                    image = {spacr}
                    header = "SPACR - Built on NASA Open API"
                    // meta='Public Acc: U: user P: user'
                    meta='JavaScript | Liquid.js | MongoDB | Express | Mongoose | CSS'
                    description = "This app builds off of the NASA Open API Astronomy Pictures of the Day by providing a space for users to store these pictures and comment on ones other users added to the database. This app is built using a MongoDB Express Backend and a Liquid.JS frontend."
                    extra = {
                        <a href = 'https://github.com/nabbott98/spacr' target="_blank" rel="noreferrer">
                            <Icon name='github' />
                            View Github Repo
                        </a>
                    }

                />
                <Card
                    href = 'https://bampow.netlify.app/' target="_blank" rel="noreferrer"
                    image = {bamPow}
                    header = "Bam Pow"
                    meta='Python | JavaScript | React | Django | SQL | CSS'
                    description = "Bam Pow is a comic book cataloging and recommendation app built using a Django React stack. This app features multiple many to many relationships in the backend and a fully functional front end with full CRUD granted to admin users."
                    extra = {
                        <a href = 'https://github.com/nabbott98/react-comics' target="_blank" rel="noreferrer">
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
                    description = "This app utilizes python and the OpenCV package to filter images to detect if a car is in the lane."
                    extra = {
                        <a href = 'https://github.com/nabbott98' target="_blank" rel="noreferrer">
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
                    description = "Using a raspberry pi with a camera I built a DIY Ring Doorbell which detects if someone has entered a user designated area. Upon detection, the RaspberryPi emails pictures taken, uploads videos to a drop box and sends the user a text that someone/something was inside the area."
                    extra = {
                        <a href = 'https://github.com/nabbott98' target="_blank" rel="noreferrer">
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
                    description = "This QR code scanner was built with python and a QRcode library on a RaspberryPi with a camera to scan qrcodes and display the contents on the screen in real time."
                    extra = {
                        <a href = 'https://github.com/nabbott98' target="_blank" rel="noreferrer">
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
                    description = "Built for a medical robots course, this robot has 3 linear movers and utilizes a camera to locate fiducial markers making the position of surgery sites easily calculable. This Robot uses MATLAB for the calculations and an Arduino microcontroller to run the robot."
                    extra = {
                        <a href = 'https://github.com/nabbott98' target="_blank" rel="noreferrer">
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