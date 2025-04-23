import { useState } from 'react';
import ChatTextArea from './textarea/TextArea';
import MessagesList from './messages/MessagsList';
import { Message } from '@/types/message';
import ChatWelcomeHeader from './textarea/WelcomeHeader';
import { FileCardData } from './files/FileCard';

interface ChatProps {
  send: ({
    message,
    fileCardData,
  }: {
    message: Message | null;
    fileCardData: FileCardData | null;
  }) => void;
  message: Message | null;
  setMessage: (message: Message) => void;
  messages: (Message | FileCardData)[];
  fileCardData: FileCardData | null;
  setFileCardData: (fileCardData: FileCardData | null) => void;
}

function Chat({
  send,
  message,
  setMessage,
  messages,
  fileCardData,
  setFileCardData,
}: ChatProps) {
  return (
    <div
      className={`flex flex-col flex-1 ${
        messages && messages.length > 0 ? 'justify-between' : 'justify-center'
      } p-4 max-w-3xl w-full mx-auto min-h-0`}
    >
      {messages && messages.length > 0 && <MessagesList messages={messages} />}

      <div className="flex flex-col gap-2 w-full max-w-3xl relative">
        {messages && messages.length === 0 && fileCardData === null && (
          <ChatWelcomeHeader />
        )}

        <ChatTextArea
          show={true}
          send={send}
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
