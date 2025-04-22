
import { Message } from '@/types/message';
import MessageBubble from './MessageBubble';

function MessagesList({ messages }: { messages: Message[] }) {
  return (
    <div className="flex flex-1 overflow-hidden min-h-0 flex-col gap-2 overflow-y-auto">
      {messages.map((message, index) => (
        <MessageBubble isUser={index % 2 === 0} key={index} message={message} />
      ))}
    </div>
  );
}

export default MessagesList;
