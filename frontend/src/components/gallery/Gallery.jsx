import React from 'react'
import './gallery.css'
import {Link} from 'react-router-dom'
import gallery from '../../assets/gallery.avif'

const Gallery = () => {
  return (
    <section id='gallery'>
        <div className='gallery'>
            <div>
                <h2>Teachers</h2>
                <h1>Powerfull tools to empower your students</h1>
                <p>Help every student confidently learn anything with the free study sets study notes and in class games like quiz let live you can instantly create a more engage classroom student and teacher can sign up and study for free</p>
                <Link to='/register' className='link__btn' >Sign up for free</Link>
            </div>
            <div>
                <img src={gallery} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Gallery