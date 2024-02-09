import React, { useState, useEffect } from 'react';

import Format from './Format';
import LadyOfJustice from '../Assets/Images/ladyofjustice.png';
import logo from '../Assets/Images/justibot-only-logo.png';
import {Button, ButtonGroup} from "@nextui-org/react";
import {VscArrowBoth, VscSend} from "react-icons/vsc";
import { VscRefresh } from 'react-icons/vsc';
import { VscCrown } from 'react-icons/vsc';


const ProChatBot = () => {
  const initialMessage = {
    text: "Welcome to JustiBot Pro. Feel free to start the conversation.",
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
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem('chatMessages'));
    if (savedMessages) {
      setShowIntro(false);
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

        setIsGenerating(true);

        setTimeout(() => {

          const botMessage = { text: result, isUser: false };
          const updatedMessagesWithBot = [...updatedMessages, botMessage];
          localStorage.setItem('chatMessages', JSON.stringify(updatedMessagesWithBot));
          setMessages(updatedMessagesWithBot);
          setIsGenerating(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error scenarios, show an error message in the chat, etc.
      }
      setIsGenerating(false);
    }
  };

  const handleSubmitHard = (e) => {
    e.preventDefault();
    if (userInput.trim() !== '') {
      const userMessage = { text: userInput, isUser: true };

      const updatedMessages = [...messages, userMessage];
      localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
      setMessages(updatedMessages);
      setUserInput('');
      if(showIntro) setShowIntro(false);

      setIsGenerating(true);

      setTimeout(() => {
        const botMessage = { text: 'Title: Certificates and solemnization of marriages upon alteration of divisions\n Law sections and its subsections related"<br>" to question: Section 4 ([8, 22 of 1955]), Section 10 ([10, 22 of 1946]), Section 14 ([7, 34 of 1946]) and Section 28 ([7, of 1944])\n Answer: For a marriage certificate to be issued by a district registrar from the old or new division when an area undergoes a transition as outlined in Law [7, of 1944] Section 28, a marriage must be solemnized in pursuance of Section 33 of the law without any of the preliminaries prescribed by Sections 4 and 10. The required acts must be done by a District Registrar of the old division or the new division nominated by the District Registrar within the District, and the Registrar-General must periodically publish a list of Registrars of Marriages in Sri Lanka, and the buildings they administer, as laid down by Section 14 ([7, 34 of 1946]).\n Conclusion: In conclusion', isUser: false };
        const updatedMessagesWithBot = [...updatedMessages, botMessage];
        localStorage.setItem('chatMessages', JSON.stringify(updatedMessagesWithBot));
        setMessages(updatedMessagesWithBot);
        setIsGenerating(false);
      }, 500);
    }
  };



  const clearChat = () => {
    if(isGenerating) setIsGenerating(false);
    localStorage.removeItem('chatMessages');
    setMessages([]);
    if(!showIntro) setShowIntro(true);
  };

  return (
    <div className="chat-container">
      <div className="messages">
      {showIntro && (
        <div className="intro">
           <div style={{ display: 'flex'}}>
            <img src={logo} alt="Logo" />
            <span className="badge badge-pro">Pro</span>
          </div>
          <div className="intro-header">      
            <p className="initial">{initialMessage.text}</p>
          </div>
          <div className="intro-text">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {prompts.map((prompt, index) => (
                <div key={index} className="col">
                  <div className="intro-card">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      {/* <img src="your-icon-path" alt="Icon" className="card-icon" /> */}
                      <div className="card-body text-white">{prompt}</div>
                      <div className="send-icon">
                        <VscSend className="send-icon" />
                      </div>
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
            {message.isUser ? (
              message.text // Render user's message as plain text
            ) : (
              <Format text={message.text} /> // Render bot's response using the ChatResponse component
            )}
          </div>
        ))}
        {isGenerating && <div className="bot-message"><Format text='Generating...' /></div>}
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

        <Button onClick={clearChat} color="dark" variant="text" className="refresh-button" style={{ fontSize: '16px' }}>
            <VscRefresh size={30} />
        </Button>
      </form>
{/*       
      <Button color="primary" variant="ghost" className="clear-chat" onClick={clearChat}>
        New Chat 
      </Button> */}
    </div>
  );
};

export default ProChatBot;
