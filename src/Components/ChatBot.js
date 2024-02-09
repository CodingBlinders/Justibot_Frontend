import React, { useState, useEffect } from 'react';
import Format from './Format';
import logo from '../Assets/Images/justibot-only-logo.png';
import { VscSend, VscRefresh } from 'react-icons/vsc';

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
  const [isGenerating, setIsGenerating] = useState(false);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem('chatMessages'));
    if (savedMessages) {
      setShowIntro(false);
      setMessages(savedMessages);
    }
  }, []);

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

      setIsGenerating(true);

      try {
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: userInput }),
        };

        const response = await fetch("http://20.235.249.223:8000/free", requestOptions);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        const result = await response.text();

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
    }
  };

  const clearChat = () => {
    if (isGenerating) setIsGenerating(false);
    localStorage.removeItem('chatMessages');
    setMessages([]);
    if (!showIntro) setShowIntro(true);
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {showIntro && (
          <div className="intro">
            <img src={logo} alt="Logo" />
            <div className="intro-header">      
              <p className="initial">{initialMessage.text}</p>
            </div>
            <div className="intro-text">
              <div className="row row-cols-1 row-cols-md-2 g-4">
                {prompts.map((prompt, index) => (
                  <div key={index} className="col">
                    <div className="intro-card">
                      <div className="d-flex align-items-center justify-content-between mb-2">
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
        <button className="p-2" style={{width: '60px'}} aria-label="Send">
          <VscSend color="white" size="25 px" />
        </button>
        <button onClick={clearChat} className="refresh-button" style={{ fontSize: '16px' }} aria-label="Clear">
          <VscRefresh size={30} />
        </button>
      </form>
    </div>
  );
}

export default ChatBot;
