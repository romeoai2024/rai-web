import { Message } from '@/types/message';
import { useState } from 'react';
import Chat from './Chat';
import { FileCardData } from './files/FileCard';

function ChatContainer() {
  const [messages, setMessages] = useState<(Message | FileCardData)[]>([]);
  const [message, setMessage] = useState<Message | null>(null);
  const [fileCardData, setFileCardData] = useState<FileCardData | null>(null);

  const send = ({
    message,
    fileCardData,
  }: {
    message: Message | null;
    fileCardData: FileCardData | null;
  }) => {
    // TODO: send message and file to server
    console.log(fileCardData);

    addMessageOrFileCardToMessages({ message, fileCardData });

    setMessage(null);
    setFileCardData(null);
  };

  const addMessageOrFileCardToMessages = ({
    message,
    fileCardData,
  }: {
    message: Message | null;
    fileCardData: FileCardData | null;
  }) => {
    if (message) setMessages([...messages, message]);
    if (fileCardData) setMessages([...messages, fileCardData]);
  };

  return (
    <Chat
      send={send}
      message={message}
      setMessage={setMessage}
      messages={messages}
      fileCardData={fileCardData}
      setFileCardData={setFileCardData}
    />
  );
}

export default ChatContainer;
