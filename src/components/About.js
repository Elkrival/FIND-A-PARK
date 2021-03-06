import React, { Component } from 'react';
import Background           from './Background.js';
import Header               from './Header.js';
import Footer               from './Footer.js';
import '../css/Home.css';

class About extends Component{

  render(){
    return(
      <div>
        <Background/>
        <Header/>
        <div className="outer-about">
        <div className="about">
          <h5>About Me:</h5>

            <div className="inner-about">

              <div className="name">
                <div className="image-rikki"></div>
                <h3>Rikki Rifka Rabinowitz</h3>
              </div>

              <div className="divider"></div>

              <div className="description">
                <h6>About Me:</h6>
                <p className="pAbout">I am a Frontend Web Developer who loves utilizing my creativity and hardworking skills to ensure the best outcome possible.
                  Let's connect!</p>
                <h6>Additional Info:</h6>
                <p className="pAbout">I graduated Brooklyn College Suma Cum Laude with a Bachelor of Science in Computer Science and a double minor in Accounting and Multimedia.
                </p>
                <div className="gitFlex">
                  <a className="links" target="_blank" href="https://github.com/rikkirabz">Rikki's GitHub</a>
                  <a className="links" target="_blank" href="https://www.linkedin.com/in/rifkarabinowitz">Rikki's LinkedIn</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default About
