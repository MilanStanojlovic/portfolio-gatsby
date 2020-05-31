import React from 'react';
import style from './about.module.scss';

const About = () => {
  return (
    <div className="section" id="about">
      <div className="inner-container">
        <div className="section__content">
          <div className={style.about__text}>
            <div className="heading__main">
              About.
            </div>
            <p className="text"><span className="highlight-text">The more ambitious the project, the better!</span>
              <br /><br />
            My name is Milan, I'm a software engineer specializing in front-end web development. My main focus is on helping businesses develop bespoke web solutions that their users will love.
            <br /><br />
            Besides software and technology, some of my interests are basketball, graffiti and gaming.
            <br /> <br />
            Here are some of the tools and technologies I've been working with:
            <br /> <br />
            </p>
            <div className={style.about__skills}>
              <ul>
                <li className="text">HTML5</li>
                <li className="text">CSS3</li>
                <li className="text">Sass</li>
              </ul>
              <ul>
                <li className="text">JavaScript</li>
                <li className="text">React</li>
                <li className="text">Redux</li>
              </ul>
              <ul>
                <li className="text">Angular</li>
                <li className="text">TypeScript</li>
                <li className="text">Git</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About