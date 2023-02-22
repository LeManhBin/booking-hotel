import React from 'react'
import './Modal.scss'
const Modal = ({setOpenModal}) => {
  return (
    <div className='modal-background'>
      <div className='modal-container'>
        <button>X</button>
        <div className='title'>
          <h1>Bạn có chắc với quyết định này</h1>
        </div>
        <div className='footer'>
            <button>Confirm</button>
            <button onClick={() => setOpenModal(false)}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Modal