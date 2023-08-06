import React, { Children } from 'react';

const MessageButton = ({ children, phoneNumber }) => {
    const handleMessage = () => {
      window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`);
    };
  
    return (
      <button onClick={handleMessage}>{children}</button>
    );
  };
  

export default MessageButton;
