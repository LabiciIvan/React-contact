import React from 'react'
import ReactDOM from 'react-dom'


export default function Contact() {
    
    return (
        <div className='main--contact'>
            <button className='contact-email'>
                <i class="fa-solid fa-envelope"></i>
                Email
            </button>
            <button className='contact-linkedin'>
                <i class="fa-brands fa-linkedin"></i>
                LinkedIn
            </button>
        </div>
    );
}