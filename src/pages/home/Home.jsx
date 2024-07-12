import React from 'react'
import Profile from "../../assets/homeAsbel.jpg"
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
import "./home.css"

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__contect">
        <div className="home__data">
          <h1 className="home__title">
            <span> - I'm Asbel Torales.</span> Developer Full Stack.
          </h1>

          <p className="home__description">
          I am a full-stack engineer and developer with a strong background in research, data analysis, and web and mobile application
          development. My focus is on user-centered design and creating intuitive interfaces that enhance user experience. I am
          passionate about continuous learning and committed to constantly developing my skills, always seeking to drive my personal and
          professional growth.
          </p>

          <Link to='/about' className='button'>
            More About Me{' '} 
            <span className='button__icon'>
              <FaArrowRight/>

            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  )
}

export default Home
