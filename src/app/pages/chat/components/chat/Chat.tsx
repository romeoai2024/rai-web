import { useState } from 'react';
import ChatTextArea from './textarea/TextArea';
import MessagesList from './messages/MessagsList';
import { Message } from '@/types/message';
import ChatWelcomeHeader from './textarea/WelcomeHeader';
import { FileCardData } from './files/FileCard';

interface ChatProps {
  sendMessage: (message: Message) => void;
  message: Message | null;
  setMessage: (message: Message) => void;
  messages: (Message | FileCardData)[];
  base64File: string | null;
  setBase64File: (base64File: string | null) => void;
  fileCardData: FileCardData | null;
  setFileCardData: (fileCardData: FileCardData | null) => void;
}

function Chat({
  sendMessage,
  message,
  setMessage,
  messages,
  base64File,
  setBase64File,
  fileCardData,
  setFileCardData,
}: ChatProps) {
  return (
    <div
      className={`flex flex-col flex-1 ${
        messages.length === 0 ? 'justify-center' : 'justify-between'
      } p-4 max-w-3xl w-full mx-auto min-h-0`}
    >
      {messages.length > 0 && <MessagesList messages={messages} />}

      <div className="flex flex-col gap-2 w-full max-w-3xl relative">
        {messages.length === 0 && base64File === null && <ChatWelcomeHeader />}
        <ChatTextArea
          base64File={base64File}
          setBase64File={setBase64File}
          show={true}
          sendMessage={sendMessage}
          message={message}
          setMessage={setMessage}
          fileCardData={fileCardData}
          setFileCardData={setFileCardData}
        />
      </div>
    </div>
  );
}

export default Chat;
