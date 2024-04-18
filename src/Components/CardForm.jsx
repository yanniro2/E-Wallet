import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { addCard } from '../Redux/CardSlice';
// import './card-form.css';

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
    <form onSubmit={handleSubmit} className="w-full h-min flex flex-col gap-3">
      <div className="box-1">
        <label className="label" htmlFor="number">
          Card Number
        </label>
        <input
          className="input-1"
          type="text"
          id="number"
          name="number"
          placeholder="Card Number"
          value={cardDetails.number}
          onChange={handleChange}
        />
      </div>
      <div className="box-1">
        <label className="label" htmlFor="holder">
          Card Holder
        </label>
        <input
          className="input-1"
          id="holder"
          type="text"
          name="holder"
          placeholder="Card Holder"
          value={cardDetails.holder}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-2  gap-3">
        <div className="box-1">
          <label className="label" htmlFor="expiry">
            Valid Thru
          </label>
          <input
            className="input-1"
            type="text"
            id="expiry"
            name="expiry"
            placeholder="MM/YY"
            value={cardDetails.expiry}
            onChange={handleChange}
          />
        </div>

        <div className="box-1">
          <label className="label" htmlFor="cvv">
            CVV
          </label>
          <input
            className="input-1"
            type="text"
            id="cvv"
            name="cvv"
            placeholder="CVV"
            value={cardDetails.cvv}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="box-1">
        <select
          id="vendor"
          name="vendor"
          value={cardDetails.vendor}
          onChange={handleChange}
          required
          className="input-1">
          <option value="">Select vendor...</option>
          <option value="bitcoin-inc">BITCOIN INC</option>
          <option value="ninja-bank">NINJA BANK</option>
          <option value="block-chain-inc">BLOCK CHAIN INC</option>
          <option value="evil-corp">EVIL CORP</option>
        </select>
      </div>
      <button type="submit" className="btn btn-secound">
        Add Card
      </button>
    </form>
  );
};

export default CardForm;