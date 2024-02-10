import React, { useState, useEffect } from 'react';
import Format from './Format';
import LadyOfJustice from '../Assets/Images/ladyofjustice.png';
import logo from '../Assets/Images/justibot-only-logo.png';
import {VscSend, VscFile} from "react-icons/vsc";
import { VscRefresh } from 'react-icons/vsc';
import FileUploadPopUp from './FileUploadPopUp'; 
import {
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  useDisclosure,
  Button, ButtonGroup, Input, Select, SelectItem
} from "@nextui-org/react";

const EnterpriseChatBot = () => {
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
    const [fileUploadPopupOpen, setFileUploadPopupOpen] = useState(false); // State to manage popup visibility
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    useEffect(() => {
      const savedMessages = JSON.parse(localStorage.getItem('chatMessages'));
      if (savedMessages) {
        setShowIntro(false);
        setMessages(savedMessages);
      }
    }, []);
  
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
        }
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
        setIsGenerating(false);
      }
    };
  
    const clearChat = () => {
      if(isGenerating) setIsGenerating(false);
      localStorage.removeItem('chatMessages');
      setMessages([]);
      if(!showIntro) setShowIntro(true);
    };
  
    // Function to handle file upload
    const handleFileUpload = (file, option) => {
      // Handle file upload logic here
      console.log('File:', file);
      console.log('Selected Option:', option);
    };

    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleFileChange = (e) => {
      setSelectedFile(e.target.files[0]);
    };
  
    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };
  
    const handleUpload = () => {

    };
  
  
    return (
      <div className="chat-container">
        <div className="messages">
          {showIntro && (
            <div className="intro">
              <div style={{ display: 'flex'}}>
                <img src={logo} alt="Logo" />
                <span className="badge badge-pro">Enterprise</span>
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
        <form className="input-form" style={{position:'sticky',bottom:'0px'}} onSubmit={handleSubmitHard}>
          <input
            type="text"
            value={userInput}
            onChange={handleUserInput}
            placeholder="Type your message..."
          />

          <Button onPress={onOpen} color="primary" variant="text" component="span">
            <VscFile size={25} />
          </Button>

          {/* <FileUploadPopUp
            isOpen={fileUploadPopupOpen}
            onClose={() => setFileUploadPopupOpen(false)}
            onUpload={handleFileUpload}
          /> */}

    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Upload File</ModalHeader>
              <ModalBody>
                <label htmlFor="file" className="text-black">Select a file</label>
                <Input type="file" onChange={handleFileChange} />
                <label htmlFor="option" className="text-black">Your Region</label>
                <Select value={selectedOption} onChange={handleOptionChange}>
                  <SelectItem value="">Select an option</SelectItem>
                  <SelectItem value="option1">Option 1</SelectItem>
                </Select>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleFileUpload}>
                  Upload
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

          <Button className="p-2" style={{width: '60px'}}isIconOnly color="primary" type="submit" aria-label="Like">
            <VscSend color="white" size="25 px" />
          </Button>
  
          <Button onClick={clearChat} color="error" variant="text" className="refresh-button" style={{ fontSize: '16px' }}>
              <VscRefresh size={30} />
          </Button>
  
        </form>
      </div>
    );
  };

export default EnterpriseChatBot;
