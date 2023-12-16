import React, { useState, useEffect } from 'react';
import LadyOfJustice from '../Assets/Images/ladyofjustice.png';
import {Button, ButtonGroup} from "@nextui-org/react";
import {VscSend} from "react-icons/vsc";


const ChatBot = () => {
  const initialMessage = {
    text: "Welcome! I'm JustiBot. Feel free to start the conversation.",
    isUser: false,
  };

  const prompts = [
    "What are the legal implications of intellectual property rights?",
    "Explain the concept of 'due process' in the legal system.",
    "Discuss the differences between civil law and criminal law.",
    "How does contract law work in different business scenarios?"
  ];

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

  // ... (previous code remains unchanged)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInput.trim() !== '') {
      const userMessage = { text: userInput, isUser: true };
      const updatedMessages = [...messages, userMessage];
      localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
      setMessages(updatedMessages);
      setUserInput('');
      if (showIntro) setShowIntro(false);

      try {
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: userInput }),
        };

        const response = await fetch("http://localhost:8000/test", requestOptions);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        const result = await response.text();

        setTimeout(() => {

          const botMessage = { text: result, isUser: false };
          const updatedMessagesWithBot = [...updatedMessages, botMessage];
          localStorage.setItem('chatMessages', JSON.stringify(updatedMessagesWithBot));
          setMessages(updatedMessagesWithBot);
        }, 500);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error scenarios, show an error message in the chat, etc.
      }
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
              <p className="initial">{initialMessage.text}</p>
              <div className="row row-cols-1 row-cols-md-2 g-4">
                {prompts.map((prompt, index) => (
                  <div key={index} className="col">
                    <div className="card bg-dark">
                      <div className="card-body text-white">
                        {prompt}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {messages.map((message, index) => (
          <div key={index} className={message.isUser ? 'user-message' : 'bot-message'}>
            {(message.text)
            }
          </div>
        ))}
      </div>
      <form className="input-form" style={{position:'sticky',bottom:'0px'}} onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Type your message..."
        />

        <Button className="p-2" style={{width: '60px'}}isIconOnly color="primary" type="submit" aria-label="Like">
          <VscSend color="white" size="25 px" />
        </Button>
      </form>
      
      {/* <Button color="primary" variant="ghost" className="clear-chat" onClick={clearChat}>
        New Chat 
      </Button> */}
    </div>
  );
};

export default ChatBot;
