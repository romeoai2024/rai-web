import { Message } from '@/types/message';
import MessageBubble from './MessageBubble';
import FileCard, { FileCardData } from '../files/FileCard';

function MessagesList({ messages }: { messages: (Message | FileCardData)[] }) {
  return (
    <div className="flex flex-1 overflow-hidden min-h-0 flex-col gap-2 overflow-y-auto">
      {messages.map((message, index) =>
        'text' in message ? (
          <MessageBubble
            isUser={index % 2 === 0}
            key={index}
            message={message}
          />
        ) : (
          <FileCard key={index} file={message} handleRemoveFile={() => {}} />
        ),
      )}
    </div>
  );
}

export default MessagesList;
