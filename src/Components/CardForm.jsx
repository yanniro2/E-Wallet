import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { addCard } from '../Redux/CardSlice';
import './card-form.css';

const CardForm = ({ cardDetails, setCardDetails }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Create the navigate function for redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard(cardDetails)); // Dispatch the action to add the card
    navigate('/'); // Navigate to the home page after submission
  };

  return (
    <div className="card-form-container">
      <form onSubmit={handleSubmit}>
        <div className="input-full-width">
          <input
            type="text"
            name="number"
            placeholder="Card Number"
            value={cardDetails.number}
            onChange={handleChange}
          />
        </div>
        <div className="input-full-width">
          <input
            type="text"
            name="holder"
            placeholder="Card Holder"
            value={cardDetails.holder}
            onChange={handleChange}
          />
        </div>
        <div className="input-pair">
          <input
            type="text"
            name="expiry"
            placeholder="Valid Thru"
            value={cardDetails.expiry}
            onChange={handleChange}
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={cardDetails.cvv}
            onChange={handleChange}
          />
        </div>
        <div className="input-full-width">
          <select
            name="vendor"
            value={cardDetails.vendor}
            onChange={handleChange}
            required
          >
            <option value="">Select vendor...</option>
            <option value="bitcoin-inc">BITCOIN INC</option>
            <option value="ninja-bank">NINJA BANK</option>
            <option value="block-chain-inc">BLOCK CHAIN INC</option>
            <option value="evil-corp">EVIL CORP</option>
          </select>
        </div>
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
};

export default CardForm;