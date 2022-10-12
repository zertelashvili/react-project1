import './Card.css'

import Star from './images/icon-star.svg'
import Number from './Number'

export default function Card(props) {

    return (
        <div className='container'>
            <div className='card'>
                <div className='circle'>
                    <img src={Star} alt="icon" />
                </div>
                <p className='title'>How did we do?</p>
                <p className='text'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                <div className='numcard'>
                    <Number onClick={() => { props.rate(1) }}>1</Number>
                    <Number onClick={() => { props.rate(2) }}>2</Number>
                    <Number onClick={() => { props.rate(3) }}>3</Number>
                    <Number onClick={() => { props.rate(4) }}>4</Number>
                    <Number onClick={() => { props.rate(5) }}>5</Number>

                </div>
                <div onClick={() => { props.submit() }} className='cardsubmit'>SUBMIT</div>
            </div>
        </div>
    )
}
