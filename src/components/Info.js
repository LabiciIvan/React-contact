import React from 'react'
import ReactDOM from 'react-dom'


export default function Info() {
    
    return (
        <div className='main--info'>
           <div className='info-about'>
                <h5 className='about-title'>About</h5>
                <h5 className='about-content'>
                I enojy to develop React applications but also I can 
                develop a backend for that too.
                Don't hesitate too much, and let's start the next BIG THING.
                </h5>
           </div>
           <div className='info-interests'>
                <h5 className='interests-title'>Interests</h5>
                <h5 className='interests-content'>
                    I am interested about web development, 
                    most about React and Express js and Laravel. 
                    Experience with HTML, CSS, Javascript.
                </h5>
           </div>
        </div>
    );
}