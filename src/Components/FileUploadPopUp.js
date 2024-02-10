import React, { useState } from 'react';
import { Button, Input } from '@nextui-org/react';
import {
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter
} from "@nextui-org/react";

const FileUploadPopUp = ({ isOpen, onClose, onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleUpload = () => {
    // Pass selected file and option to parent component
    onUpload(selectedFile, selectedOption);
    // Close the popup
    onClose();
  };

  return (
    <div>
    <Modal open={isOpen} onClose={onClose}>
      <ModalHeader>Upload File</ModalHeader>
      <ModalContent>
        <Input type="file" onChange={handleFileChange} />
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
        </select>
      </ModalContent>
      <ModalFooter>
        <Button onClick={handleUpload} color="success">Upload</Button>
        <Button onClick={onClose} color="error">Cancel</Button>
      </ModalFooter>
    </Modal>
    </div>
  );
};

export default FileUploadPopUp;
