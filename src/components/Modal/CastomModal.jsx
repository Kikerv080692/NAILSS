
import {createPortal} from 'react-dom'
import { useEffect } from 'react'
import * as SC from './Modal.styled'
const modalRoot = document.querySelector("#modal-root")

export const CastomModal = ({children, toggleModal, }) => {
  
  useEffect(() => {
    const closeModalESC = (event) => {
    
      if(event.code === 'Escape'){
        toggleModal()
      }
    }
  window.addEventListener('keydown', closeModalESC)
  return () => {
    window.removeEventListener('keydown', closeModalESC)
  }
  },[])

const closeOnClick = (e) => {

if(e.target === e.currentTarget){
  toggleModal()
}
}

useEffect(() => {
  const handleResize = () => {
    const height = window.innerHeight;
    const innerModal = document.querySelector('.inner-modal');
    if (innerModal) {
      innerModal.style.maxHeight = `${height - 100}px`; 
    }
  };
  
  window.addEventListener('resize', handleResize);
  
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

  return createPortal(
    <SC.Overlay onClick={closeOnClick}>
      <SC.Inner>
        {children}
        <SC.CloseBtn type='button'onClick={toggleModal}>X</SC.CloseBtn>
      </SC.Inner>
    </SC.Overlay>,
    modalRoot
  )
}


