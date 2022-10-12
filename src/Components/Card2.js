import React from 'react'
import './Card2.css'
import photo from './images/illustration-thank-you.svg'

export default function Card2(props) {
    return (
        <div className='container2'>
            <div className='card2'>
                <img className='pt2' src={photo} alt="pt2" />
                <div className='select'>You selected {props.rate} out of 5</div>
                <p className='txt1'>Thank you!</p>
                <p className='txt2'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>

            </div>
        </div>
    )
}

