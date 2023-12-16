import React, { useState, useEffect } from 'react';
import LadyOfJustice from '../Assets/Images/ladyofjustice.png';
import {Button, ButtonGroup} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";

const ChatBot = () => {
  const initialMessage = {
    text: "Welcome! I'm JustiBot. Feel free to start the conversation.",
    isUser: false,
  };

  const [showIntro, setShowIntro] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem('chatMessages'));
    if (savedMessages) {
      setMessages(savedMessages);
    }
  }, []);

  // useEffect(() => {
  //   if (showIntro) {
  //     setTimeout(() => {
  //       setShowIntro(false);
  //       setMessages([]);
  //     }, 3000); // Change the duration as needed (e.g., 3000ms for 3 seconds)
  //   }
  // }, [showIntro]);

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
      if(showIntro) setShowIntro(false);

      setTimeout(() => {
        const botMessage = { text: 'I am an AI and this is a sample response.', isUser: false };
        const updatedMessagesWithBot = [...updatedMessages, botMessage];
        localStorage.setItem('chatMessages', JSON.stringify(updatedMessagesWithBot));
        setMessages(updatedMessagesWithBot);
      }, 500);
    }
  };

  const clearChat = () => {
    localStorage.removeItem('chatMessages');
    setMessages([]);
    if(!showIntro) setShowIntro(true);
  };

  return (
    <div className="chat-container">
      <div className="messages">
      {showIntro && (
          <div className="intro">
            <img src={LadyOfJustice} alt="Logo" />
            <div className="intro-text">
              <p>{initialMessage.text}</p>
            </div>
          </div>
      )}
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

      {/* <Textarea
        minRows={2}
        label="Description"
        placeholder="Ask for help..."
        type="text"
          value={userInput}
          onChange={handleUserInput}
      /> */}

        <Button color="primary" variant="ghost" type="submit">Send</Button>
      </form>
      
      <Button color="primary" variant="ghost" className="clear-chat" onClick={clearChat}>
        New Chat 
      </Button>
    </div>
  );
};

export default ChatBot;
