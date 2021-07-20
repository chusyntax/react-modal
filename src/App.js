
import React, {useState} from 'react';
import Modal from './components/Modal';
import ModalButton from './components/ModalButton';



function App() {
 
 const [showModal,setShowModal] = useState(false);

const openModal = () =>{

  setShowModal(prev => !prev)
};

  return (
    <div className='container'>

<ModalButton openModal={openModal}>Info</ModalButton>

<Modal showModal={showModal} setShowModal={setShowModal}
 heading="Modal Heading"
 description="Description-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus ipsa, repellat doloremque debitis ipsum illo voluptates recusandae rem nulla cupiditate ducimus quidem optio rerum expedita porro non sed? Harum repellat iste atque, labore odio vitae quisquam deserunt expedita architecto impedit!"
 madeBy="Made with: React, XML, JQuery and The New York Times API"
 viewCode="https://github.com/chusyntax"
 viewSite="https://github.com/chusyntax"
 >

</Modal>

</div>

  );
}

export default App;
