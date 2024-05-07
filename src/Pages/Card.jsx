import React, { useState } from 'react';
import './form.css';

const Form = ({ props }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <div className='form_Main'>
                <div className='form_first' onClick={handleClick}>
                    <img className='form_image' src={props.image} alt={props.title} />
                    <h4 className='form_title'>{props.title}</h4>
                    <p className='form_desc'>{props.description}</p>
                </div>                       
            </div>
            {showModal && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={handleCloseModal}>&times;</span>
                        <img className='modal-image' src={props.image} alt={props.title} />
                        <h4 className='modal-title'>{props.title}</h4>
                        <p className='modal-desc'>{props.description}</p>
                    </div>
                </div> 
            )}
        </div>
    ); 
};

export default Form;

