import { useEffect } from 'react';
import { createConnection } from './chat';
import './App6.css';

export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
  }, []);
  return <h1>Welcome to the chat!</h1>;
}
