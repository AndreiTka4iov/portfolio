import React from 'react'
import classes from './AboutMe.module.css'
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
  const { ref, inView} = useInView({
    /* Optional options */
    threshold: .51,
  });

  if(inView) {
    document.querySelector(`a[href='/portfolio/#about']`)?.classList.add('activeNav')
  } else {
    document.querySelector(`a[href='/portfolio/#about']`)?.classList.remove('activeNav')
  }
  return (
    <section className={classes.aboutMe} id='about' ref={ref}>
      <div className={classes.flexAbout}>
        <div className={classes.imgBlock}>
          <img src="/portfolio/images/MyImage.png" alt="" />
        </div>
        <div className={classes.aboutText}>
          <h2 className={classes.heading}>About <span>Me</span></h2>
          <h3>Frontend Developnpmer</h3>
          <p>Hello, my name is Andrew, I am from Moscow. 
            I’ve been engaged in frontend development for over a year. 
            I constantly improve my knowledge and skills, actively study new technologies and apply them in practice. 
            I study at the third year of a higher educational institution  in the direction of “Applied informatics”.</p>
          <a href="#skills">Read More</a>
        </div>
      </div>
    </section>
  )
}

export default AboutMe