import { Message } from '@/types/message';
import { useState } from 'react';
import Chat from './Chat';
import { FileCardData } from './files/FileCard';
import { v4 as uuidv4 } from 'uuid';

type ChatType = {
  id: string;
  messages: (Message | FileCardData)[];
  timestamp: Date;
};

function ChatContainer() {
  const [chats, setChats] = useState<ChatType[]>([]);
  const [chat, setChat] = useState<ChatType | null>(null);
  const [messages, setMessages] = useState<(Message | FileCardData)[]>([]);
  const [message, setMessage] = useState<Message | null>(null);
  const [base64File, setBase64File] = useState<string | null>(null);
  const [fileCardData, setFileCardData] = useState<FileCardData | null>(null);

  // get chats from local storage
  // create new chat if new message is sent
  // add message or file card data to current chat if sent
  // send message to server
  // send file to server

  const getChats = () => {
    const chats = localStorage.getItem('chats');
    if (chats) {
      setChats(JSON.parse(chats));
    }
  };

  const createNewChat = () => {
    const newChat: ChatType = {
      id: uuidv4(),
      messages: [],
      timestamp: new Date(),
    };
    addChat(newChat);
  };

  const addChat = (chat: ChatType) => {
    setChats([...chats, chat]);
    localStorage.setItem('chats', JSON.stringify(chats));
  };

  const sendMessage = (message: Message) => {
    if (!chat) {
      createNewChat();
    } else {
    }

    setMessages([...messages, message]);
    setMessage(null);
  };

  const addMessageToChat = (message: Message) => {};

  return (
    <Chat
      sendMessage={sendMessage}
      message={message}
      setMessage={setMessage}
      messages={messages}
      base64File={base64File}
      setBase64File={setBase64File}
      fileCardData={fileCardData}
      setFileCardData={setFileCardData}
    />
  );
}

export default ChatContainer;
