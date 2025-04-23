import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { Message } from '@/types/message';
import { useState } from 'react';
import ModeSelector from './ModeSelector';
import FileCard, { FileCardData } from '../files/FileCard';
import FileUploadButton from '../files/FileUploadButton';

interface ChatTextAreaProps {
  send: ({
    message,
    fileCardData,
  }: {
    message: Message | null;
    fileCardData: FileCardData | null;
  }) => void;
  message: Message | null;
  setMessage: (message: Message) => void;
  fileCardData: FileCardData | null;
  setFileCardData: (fileCardData: FileCardData | null) => void;
  show: boolean;
}

function ChatTextArea({
  send,
  message,
  setMessage,
  fileCardData,
  setFileCardData,
  show,
}: ChatTextAreaProps) {
  const [mode, setMode] = useState<'chat' | 'format'>('chat');

  const handleSend = () => {
    send({ message, fileCardData });
    setFileCardData(null);
  };

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
        disabled={mode === 'format'}
        className={`w-full max-w-3xl resize-none ${
          mode === 'chat' ? 'pb-14' : '!cursor-default'
        }`}
        value={message?.text || ''}
        onChange={handleMessageChange(setMessage)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
      />
      <div
        className={`absolute bottom-2 left-2 flex items-center gap-2 ${
          mode === 'chat' ? 'bottom-2' : 'bottom-4'
        }`}
      >
        <FileUploadButton
          fileCardData={fileCardData}
          setFileCardData={setFileCardData}
        />

        <ModeSelector mode={mode} setMode={setMode} />
      </div>
      <div
        className={`absolute bottom-2 right-2 ${
          mode === 'chat' ? 'bottom-2' : 'bottom-4'
        }`}
      >
        <AnimatePresence>
          {show && (
            <motion.div
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <Button
                disabled={
                  (!message || message.text.length === 0) &&
                  fileCardData === null
                }
                variant="outline"
                size="icon"
                onClick={handleSend}
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
