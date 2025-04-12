import { useState } from 'react';
import MessageBubble from './MessageBubble';
import ChatTextArea from './ChatTextArea';
import MessagesList from './MessagsList';
import { Message } from '@/types/message';

interface ChatProps {}

function Chat({}: ChatProps) {
  const [message, setMessage] = useState<Message>({
    text: '',
    isUser: true,
    timestamp: new Date(),
  });
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = () => {
    if (!message.text.trim()) return;

    setMessages([...messages, message]);
    setMessage({
      text: '',
      isUser: false,
      timestamp: new Date(),
    });
  };

  return (
    <div
      className={`flex flex-col flex-1 ${
        messages.length === 0 ? 'justify-center' : 'justify-between'
      } p-4 max-w-3xl w-full mx-auto min-h-0`}
    >
      {messages.length > 0 && <MessagesList messages={messages} />}

      <div className="flex flex-col gap-2 w-full max-w-3xl relative">
        <ChatTextArea
          message={message}
          setMessage={setMessage}
          handleSendMessage={handleSendMessage}
          show={true}
        />
      </div>
    </div>
  );
}

export default Chat;
