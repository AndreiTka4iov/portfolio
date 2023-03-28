import React from 'react'
import cl from './MyWorks.module.css'
import { useInView } from 'react-intersection-observer';

const MyWorks = () => {
  const { ref, inView} = useInView({
    /* Optional options */
    threshold: .51,
  });

  if(inView) {
    document.querySelector(`a[href='/portfolio/#works']`)?.classList.add('activeNav')
  } else {
    document.querySelector(`a[href='/portfolio/#works']`)?.classList.remove('activeNav')
  }
  return (
    <section className={cl.myWorks} id='works' ref={ref}>
        <h2>Latest <span>Project</span></h2>
        <div className={cl.projects}>
          <div className={cl.card}>
            <img src="/portfolio/images/authWork.png" alt="" />
            <div className={cl.flexDescr}>
              <h1>Authorisation</h1>
              <p>As a frontend developer i focus on visual quality of website, on responsibility for any devices and cool animations. 
                    This project is created to show examples of my skills in React, Redux and JS with this fancy authorisation page. 
                    </p>
              <div className={cl.btn}>
                <a href="https://github.com/AndreiTka4iov/registration" className={cl.git}>
                  <i className='bx bxl-github' ></i>
                </a>
                <a href="https://andreitka4iov.github.io/registration/" className={cl.whatch}>Watch</a>
              </div>
            </div>
          </div>
          <div className={cl.card}>
            <img src="/portfolio/images/postsWork.png" alt="" />
            <div className={cl.flexDescr}>
              <h1>Posts</h1>
              <p>This project is made to demonstrate the skills of working with data using React, Redux, JavaScript. The website is adapted for all devices. The data was taken from "JsonPlaceholder".</p>
              <div className={cl.btn}>
                <a href="https://github.com/AndreiTka4iov/posts" className={cl.git}>
                  <i className='bx bxl-github' ></i>
                </a>
                <a href="https://andreitka4iov.github.io/posts/" className={cl.whatch}>Watch</a>
              </div>
            </div>
          </div>
          <div className={cl.card}>
            <img src="/portfolio/images/todosWork.png" alt="" />
            <div className={cl.flexDescr}>
              <h1>Todos</h1>
              <p>This project is made to demonstrate the skills of working with data and states using React, Redux, JavaScript.  The website is adapted for all devices. The work was done according to the layout.</p>
              <div className={cl.btn}>
                <a href="https://github.com/AndreiTka4iov/todos" className={cl.git}>
                  <i className='bx bxl-github' ></i>
                </a>
                <a href="https://andreitka4iov.github.io/todos/" className={cl.whatch}>Watch</a>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default MyWorks