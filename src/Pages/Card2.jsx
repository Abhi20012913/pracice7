import React, { useState } from 'react';
import './form.css';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({ image: '', title: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    console.log(formData);
    onClose();
  };

  return (
    isOpen && (
      <div className="modal" >
        <div className="modal-content">
          <span style={{'marginLeft':'95%' }} className="close" onClick={onClose}>&times;</span>
          <h5 style={{'margin':'0px' , 'marginBottom': '5px'}}>ADD CARD</h5>
          <input style={{'fontSize':'12px'}} type="text" name="image" className='input_text' value={formData.image} onChange={handleChange} placeholder="Image URL" />
          <input style={{'fontSize':'12px'}} type="text" name="title" className='input_text1' value={formData.title} onChange={handleChange} placeholder="Title" />
          <textarea  style={{'fontSize':'12px'}} name="description" className='input_text2' value={formData.description} onChange={handleChange} placeholder="Description"></textarea>
          <button className='input_text5' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    )
  );
};

export default Modal;
