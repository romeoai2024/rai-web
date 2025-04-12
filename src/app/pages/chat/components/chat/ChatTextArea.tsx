import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Paperclip } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { Message } from '@/types/message';

interface ChatTextAreaProps {
  message: Message;
  setMessage: (message: Message) => void;
  handleSendMessage: () => void;
  show: boolean;
}

function handleMessageChange(setMessage: (message: Message) => void) {
  return (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage({
      text: e.target.value,
      timestamp: new Date(),
      isUser: true,
    });
  };
}

function ChatTextArea({
  message,
  setMessage,
  handleSendMessage,
  show,
}: ChatTextAreaProps) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-3xl relative">
      <Textarea
        className="w-full max-w-3xl resize-none pb-14"
        value={message.text}
        onChange={handleMessageChange(setMessage)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
          }
        }}
      />
      <div className="absolute bottom-2 left-2">
        <Button variant="outline" size="icon">
          <Paperclip />
        </Button>
      </div>
      <div className="absolute bottom-2 right-2">
        <AnimatePresence>
          {show && (
            <motion.div
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <Button
                disabled={message.text.length === 0}
                variant="outline"
                size="icon"
                onClick={handleSendMessage}
              >
                <ArrowUp />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ChatTextArea;
