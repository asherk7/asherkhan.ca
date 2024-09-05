import React from 'react';
import Project from './Project.js';
import nfl from '../../resources/projects/nfl.jpg';
import island from '../../resources/projects/island.jpg';
import jaguars from '../../resources/projects/jaguars.jpg';
import workout from '../../resources/projects/workout.jpg';
import ml from '../../resources/projects/machine_learning.png';
import "./projects.css"

const Projects = () => {
    const data = [
        {
            id: 1,
            image: ml,
            title: "EthniVision",
            description: "Created a Neural Network that can predict ethnicity from facial features using Tensorflow, Sci-kit Learn, React, and Node.js.",
            tech: ["Tensorflow", "Sci-kit Learn", "React", "Node.js"],
            github: "https://github.com/asherk7/EthniVision",
            demo: ""
        },
        {
            id: 2,
            image: nfl,
            title: "NFL Record Predictor",
            description: "Created an application that predicts the 2022-2023 NFL team records using Python, Flask, sci-kit learn, and pandas.",
            tech: ["Python", "Flask", "sci-kit learn", "pandas"],
            github: "https://github.com/asherk7/NFL-Record-Predictor",
            demo: "https://nflrecordpredictor.pythonanywhere.com/"
        },
        {
            id: 3,
            image: island,
            title: "Island Generator",
            description: "Created an application to help users generate random islands utilizing Java, Maven, and JUnit.",
            tech: ["Java", "Maven", "JUnit"],
            github: "https://github.com/asherk7/Island-Generator",
            demo: ""
        },
        {
            id: 4,
            image: jaguars,
            title: "Jaguars Webpage",
            description: "Created a mockup of the Jacksonville Jaguars' website using HTML, CSS, and Flexbox.",
            tech: ["HTML", "CSS", "Flexbox"],
            github: "https://github.com/asherk7/jaguars-webpage",
            demo: "https://asherk7.github.io/jaguars-webpage/"
        },
        {
            id: 5,
            image: workout,
            title: "Workout Tracker",
            description: "Created an application to help users track their workouts.",
            tech: ["TypeScript", "Python", "Django", "Angular", "Jenkins"],
            github: "https://github.com/asherk7/Workout-Tracker",
            demo: ""
        }
    ]

    return (
        <section id="projects">
            <h1>Projects</h1>
            <h2>My Recent Work, More to Come</h2>
            <div className="container projects-container">
                {data.map((project) => {
                    return (
                        <Project data={project} />
                    )
                })}
            </div>
        </section>
    );
}

export default Projects