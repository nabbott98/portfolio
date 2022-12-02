import React, { useEffect, useState } from 'react'


// Import Semantic resources
import { Container, Card, Image, Icon, CardContent } from 'semantic-ui-react'

// Import Project JSON Data
// projectData =  projects.json

import duckHuntImg from '../assets/duck-hunt.jpeg'
import spacr from '../assets/spacr-home.png'


const Projects = () => {
    return (
        <Container className = "projects" >
            <h2>Projects</h2>
            <Card.Group itemsPerRow={3} className = "projects-container">
                <Card
                    image = {duckHuntImg}
                    header = "Duck Hunt™ Remake"
                    description = "This game was createdas a starter project into HTML CSS and JS. It utilizes one main setInterval function to control all the phases of the game"
                />
                <Card
                    image = {duckHuntImg}
                    header = "Duck Hunt™ Remake"
                    description = "This game was createdas a starter project into HTML CSS and JS. It utilizes one main setInterval function to control all the phases of the game"
                />
                {/* <Card
                    image = {duckHuntImg}
                    header = "Duck Hunt™ Remake"
                    description = "This game was createdas a starter project into HTML CSS and JS. It utilizes one main setInterval function to control all the phases of the game"
                /> */}
            </Card.Group>
        </Container>
    )
}

export default Projects