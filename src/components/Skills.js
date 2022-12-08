import React, { useEffect, useState } from 'react'


// Import Semantic resources
import { Container, Card, Image, Icon, CardContent, CardGroup } from 'semantic-ui-react'

// Import Project JSON Data
// projectData =  projects.json

import pythonGif from '../assets/python.png'

const skills = ['JavaScript', 'Python', 'C', 'C++', 'HTML', 'CSS', 'SQL', 'Django', 'MongoDB', 'Express', 'Mongoose', 'SQL Database', 'NoSql Database', 'React', 'Liquid.js', 'REST Routing', 'node.js', 'OpenCV', 'TwilioAPI', 'MATLAB', 'Arduino']

const skillsJSX = skills.map((Skill, index) => (
    <Card 
        key={index}
        header = {Skill}
        // style = {{paddingBottom: '-1000px'}}
    />

))


const Skills = () => {
    return (
        <Container className = "skills">
            <h2>Skills</h2>
            <Card.Group 
                itemsPerRow = {6} 
                stackable
                centered
                >
                {skillsJSX}
            </Card.Group>
        </Container>
    )
}

export default Skills