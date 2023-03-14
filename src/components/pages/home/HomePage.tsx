import React from 'react'
import classes from './HomePage.module.css'
import Typed from 'typed.js';



function HomePage() {
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

  return (
    <section className={classes.home} id="home">
        <div className={classes.homeContent}>
          <h3>Hello, it's Me</h3>
          <h1>Andrey Tkachev</h1>
          <h3>And I'm a <span ref={el}></span></h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint veniam distinctio quas dolore voluptatum vero!
          </p>
          <div className={classes.socialMedia}>
            <a href="https://vk.com/tcka4">
              <i className='bx bxl-vk'></i>
            </a>
            <a href="https://t.me/Tcka4">
              <i className='bx bxl-telegram' ></i>
            </a>
            <a href="https://github.com/AndreiTka4iov">
              <i className='bx bxl-github' ></i>
            </a>
            <a href="">
              <i className='bx bxl-linkedin' ></i>
            </a>
          </div>
          <a href="" className={classes.btn}>Download CV</a>
        </div>
        <div className={classes.homeImg}>
          <img src='/images/MyImage.png' alt=""/>
        </div>
      </section>
  )
}

export default HomePage