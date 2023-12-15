import React, { useState, useEffect } from 'react';
import '../Styles/ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem('chatMessages'));
    if (savedMessages) {
      setMessages(savedMessages);
    }
  }, []);

  const [userInput, setUserInput] = useState('');

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== '') {
      const userMessage = { text: userInput, isUser: true };

      const updatedMessages = [...messages, userMessage];
      localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
      setMessages(updatedMessages);
      setUserInput('');

      setTimeout(() => {
        const botMessage = { text: 'I am an AI and this is a sample response.', isUser: false };
        const updatedMessagesWithBot = [...updatedMessages, botMessage];
        localStorage.setItem('chatMessages', JSON.stringify(updatedMessagesWithBot));
        setMessages(updatedMessagesWithBot);
      }, 500);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={message.isUser ? 'user-message' : 'bot-message'}>
            {message.text}
          </div>
        ))}
      </div>
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBot;
