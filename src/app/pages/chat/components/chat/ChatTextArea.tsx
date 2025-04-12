import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Paperclip } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { Message } from '@/types/message';
import { useRef, useState } from 'react';
import FileUploadButton from './FileUploadButton';
import FileCard, { FileCardData } from './FileCard';

interface ChatTextAreaProps {
  message: Message;
  setMessage: (message: Message) => void;
  handleSendMessage: () => void;
  show: boolean;
  setBase64File: (base64File: string | null) => void;
  base64File: string | null;
}

function ChatTextArea({
  message,
  setMessage,
  handleSendMessage,
  show,
  setBase64File,
  base64File,
}: ChatTextAreaProps) {
  const [fileCardData, setFileCardData] = useState<FileCardData | null>(null);

  function handleMessageChange(setMessage: (message: Message) => void) {
    return (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setMessage({
        text: e.target.value,
        timestamp: new Date(),
        isUser: true,
      });
    };
  }

  function handleRemoveFile() {
    setFileCardData(null);
    setBase64File(null);
  }

  return (
    <div className="flex flex-col w-full max-w-3xl relative">
      <AnimatePresence>
        {fileCardData && (
          <motion.div
            className="absolute -top-22 left-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FileCard file={fileCardData} handleRemoveFile={handleRemoveFile} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* {fileCardData && <FileCard file={fileCardData} />} */}
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
        <FileUploadButton
          setFileCardData={setFileCardData}
          setBase64File={setBase64File}
          base64File={base64File}
        />
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
