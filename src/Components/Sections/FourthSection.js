import React from 'react'
import './FourthSection.css';
import image from '../../Assets/bg-2.png'


export default function FourthSection() {
    return (
        <div className='m-s'>
            <div className='m-i'>
                <img src={image} alt='' />
            </div>
            <div className='m-t'>
                <h1>How to design your site footer like we did</h1>
                <p>Donec a eros justo. Fusce egestas tritique ultrices. Nam temper, augue nec tincidunt  
                molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi 
                facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa. Praesent feilis est, finibus et nisiac, hendrerit
                venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <button>Learn More</button>
            </div>
        </div>
    )
}
