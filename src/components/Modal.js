import React from 'react'

const Modal =(props)=>{

return(

<> 
{props.showModal ? (
    <div className="background">
        <div className='modalWrapper' showModal={props.showModal}>

            <img clasName="modalImg" src={require('./deals.jpg').default} alt="A Landscape" width="100%" height="100%"/>
          
            <div className="modalContent">
                <h1>React Modal</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus ipsa, repellat doloremque debitis ipsum illo voluptates recusandae rem nulla cupiditate ducimus quidem optio rerum expedita porro non sed? Harum repellat iste atque, labore odio vitae quisquam deserunt expedita architecto impedit!</p>
                <p>Made with: React, XML, JQuery and The New York Times API</p>
                <div className="buttonLayout">
                <button className="innerModalButton">View Code</button>
                <button className="innerModalButton">Live Site</button>
                </div>
            </div>
            <button className="closeModalButton" aria-label="Close modal" onClick={()=> props.setShowModal(prev => !prev)}>Close</button>
        </div>
    </div>
) : null} 
</>

);
}


export default Modal;