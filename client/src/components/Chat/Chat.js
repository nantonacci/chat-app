import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';

import InfoBar from '../InfoBar/InfoBar.js';
import Input from '../Input/Input.js';
import Messages from '../Messages/Messages.js';
import TextContainer from '../TextContainer/TextContainer.js';

let socket;


const Chat = ({ location }) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [color, setColor] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'https://nicos-chat-app.herokuapp.com/';

    useEffect(() => {
        const { name, room, color } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);
        setColor(color);
        
        socket.emit('join', { name, room }, (error) => {
            if(error) {
                alert(error);
            }
        });
        
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [ ...messages, message ]);
        });
        
        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();

        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }


    console.log(message, messages);

    return(
        <div className="outerContainer">
            <div className="container">

                <InfoBar room={room} color={color} />

                <Messages messages={messages} name={name} color={color} />

                <Input setMessage={setMessage} sendMessage={sendMessage} message={message} color={color} />

            </div>

            <TextContainer users={users} />

        </div>
    )
}

export default Chat;