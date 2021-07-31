import React from 'react';
import image from '../guest.png';
import './Header.css';

export default function Header( props ) {
    return (
        <div>
            <nav>
                <h1>Posts</h1>
                <p>Guest</p>
                <div className="logo-image">
                   <p> <img src={image} alt="Dp" /> </p>
                </div>
            </nav>
        </div>
    )
}
