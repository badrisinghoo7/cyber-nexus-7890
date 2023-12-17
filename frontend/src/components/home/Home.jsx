import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'
import stats from '../../assets/stats.png'
import coming from '../../assets/coming.png'
import Plus from '../plus/Plus'
import Gallery from '../gallery/Gallery'

const Home = () => {
  return (
    <section id='home'>
        <div className='banner'>
            <div className='info__div'>
                <h1>Experience a new era of AI-enhanced learning</h1>
                <p>StudyBuddy is more than flashcards: it’s the #1 global learning platform. Join our community of 300 million learners using StudyBuddy's practice tests, Expert Solutions and AI-powered tools to improve their grades and reach their goals.</p>
                <Link className='sign__btn' to='/register'>Sign up now</Link>
            </div>
        </div>
        <div className='stats'>

          <h1>Ace your classes with our new suite of study tools</h1>

          <div className='img__div'>
            <img src={stats} alt="" />
          </div>

          <div className='link__div'>
            <Link to='/register' className='link'>Get Started</Link>
          </div>

        </div>

        <div className='coming__features'>
          <h1>Coming soon to StudyBuddy</h1>
          <div>
            <img src={coming} alt="" />
          </div>
        </div>
        <Plus />
        <Gallery />
    </section>
  )
}

export default Home