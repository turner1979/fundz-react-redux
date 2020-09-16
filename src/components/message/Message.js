import React from 'react';

const Message = ({ options }) => {
  return (
    <div className="message">
      { options.text ? options.text.map((text, index) => <p key={`message-${index}`}>{ text }</p>) : '' }
    </div>
  );
}

export default Message;
