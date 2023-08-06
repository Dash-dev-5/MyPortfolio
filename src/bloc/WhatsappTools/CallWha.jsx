import React, { Children } from 'react';

const CallButton = ({ children, phoneNumber}) => {
  const handleCall = () => {
    window.open(`tel:${phoneNumber}`);
  };

  return (
    <button onClick={handleCall} className='callImage'>{children}</button>
  );
};

export default CallButton;
