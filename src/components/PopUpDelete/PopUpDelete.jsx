import React from 'react'

const PopUpDelete = ({title, setIsShowPopUp, handleDelete, idTemp}) => {

    const handleAction = () =>{
        setIsShowPopUp(false)
        handleDelete(idTemp)
    }
  return (
    <div className='popup-container'>
        <div className='title'>
            {title}
        </div>
        <div className='action'>
            <button onClick={() => setIsShowPopUp(false)}>Cancel</button>
            <button style={{backgroundColor: '#FC2947'}} onClick={() => handleAction()} >Delete</button>
        </div>
    </div>
  )
}

export default PopUpDelete