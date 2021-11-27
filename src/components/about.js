import React from 'react';

const about = () => {
    return (
        <div className="container py-5 about-container">
           <div className="row text-center">
               {/* <div className="col-lg-6 col-xs-12">
                    <div className="photo-wrap mb-5">
                        <img className="about-img" src={author} alt="author"></img>
                    </div>
               </div> */}
               <div className="col-lg-6 col-xs-12">
                    <h1 className="about">
                       About
                    </h1>
                    <h6 className="about-text">
                        Hello, my name is Michael Feldman and welcome to my portfolio site! It is a genuine pleasure to be able to share my
                        work with you and thank you for taking the time to have a look around! Below linked is a sample of my work and the
                        skills I have attained thus far in my coding journey. Snellville Georgia has been home to me for the last 30 years
                        and is short jaunt from the city of Atlanta. My passions include reading, exercise, movies and gaming! Though early
                        in my coding journey its something I'm already deeply enjoying learning as it can be seen as one massive puzzle with
                        so many potential paths to completion.
                    </h6>
               </div>
            </div>
        </div>
    )
}

export default about