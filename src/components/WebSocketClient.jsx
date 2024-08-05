import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const WebSocketClient = () => {
  const [url, setUrl] = useState('ws://localhost:8080');
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const socketRef = useRef(null);

  useEffect(() => {
    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  const connect = () => {
    if (socketRef.current) {
      socketRef.current.close();
    }

    const socket = new WebSocket(url);

    socket.onopen = () => {
      setConnected(true);
      setMessages(prev => [...prev, 'Connected to WebSocket server']);
    };

    socket.onmessage = (event) => {
      setMessages(prev => [...prev, `Received: ${event.data}`]);
    };

    socket.onclose = () => {
      setConnected(false);
      setMessages(prev => [...prev, 'Disconnected from WebSocket server']);
    };

    socketRef.current = socket;
  };

  const disconnect = () => {
    if (socketRef.current) {
      socketRef.current.close();
    }
  };

  const sendMessage = () => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(inputMessage);
      setMessages(prev => [...prev, `Sent: ${inputMessage}`]);
      setInputMessage('');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="WebSocket URL"
          className="flex-grow"
        />
        <Button onClick={connect} disabled={connected}>
          Connect
        </Button>
        <Button onClick={disconnect} disabled={!connected} variant="destructive">
          Disconnect
        </Button>
      </div>
      <Textarea
        value={messages.join('\n')}
        readOnly
        className="h-64 resize-none"
      />
      <div className="flex space-x-2">
        <Input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-grow"
        />
        <Button onClick={sendMessage} disabled={!connected}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default WebSocketClient;
