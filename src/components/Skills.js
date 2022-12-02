import React, { useEffect, useState } from 'react'


// Import Semantic resources
import { Container, Card, Image, Icon, CardContent } from 'semantic-ui-react'

// Import Project JSON Data
// projectData =  projects.json



const Skills = () => {
    return (
        <Container className = "skills" style = {{borderTop: "black 0.25rem solid"}}>
            <h2>Skills</h2>
            <Card.Group style = {{marginTop: "3rem"}}>
                {/* {projectCards} */}
                <Card>
                    <Image src={'duck-hunt.jpeg'} wrapped ui={false}/>
                    <CardContent>
                        <Card.Header>JavaScript</Card.Header>
                    </CardContent>
                </Card>
            </Card.Group>
        </Container>
    )
}

export default Skills