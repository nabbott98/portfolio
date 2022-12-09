import React from 'react'

// Import Semantic resources
import { Container, Card } from 'semantic-ui-react'

// Import Project JSON Data
// projectData =  projects.json

// import pythonGif from '../assets/python.png'

const skills = ['JavaScript', 'Python', 'C', 'C++', 'HTML', 'CSS', 'SQL', 'Django', 'MongoDB', 'Express', 'Mongoose', 'SQL Database', 'NoSql Database', 'React', 'Liquid.js', 'REST API', 'node.js', 'Morgan', 'Bcrypt', 'OpenCV', 'Postman', 'TwilioAPI', 'MATLAB', 'Arduino']

const skillsJSX = skills.map((Skill, index) => (
    <Card
        key={index}
        header = {Skill}
        inverted
        // style = {{paddingBottom: '-1000px'}}
    />

))

const Skills = () => {
    return (
        <Container className = "skills" id="Skills" fluid>
            <h2>Skills</h2>
            <Card.Group 
                itemsPerRow = {7} 
                stackable
                centered
                >
                {skillsJSX}
            </Card.Group>
        </Container>
    )
}

export default Skills