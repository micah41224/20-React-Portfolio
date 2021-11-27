import React from 'react';

const styles = {
    workTitle: {
        textAlign: "center",
        textDecoration: "underline",
        paddingBottom: "10px"

    },
};

const navbar = () =>{
    return(
<div class="container">
    <div class="row">
        <div class="col-sm">
            <h2 style={styles.workTitle}>Work</h2>
            </div>
    <div class="row">
        <div class="col-sm">
            <div class="card-header">
                <h3 class="card-title">Weather Dashboard</h3>
            </div>
            <div class="flex-item"><a href="https://micah41224.github.io/06-Server-Side-APIs-Weather-Dashboard/">
                <img src="./assets/images/weatherdashboardtestsize.png" alt="Code Refactor Homework" class="img-fluid"></img>
                </a>
            </div>
            <div class="card-footer text-center">
                <a href="https://github.com/micah41224/06-Server-Side-APIs-Weather-Dashboard" target="_blank"><i class="fa fa-github"></i></a>
                <a href="https://micah41224.github.io/06-Server-Side-APIs-Weather-Dashboard/" target="_blank"><i class="fa fa-globe" aria-hidden="true"></i></a>
            </div>
        </div>
        <div class="col-sm">
            <div class="card-header">
                <h3 class="card-title">Work Day Scheduler</h3>
            </div>
        <div class="flex-item"><a href="https://micah41224.github.io/05-Third-Party-APIs-Work-Day-Scheduler/">
                <img src="./assets/images/workdayschedulertestsize.png" alt="Code Refactor Homework"
                    class="img-fluid"></img>
            </a>
        </div>
        <div class="card-footer text-center">
            <a href="https://github.com/micah41224/05-Third-Party-APIs-Work-Day-Scheduler" target="_blank"><i
                    class="fa fa-github"></i></a>
            <a href="https://micah41224.github.io/05-Third-Party-APIs-Work-Day-Scheduler/" target="_blank"><i class="fa fa-globe"
                    aria-hidden="true"></i></a>
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm">
            <div class="card-header">
            <h3 class="card-title">Coding Quiz</h3>
            </div>
        <div class="flex-item"><a href="https://micah41224.github.io/04-Web-APIs-Code-Quiz/">
                <img src="./assets/images/codingquiztestsize.png" alt="Code Refactor Homework"
                    class="img-fluid"></img>
            </a>
        </div>
        <div class="card-footer text-center">
            <a href="https://github.com/micah41224/04-Web-APIs-Code-Quiz" target="_blank"><i
                    class="fa fa-github"></i></a>
            <a href="https://micah41224.github.io/04-Web-APIs-Code-Quiz/" target="_blank"><i class="fa fa-globe"
                    aria-hidden="true"></i></a>
        </div>
        </div>
        <div class="col-sm">
        <div class="card-header">
            <h3 class="card-title">Password Generator</h3>
        </div>
        <div class="flex-item"><a href="https://micah41224.github.io/03-Javascript-Password-Generator/">
                <img src="./assets/images/passwordgeneratortestsize.png" alt="Code Refactor Homework"
                    class="img-fluid"></img>
            </a>
        </div>
        <div class="card-footer text-center">
            <a href="https://github.com/micah41224/03-Javascript-Password-Generator" target="_blank"><i
                    class="fa fa-github"></i></a>
            <a href="https://micah41224.github.io/03-Javascript-Password-Generator/" target="_blank"><i class="fa fa-globe"
                    aria-hidden="true"></i></a>
        </div>
        </div>
    </div>
</div>
</div>
    );
}





export default navbar 