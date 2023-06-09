import React from 'react'
import classes from './MySkills.module.css'
import { useInView } from 'react-intersection-observer';

const MySkills = () => {
    const { ref, inView} = useInView({
        /* Optional options */
        threshold: .51,
    });

    if(inView) {
        document.querySelector(`a[href='/portfolio/#skills']`)?.classList.add('activeNav')
    } else {
        document.querySelector(`a[href='/portfolio/#skills']`)?.classList.remove('activeNav')
    }
    
  return (
    <section className={classes.MySkills} id='skills' ref={ref}>
        <h3>My <span>Skills</span></h3>
        <div className={classes.skills}>
            <div className={classes.skill}>
                <div className={classes.icon}>
                    <i className='bx bx-code-alt'></i>
                </div>
                <h3>Frontend Dev</h3>
                <ul>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>SCSS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Redux</li>
                </ul>
                <a href="https://drive.google.com/file/d/1jWropZI5F2rQSbrvw5dSdYTZxSxgYM44/view">
                    Read More
                </a>
            </div>
            <div className={classes.skill}>
                <div className={classes.icon}>
                    <i className='bx bx-server'></i>
                </div>
                <h3>Backend Dev</h3>
                <ul>
                    <li>Node JS</li>
                    <li>Express</li>
                    <li>SQL</li>
                    <li>MySql</li>
                    <li>Sqlite3</li>
                </ul>
                <a href="https://drive.google.com/file/d/1jWropZI5F2rQSbrvw5dSdYTZxSxgYM44/view">
                    Read More
                </a>
            </div>
            <div className={classes.skill}>
                <div className={classes.icon}>
                    <i className='bx bx-cog'></i>
                </div>
                <h3>More Skills</h3>
                <ul>
                    <li>Git</li>
                    <li>NPM</li>
                    <li>Figma</li>
                    <li>Photoshop</li>
                </ul>
                <a href="https://drive.google.com/file/d/1jWropZI5F2rQSbrvw5dSdYTZxSxgYM44/view">
                    Read More
                </a>
            </div>
        </div>
    </section>
  )
}

export default MySkills