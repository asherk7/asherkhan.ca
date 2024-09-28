import React from 'react'
import me from '../../resources/me.jpg'
import './about.css'

const About = () => {
  return (
    <section id="about" className="container">
      <h1>About Me</h1>
      <div className="about-container">
        <div className="asher">
          <img src={me} alt="Asher Khan" />
        </div>
        <div className="aboutme">
          <h2>McMaster '26 - B.Eng - Software Engineer</h2>
          <h4>I am a student at McMaster University, class of 2026, with a strong passion for machine learning and data science. My interests lie in developing and optimizing algorithms, training models, and leveraging data to drive meaningful insights and innovations.</h4>
          <h4>As an aspiring machine learning engineer, I am dedicated to honing my data preprocessing, feature engineering, model development, and deployment skills. I find great satisfaction in experimenting with various machine-learning techniques to build models that solve complex problems and create impactful solutions.</h4>
          <h4>I am committed to continuous learning, always seeking opportunities to deepen my understanding of machine learning principles and stay at the forefront of this rapidly evolving field.</h4>
        </div>
      </div>
    </section>
  )
}

export default About