import { useState } from 'react';
import ChatTextArea from './textarea/TextArea';
import MessagesList from './messages/MessagsList';
import { Message } from '@/types/message';
import ChatWelcomeHeader from './textarea/WelcomeHeader';
import { FileCardData } from './files/FileCard';
import { ChatType } from '@/types/chat';

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
  base64File: string | null;
  setBase64File: (base64File: string | null) => void;
  fileCardData: FileCardData | null;
  setFileCardData: (fileCardData: FileCardData | null) => void;
  chat: ChatType | null;
}

function Chat({
  send,
  message,
  setMessage,
  messages,
  base64File,
  setBase64File,
  fileCardData,
  setFileCardData,
  chat,
}: ChatProps) {
  return (
    <div
      className={`flex flex-col flex-1 ${
        chat && chat.messages && chat.messages.length > 0
          ? 'justify-between'
          : 'justify-center'
      } p-4 max-w-3xl w-full mx-auto min-h-0`}
    >
      {chat && chat.messages && chat.messages.length > 0 && (
        <MessagesList messages={chat.messages} />
      )}

      <div className="flex flex-col gap-2 w-full max-w-3xl relative">
        {messages.length === 0 && base64File === null && <ChatWelcomeHeader />}
        <ChatTextArea
          base64File={base64File}
          setBase64File={setBase64File}
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
