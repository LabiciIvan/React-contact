import React from 'react'
import ReactDOM from 'react-dom'
import Picture from './Picture'
import Description from './Description';
import Contact from './Contact';
import Info from './Info';
import Footer from './Footer';


export default function Main() {
    
    return (
        <div className='main'>
            <Picture />
            <Description />
            <Contact />
            <Info />
            <Footer />
        </div>
    );
}