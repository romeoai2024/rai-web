import { ArrowUp, AudioLines } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

function InitialChatInput({
  passMessageToChat: passMessageToChat,
}: {
  passMessageToChat: (data: string) => void;
}) {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    passMessageToChat(message);
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-4">
      <p className="text-2xl font-bold">What can I help you with?</p>
      <div className="flex flex-col gap-2 w-full max-w-md">
        <Textarea
          className="w-full max-w-md resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
        />
        <div className="flex ml-auto">
          <Button disabled={message.length === 0} variant="outline" size="icon" onClick={handleSendMessage}>
            <ArrowUp />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default InitialChatInput;
