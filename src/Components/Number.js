import { useState } from "react"



export default function Number(props) {


    function changeColor(event) {

        document.querySelectorAll('.nums').forEach((smth) => {
            smth.removeAttribute('id')
        })
        event.target.id = 'active'


    }

    return (
        <>
            <div onClick={(event) => { changeColor(event); props.onClick() }} className='nums'>{props.children}</div>

        </>
    )

}
