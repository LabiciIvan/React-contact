import React from 'react'
import ReactDOM from 'react-dom'


export default function Contact() {
    
    return (
        <div className='main--contact'>
            <button className='contact-email'>
                <a target='_blank' href='mailto:labici.ioan@yahoo.com'>
                <i class="fa-solid fa-envelope"></i>
                Email
                </a>
            </button>
            <button className='contact-linkedin'>
                <a href='https://www.linkedin.com/in/ioan-labici-78074822b/'>
                    <i class="fa-brands fa-linkedin"></i>
                    LinkedIn
                </a>
            </button>
        </div>
    );
}