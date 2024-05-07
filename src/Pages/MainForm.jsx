import React, { useState } from 'react';
import image from '../assets/image.jpg';
import Form from './Card.jsx';
import Modal from './Card2.jsx'
import './form.css';

const MainForm = () => {
  const [formData, setFormData] = useState([
    {
      "image": image,
      "title": "Hi welcome",
      "description": "hi i am abhiram, this is react training"
    },
    {
      "image": image,
      "title": "Hi welcome",
      "description": "hi i am sathish, this is react training"
    },
    {
      "image": image,
      "title": "Hi welcome",
      "description": "hi i am pavan, this is react training"
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCard = (newCardData) => {
    setFormData([...formData, newCardData]);
  };

  return (
    <div className='Form'>
    <div className='Form_1'>
      <button className='button' onClick={() => setIsModalOpen(true)}>ADD CARD</button>
      {formData.map((formEntry) => (
        <Form  props={formEntry} />
      ))}
     
    </div>
     <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddCard} />
     </div>
  );
};

export default MainForm;



