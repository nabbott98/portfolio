import React from 'react'

// Import Semantic resources
import { Image } from 'semantic-ui-react'

// Import Link Icons
import github from '../assets/github-50.png'
import linkedin from '../assets/linkedin-48.png'
import resume from '../assets/resume-50.png'

const Header = () => {
    return (
        <div className="header">
            <h1>Nick Abbott</h1>
            <h3>Software Engineer | Full Stack Developer | Mechanical Engineer</h3>
            <div className="links">
                {/* Github */}
                <Image 
                    src = { github }
                    href = "https://github.com/nabbott98"
                />
                {/* LinkedIn */}
                <Image src={linkedin}/>
                {/* Resume */}
                <Image src={resume}/>
            </div>
            
        </div>
    )
}

export default Header