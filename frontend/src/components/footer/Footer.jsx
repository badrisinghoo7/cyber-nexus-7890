import React from 'react'
import './footer.css'
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import footer__logo from '../../assets/footer-logo.png';

const Footer = () => {
  return (
    <section id='footer'>
        <div className='sections'>
            <div className='section'>
                <h4>About Us</h4>
                <a href="">About Quizlet</a>
                <a href="">How Quizlet works</a>
                <a href="">Careers</a>
                <a href="">Advertise with us</a>
                <a href="">Get the app</a>
            </div>
            <div className='section'>
                <h4>For students</h4>
                <a href="">Flashcards</a>
                <a href="">Test</a>
                <a href="">Learn</a>
                <a href="">Solutions</a>
                <a href="">Q-chat: AI Tutor</a>
                <a href="">Spaced Repetition</a>
                <a href="">Modern Learning Lab</a>
                <a href="">Quizlet Plus</a>
            </div>
            <div className='section'>
                <h4>For teachers</h4>
                <a href="">Live</a>
                <a href="">Checkpoint</a>
                <a href="">Blog</a>
                <a href="">Be the Change</a>
                <a href="">Quizlet Plus for teachers</a>
            </div>
            <div className='section'>
                <h4>Resources</h4>
                <a href="">Help Center</a>
                <a href="">Sign Up</a>
                <a href="">Honor code</a>
                <a href="">Community guidelines</a>
                <a href="">Privacy</a>
                <a href="">Terms</a>
                <a href="">Ad and Cookie Policy</a>
                <a href="">Quizlet for Schools</a>
            </div>
            <div className='section'>
                <h4>Language</h4>
                <a href="">English (USA)</a>
            </div>
        </div>
        <div className='countries'>
            <h4>Country</h4>
            <br />
            <div className='counties__div'>
                <div>United States</div>
                <div>United Kingdom</div>
                <div>Canada (French)</div>
                <div>Germany</div>
                <div>France</div>
                <div>Spain</div>
                <div>Italy</div>
                <div>Japan</div>
                <div>South Korea</div>
                <div>China</div>
                <div>Netherlands</div>
                <div>Brazil</div>
                <div>Poland</div>
                <div>Turkey</div>
                <div>Ukraine</div>
                <div>Taiwan</div>
                <div>Vietnam</div>
                <div>Indonesia</div>
                <div>Indonesia</div>
                <div>Russia</div>
            </div>
            <div className='social' >
                <div className='social__icons'>
                    <span><FaTiktok /></span>
                    <span><FaXTwitter /></span>
                    <span><FaFacebookF /></span>
                    <span><IoLogoInstagram /></span>
                    <span><FaYoutube /></span>
                </div>
                <div>
                    <img src={footer__logo} alt="" />
                </div>
            </div>
            <p>© 2023 Quizlet, Inc.</p>
        </div>
    </section>
  )
}

export default Footer