
import React, {useState} from 'react';
import Modal from './components/Modal'


function App() {
 
 const [showModal,setShowModal] = useState(false);

const openModal = () =>{

  setShowModal(prev => !prev)
};

  return (
    <div className='container'>


<button onClick={openModal}>More Infomation</button>
<Modal showModal={showModal} setShowModal={setShowModal}></Modal>

</div>

  );
}

export default App;
