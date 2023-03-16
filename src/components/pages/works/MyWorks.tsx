import React from 'react'
import cl from './MyWorks.module.css'
import { useInView } from 'react-intersection-observer';

const MyWorks = () => {
  const { ref, inView} = useInView({
    /* Optional options */
    threshold: .51,
  });

  if(inView) {
    document.querySelector(`a[href='#works']`)?.classList.add('activeNav')
  } else {
    document.querySelector(`a[href='#works']`)?.classList.remove('activeNav')
  }
  return (
    <section className={cl.myWorks} id='works' ref={ref}>
        <h2>Latest <span>Project</span></h2>
        <div className={cl.projects}>
          <div className={cl.card}>
            <img src="/images/project.jpg" alt="" />
            <div className={cl.flexDescr}>
              <h1>Authorisation</h1>
              <p>This is a project with the registration of a new user on the website.</p>
              <div className={cl.btn}>
                <a href="" className={cl.git}>
                  <i className='bx bxl-github' ></i>
                </a>
                <a href="" className={cl.whatch}>Watch</a>
              </div>
            </div>
          </div>
          <div className={cl.card}>
            <img src="/images/project.jpg" alt="" />
            <div className={cl.flexDescr}>
              <h1>Authorisation</h1>
              <p>This is a project with the registration of a new user on the website.</p>
              <div className={cl.btn}>
                <a href="" className={cl.git}>
                  <i className='bx bxl-github' ></i>
                </a>
                <a href="" className={cl.whatch}>Watch</a>
              </div>
            </div>
          </div>
          <div className={cl.card}>
            <img src="/images/project.jpg" alt="" />
            <div className={cl.flexDescr}>
              <h1>Authorisation</h1>
              <p>This is a project with the registration of a new user on the website.</p>
              <div className={cl.btn}>
                <a href="" className={cl.git}>
                  <i className='bx bxl-github' ></i>
                </a>
                <a href="" className={cl.whatch}>Watch</a>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default MyWorks