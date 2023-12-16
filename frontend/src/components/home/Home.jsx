import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <section id='home'>
        <div className='banner'>
            <div className='info__div'>
                <h1>Experience a new era of AI-enhanced learning</h1>
                <p>Quizlet is more than flashcards: it’s the #1 global learning platform. Join our community of 300 million learners using Quizlet’s practice tests, Expert Solutions and AI-powered tools to improve their grades and reach their goals.</p>
                <Link className='sign__btn' to='/register'>Sign up now</Link>
            </div>
        </div>
    </section>
  )
}

export default Home