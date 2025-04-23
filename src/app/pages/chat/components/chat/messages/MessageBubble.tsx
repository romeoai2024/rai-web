import { Message } from '@/types/message';

interface MessageBubbleProps {
  message: Message;
  isUser?: boolean;
}

function MessageBubble({ message, isUser = false }: MessageBubbleProps) {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-lg px-4 py-2 ${
          isUser
            ? 'bg-blue-500 text-white ml-12'
            : 'bg-neutral-800 text-white mr-12'
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}

export default MessageBubble;
