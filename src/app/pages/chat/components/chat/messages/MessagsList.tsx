import { Message } from '@/types/message';
import MessageBubble from './MessageBubble';
import FileCard, { FileCardData } from '../files/FileCard';

function MessagesList({ messages }: { messages: (Message | FileCardData)[] }) {
  return (
    <div className="flex flex-1 overflow-hidden min-h-0 flex-col gap-2 overflow-y-auto">
      {messages.map((message, index) =>
        'text' in message ? (
          <MessageBubble
            isUser={message.isUser}
            key={index}
            message={message}
          />
        ) : (
          <div key={index} className="flex justify-end">
            <FileCard file={message} handleRemoveFile={() => {}} />
          </div>
        ),
      )}
    </div>
  );
}

export default MessagesList;
