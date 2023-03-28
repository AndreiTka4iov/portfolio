import React, { FC } from 'react'
import classes from './HomePage.module.css'
import Typed from 'typed.js';
import { useInView } from 'react-intersection-observer';


const HomePage = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['Fronend Developer', 'Junior Developer'],
          typeSpeed: 100,
          loop: true
        });
    
        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
      }, []);

    const { ref, inView} = useInView({
      /* Optional options */
      threshold: .51,
    });

    if(inView) {
      document.querySelector(`a[href='/portfolio/#home']`)?.classList.add('activeNav')
    } else {
      document.querySelector(`a[href='/portfolio/#home']`)?.classList.remove('activeNav')
    }

  return (
    <section className={classes.home} id="home" ref={ref}>
        <div className={classes.homeContent}>
          <h3>Hello, it's Me</h3>
          <h1>Andrey Tkachev</h1>
          <h3>And I'm a <span ref={el}></span></h3>
          <p>
            I am from Moscow. I've been engaged in frontend development for over a year.
          </p>
          <div className={classes.socialMedia}>
            <a href="https://discord.com/users/239443966586519554">
              <i className='bx bxl-discord-alt' ></i>
            </a>
            <a href="https://t.me/Tcka4">
              <i className='bx bxl-telegram' ></i>
            </a>
            <a href="https://github.com/AndreiTka4iov">
              <i className='bx bxl-github' ></i>
            </a>
            <a href="https://www.linkedin.com/in/andreiTkachiov/">
              <i className='bx bxl-linkedin' ></i>
            </a>
          </div>
          <a href="https://drive.google.com/file/d/1jWropZI5F2rQSbrvw5dSdYTZxSxgYM44/view" className={classes.btn}>Download CV</a>
        </div>
        <div className={classes.homeImg}>
          <img src='/portfolio/images/MyImage.png' alt=""/>
        </div>
      </section>
  )
}

export default HomePage