import React from 'react';

const formatMessage = (messageText) => {
  return (
    <div className="formatted-message">
      {/* Additional formatting can be done here */}
      <div className="message-content">
        {messageText.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

const Format = ({ text }) => {
  return (
    <div className="response-message">
      {formatMessage(text)}
    </div>
  );
};

export default Format;
