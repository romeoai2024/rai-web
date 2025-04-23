import { Message } from '@/types/message';
import { useState } from 'react';
import Chat from './Chat';
import { FileCardData } from './files/FileCard';
import axios from 'axios';

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
    // First add local message/fileCard to messages
    if (message) setMessages((prevMessages) => [...prevMessages, message]);
    if (fileCardData)
      setMessages((prevMessages) => [...prevMessages, fileCardData]);

    // Then make the API call
    axios
      .post('https://echo.free.beeceptor.com', { message, fileCardData })
      .then((response) => {
        const responseMessage = response.data.parsedBody.message as Message;
        responseMessage.isUser = false;
        responseMessage.text =
          'Response to message: ' + response.data.parsedBody.message.text;

        // Add response message to messages
        setMessages((prevMessages) => [...prevMessages, responseMessage]);
      })
      .catch((error) => {
        console.error(error);
      });

    setMessage(null);
    setFileCardData(null);
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
