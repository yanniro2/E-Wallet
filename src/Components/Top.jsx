import React from 'react';
// import './card-form.css'

// eslint-disable-next-line react/prop-types
const Top = ({ title }) => {
  return (
    <header className="text-center p-5">
      <h1 className="text-[2rem] font-semibold uppercase">{title}</h1>
    </header>
  );
};

export default Top;
