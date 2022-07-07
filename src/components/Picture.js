import React from 'react'
import ReactDOM from 'react-dom'
import Portrait from '../images/male.png'


export default function Picture() {
    
    return (
        <div className='main--picture'>
            <img className='picture-portrait' src={Portrait}></img>
        </div>
    );
}