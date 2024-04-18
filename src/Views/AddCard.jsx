// AddCard.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../Redux/CardSlice';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from 'react-router-dom'
import Top from '../Components/Top';
import CardForm from '../Components/CardForm';
import CardPreview from '../Components/CardPreview';
import '../Components/card-form.css'; // Your AddCard component's CSS

const AddCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook for navigation
  const [cardDetails, setCardDetails] = useState({
    number: '',
    holder: '',
    expiry: '',
    cvv: '',
    vendor: '',
  });

  const handleAddCard = (cardDetails) => {
    dispatch(addCard(cardDetails));
    navigate('/'); // Redirect to Home page
  };

  return (
    <div className="add-card">
      <Top />
      <CardPreview cardDetails={cardDetails} />
      <CardForm 
        cardDetails={cardDetails} 
        setCardDetails={setCardDetails} 
        onSubmit={handleAddCard}
      />
    </div>
  );
};

export default AddCard;
