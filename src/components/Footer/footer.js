import React from 'react'
import './footer.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';


const footer = () => {
    return(
        // <div>
        // <div>
        // <div className="container footerCont">
            <div className="row footerRow">
            <div className="col-xs footerCol">
                <h3 className="footerButtons"><a href="mailto:micah41224@gmail.com"> <FaEnvelope className="icons"/></a></h3>
            </div>
            <div className="col-xs footerCol">
                <h3 className="footerButtons"><a href="https://github.com/micah41224"> <FaGithub className="icons"/></a></h3>
            </div>
            <div className="col-xs footerCol">
                <h3 className="footerButtons"><a href="https://www.linkedin.com/in/michael-feldman87/"><FaLinkedin className="icons"/></a></h3>
            </div>
            </div>
           
            // </div>
    // </div>
    //     </div>
    )
}





export default footer 