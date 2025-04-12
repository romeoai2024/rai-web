import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ArrowUp, FileUp, Paperclip } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

function InitialChatInput({
  passMessageToChat: passMessageToChat,
}: {
  passMessageToChat: (data: string) => void;
}) {
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(true);

  const handleSendMessage = () => {
    setShow(false);
    passMessageToChat(message);
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-4 px-4">
      <p className="text-2xl font-bold">What can I help you with?</p>
      <div className="flex flex-col gap-2 w-full max-w-3xl relative">
        <Textarea
          className="w-full max-w-3xl resize-none pb-14"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
                  disabled={message.length === 0}
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
    </div>
  );
}

export default InitialChatInput;
