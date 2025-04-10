import Conversation from '@/components/conversation';
import InitialChatInput from '@/components/initial-chat-input';
import TopChatBar from '@/components/top-chat-bar';
import { useState } from 'react';

function Chat() {
  const [message, setMessage] = useState<string | null>('Hey');

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
