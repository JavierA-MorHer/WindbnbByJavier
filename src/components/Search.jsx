import React from 'react';
import Modal from 'react-modal';
import 'animate.css';
import { Property } from './Property';
import Logo from '../ui/img/logo.svg'
import '../ui/navbar.css'
import { useAdult, useChildren, useGuest, useLocation, useModal } from '../hooks';


const customStyles = {
  content: {
    position: 'absolute',
    top: '0',
    left:'0',
    right: 'auto',
    bottom: 'auto',
    backgroundColor: '#FFFFFF',
    borderRadius: '0px 0px 16px 16px'
  },
  overlay:{
    backgroundColor:'rgba(0, 0, 0, 0.7)'
  }
};

export const Search = () => {
  
  function handleForm(e){
    e.preventDefault();

  }

  const {modalIsOpen,openModal, closeModal} = useModal();
  const {visibleLocation, location, handleVisibleLocation, handleClickLocation} = useLocation();
  const {visibleGuest, handleVisibleGuest} = useGuest();
  const {counterAdult, incrementAdult, decrementAdult} = useAdult();
  const {counterChildren, incrementChildren, decrementChildren} = useChildren();


Modal.setAppElement('#root')

  return (
    <div className='contenedor'>
     
    <div className="navBar">
      <div className='logo'>
        <img  src={Logo} alt="WindBnb logo" />
        </div>
      
      <div className="search" type="text">
        <button type="text" className="searchCountry" onClick={openModal}>{ location }</button>
        <button type="text" className="searchGuest" onClick={openModal}>{counterAdult+counterChildren===0 ? 'Add guest': counterAdult+counterChildren +` guests`}</button>
        <button className="material-symbols-outlined icon-search"onClick={openModal}>search</button>

        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Search"
        className='modal'
      >
        <button className='material-symbols-outlined icon-close' onClick={closeModal}>close</button>

        <div className='contenido-search' >
          <form action="" onSubmit={handleForm} className='contenido-search'>
            
          <div className='city'>
          <button className='searchCountry-full' onClick={handleVisibleLocation}>{ location }</button>
              {
                visibleLocation === true 
                ?<div className='animate__animated animate__fadeInLeft'>
                  <ul className='lista'>
                    <li className='item' onClick={handleClickLocation}>Helsinki</li>
                    <li className='item' onClick={handleClickLocation}>Turku</li>
                    <li className='item' onClick={handleClickLocation}>Oulu</li>
                    <li className='item' onClick={handleClickLocation}>Vaasa</li>
                  </ul>
                </div> 
                
                :''
              }
            </div>

        <div className='guest'>
          <button 
                className='searchGuest-full' 
                onClick={handleVisibleGuest}>{counterAdult+counterChildren===0 ? 'Add guest': counterAdult+counterChildren+` guests`}
            </button>
              {
                visibleGuest === true 
                ?  <div className='animate__animated animate__fadeInRight' >
                      <div className='guest-content'>

                        <small className='title'>Adults</small>
                        <small className='age'>Ages 13 or above</small><br />
                      </div>
                        <button className='btn' disabled={counterAdult < 1} onClick={decrementAdult}>-</button>
                        <small className='counter'>{counterAdult}</small>
                        <button className='btn' onClick={incrementAdult}>+</button>

                      
                                            
                      <div className='guest-content'>

                        <small className='title'>Children</small>
                        <small className='age'>Ages 2-12</small><br />
                      </div>
                        <button className='btn' disabled={counterChildren < 1} onClick={decrementChildren}>-</button>
                        <small className='counter'>{counterChildren}</small>
                        <button className='btn' onClick={incrementChildren}>+</button>
                  </div>
                :''
              }
          </div>
          </form>
          
        </div>
      </Modal>

      </div> 
    </div>

       <div className='propiedad'>
          <Property city={location} guest={counterAdult+counterChildren}/>
       </div> 
    </div>


     
  );
};
