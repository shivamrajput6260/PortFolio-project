import React, { useState } from 'react'
import "./AboutPage.css"
import about from "../assets/about.jpg"



const About = () => {
  const [mainSkill, setMainSkill] = useState(true);
  const [award, setAward] = useState(false);
  const [experience, setExperince] = useState(false);
  const [education, setEducation] = useState(false);

  const handleClick = (e) => {
    console.log(e.target.innerHTML);
    if ("Main skills" === e.target.innerHTML) {
      setMainSkill(true);
      setAward(false);
      setExperince(false);
      setEducation(false);
    } else if ("Awards" === e.target.innerHTML) {
      setMainSkill(false);
      setAward(true);
      setExperince(false);
      setEducation(false);
    } else if ("Experience" === e.target.innerHTML) {
      setMainSkill(false);
      setAward(false);
      setExperince(true);
      setEducation(false);
    } else if ("Education &amp; Certification" === e.target.innerHTML) {
      setMainSkill(false);
      setAward(false);
      setExperince(false);
      setEducation(true);
    }
  };
  return (
    <section className='about_page' id='About' >
      <div className='container_page'>
        <div className='first'>
          <img src={about} alt="" />
        </div>
        <div className='second'>
          <div className='sub_second'>
            <h1 className="title">About Me</h1>
            <p className="discription-about">
              There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered{" "}
              {`<a href="#">alteration</a>`} in some form, by injected
              humour, or randomised words which dont look even slightly
              believable. If you are going to use a passage of Lorem Ipsum,
            </p>

            <div className="list-about">
              <ul className="list-style" onClick={handleClick}>
                <li id="li-one">Main skills</li>
                <li id="li-two">Awards</li>
                <li id="li-three">Experience</li>
              </ul>
              <ul className='hello' onClick={handleClick}>
                <li id="li-four">Education & Certification</li>
              </ul>
            </div>
          </div>


          <div className="quality">
            {mainSkill === true ? (
              <ul className="skill">
                <a>User experience design - UI/UX</a>
                <li>Delight the user and make it work.</li>
                <a>Web and user interface design - Development</a>
                <li>Websites, web experiences, ...</li>
                <a>Interaction design - Animation</a>
                <li>I like to move it move it.</li>
              </ul>
            ) : null}{" "}
            <br />
            {award === true ? (
              <ul className="skill-one">
                <a>Awwwards.com - Winner</a>
                <li>2019 - 2020</li>
                <a>CSS Design Awards - Winner</a>
                <li>2017 - 2018</li>
                <a>Design nominees - site of the day</a>
                <li>2013- 2014</li>
              </ul>
            ) : null}{" "}
            <br />
            {experience === true ? (
              <ul className="skill-two">
                <a>Sr. Front-end Engineer - Google</a>
                <li>2018 - Current</li>
                <a>Front-end Engineer - Microsoft</a>
                <li>2017 - 2018</li>
                <a>Software Engineer - Alibaba</a>
                <li>2013- 2014</li>
              </ul>
            ) : null}
            <br />
            {education === true ? (
              <ul className="skill-three">
                <a>BSc In CSE - ABC University, Los Angeles, CA</a>
                <li>2010</li>
                <a>
                  Diploma in Computer Science - Gamma Technical
                  Institute
                </a>
                <li>2009</li>
                <a>Graphic Designer - ABC Institute, Los Angeles, CA</a>
                <li>2007</li>
              </ul>
            ) : null}
          </div>
        </div>

      </div>


    </section>
  )
}

export default About
