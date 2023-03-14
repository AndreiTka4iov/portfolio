import React from 'react'
import classes from './AboutMe.module.css'

function AboutMe() {
  return (
    <section className={classes.aboutMe} id='about'>
      <div className={classes.flexAbout}>
        <div className={classes.imgBlock}>
          <img src="/images/MyImage.png" alt="" />
        </div>
        <div className={classes.aboutText}>
          <h2 className={classes.heading}>About <span>Me</span></h2>
          <h3>Frontend Developer</h3>
          <p>Hello, my name is Andrew, I am from Moscow. 
            I’ve been engaged in frontend development for over a year. 
            I constantly improve my knowledge and skills, actively study new technologies and apply them in practice. 
            I study at the third year of a higher educational institution  in the direction of “Applied informatics”.</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </section>
  )
}

export default AboutMe