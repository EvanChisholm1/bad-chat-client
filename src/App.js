import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import { IoContext } from './components/IoContext';
import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from './icons8-expand-arrow.svg';
import NavBar from './components/NavBar';

const MessageBar = styled.form`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px 30px;
  display: grid;
  place-items: center;
  grid-template-columns: auto 100px;
`

const MessageInput = styled.input`
  border: none;
  width: 100%;
  padding: 7px 10px;
  border-radius: 10px;
  background-color: #464646;

  :focus {
    outline: none;
  }
`

const MessageButton = styled.button`
  background-color: #464646;
  border-radius: 50%;
  padding: 10px;
  border: none;
  display: grid;
  place-items: center;
  transform: rotate(180deg);
`

const MessageList = styled.ul`
  list-style: none;
  width: auto;
  padding: 30px 40px;
  margin-top: 35px;
  display: grid;
  grid-gap: 20px;
`

function App() {

  const [message, setMessage] = useState('');
  const { messages, emitMessage } = useContext(IoContext);

  function handleSubmit(e) {
    e.preventDefault();
    emitMessage(message);
    setMessage('');
  }

  function handleInput(e) {
    setMessage(e.currentTarget.value);
  }

  return (
    <div className="App">
      <NavBar />
      <MessageList>
        {messages.map(message => (
          <li key={`${message.message || message}${Math.random()}`}>
            <small>{message.id}</small>
            <p>{message.message}</p>
          </li>
        ))}
      </MessageList>
      <MessageBar onSubmit={handleSubmit}>
        <MessageInput
          placeholder="Your message here" 
          type="text" name="message" 
          id="message"
          autoComplete="off"
          onChange={handleInput} 
          value={message} 
        />
        <MessageButton
          type="submit" 
          name="submit" 
          id="submit" 
          value="" 
        >
          <ArrowIcon />
        </MessageButton>
      </MessageBar>
    </div>
  );
}

export default App;
