import React from 'react'


const navbar = () =>{
    return(
<div class="topnav">
        <a href="#home" class="active" id="active">Michael Feldman</a>
        {/* <!-- Navigation links (hidden by default) --> */}
        <div id="myLinks">
            <a href="#about-me">About Me</a>
            <a href="#work">Work</a>
            <a href="#contact-me">Contact Me</a>
            <a href="https://docs.google.com/document/d/17EJ1ScWI4leJ3LyXSNLJ4NeY9-wGcixg/edit?usp=sharing&ouid=104705080098949872674&rtpof=true&sd=true">Resume</a>
        </div>
        </div>
    );
}





export default navbar 