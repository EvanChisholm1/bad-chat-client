import React, { createContext, useState, useEffect } from 'react';
import io from 'socket.io-client';

export const IoContext = createContext();

// const socket = io('http://localhost:4000');
const socket = io('https://bad-chat-app.herokuapp.com/');

function IoProvider(props) {

    const [messages, setMessages] = useState([]);
    const [id, setId] = useState('Anonymous');

    useEffect(() => {
        socket.on('connect', () => {
            console.log('connected');
        })
    }, []);

    useEffect(() => {
        socket.on('message', message => {
            setMessages([
                ...messages,
                message,
            ]);
        });
    }, [messages]);

    function emitMessage(message) {
        socket.emit('message', { message, id });
    }

    return (
        <IoContext.Provider value={{ messages, emitMessage, setId, id }}>
            {props.children}
        </IoContext.Provider>
    )
}

export default IoProvider;
