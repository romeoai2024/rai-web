import Conversation from '@/pages/chat/components/conversation';
import { useState } from 'react';
import TopChatBar from './components/top-chat-bar';
import InitialChatInput from './components/initial-chat-input';

function Chat() {
  const [message, setMessage] = useState<string | null>(null);

  function handleMessageFromChild(message: string) {
    setMessage(message);
  }

  return (
    <div className="flex flex-col h-full">
      <TopChatBar />
      {message ? (
        <Conversation initialMessage={message} />
      ) : (
        <InitialChatInput passMessageToChat={handleMessageFromChild} />
      )}
    </div>
  );
}

export default Chat;
