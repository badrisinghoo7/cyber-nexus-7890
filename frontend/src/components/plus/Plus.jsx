import React from 'react'
import './plus.css'
import oneGif from '../../assets/1.gif'


const Plus = () => {
  return (
    <section id='plus'>
        <div className='plus'>
          <div className='plus__child'>
            <div>STUDYBUDDY PLUS</div>
            <h1>Get better grades with the #1 learning platform</h1>
            <p>Discover deeper learning with StudyBuddy Plus</p>

            <div className='about'>
              <div>
                <div><img width="50" height="50" src="https://img.icons8.com/plasticine/100/apple-notes--v2.png" alt="apple-notes--v2"/></div>
                <div>
                    <h4>Magic Notes and Q-Chat</h4>
                    <p>Supercharge your studies with our new and cutting-edge AI features</p>
                </div>
              </div>
              <div>
                <div><img width="50" height="50" src="https://img.icons8.com/plasticine/100/create-new.png" alt="create-new"/></div>
                <div>
                    <h4>Personalized study modes</h4>
                    <p>Elevate your flashcard game with complete access to study modes: Learn and Test</p></div>
              </div>
              <div>
                <div><img width="50" height="50" src="https://img.icons8.com/plasticine/100/list.png" alt="list"/></div>
                <div>
                    <h4>Millions of trusted solutions</h4>
                    <p>Understand tough homework with the combined power of AI and expert-written solutions</p>
                </div>
              </div>
            </div>
          </div>
          <div className='gif__parent'>
            <div className='gif__div'>
              <img src={oneGif} alt="" />
            </div>
          </div>
        </div>

        <div className='per'>
            <h1 >
            94% of students who use Learn or Test mode say that StudyBuddy helps them get better grades*
            </h1>
            <p>*381 StudyBuddy users were surveyed in Dec. 2021</p>
        </div>
    </section>
  )
}

export default Plus