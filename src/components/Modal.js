import React from 'react'

const Modal =(props)=>{

return(

<> 
{props.showModal ? (
    <div className="background">
        <div className='modalWrapper' showModal={props.showModal}>
            <img clasName="modalImg" src={require('./deals.jpg')} alt='A landscape'/>
            <div className="modalContent">
                <h1>Are You ready?</h1>
                <p>Everything you need right here</p>
                <button>Join Now</button>
            </div>
            <div className="closeModalButton" aria-label="Close modal" onClick={()=> props.setShowModal(prev => !prev)}></div>
        </div>
    </div>
) : null} 
</>

);
}


export default Modal;