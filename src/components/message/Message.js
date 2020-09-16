import React from 'react';
import './Message.scss'

const Message = ({ options }) => {
  const msgClass = options.type ? `message message--${options.type}` : 'message message--info';
  return (
    <div className={msgClass}>
      { options.text ? options.text.map((text, index) => <p key={`message-${index}`}>{ text }</p>) : '' }
    </div>
  );
}

export default Message;
