import { useEffect, useState } from 'react';
import ChatTextArea from './textarea/TextArea';
import MessagesList from './messages/MessagsList';
import { Message } from '@/types/message';
import ChatWelcomeHeader from './textarea/WelcomeHeader';
import { useGetChats } from '@/hooks/use-get-chats';
import { Chat as ChatType } from '@/types/chat';
import { FileCardData } from './files/FileCard';

interface ChatProps {}

function Chat({}: ChatProps) {
  const [message, setMessage] = useState<Message>({
    text: '',
    isUser: true,
    timestamp: new Date(),
  });
  const [chat, setChat] = useState<ChatType | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [base64File, setBase64File] = useState<string | null>(null);
  const [fileCardData, setFileCardData] = useState<FileCardData | null>(null);

  const [chats, updateChats] = useGetChats();

  useEffect(() => {
    if (chats.length > 0) {
      setChat(chats[0]);
      setMessages(chats[0].messages);
    }
  }, [chats]);

  const createNewChat = (message: Message) => {
    setChat({
      messages: [message],
      timestamp: new Date(),
    });
  };

  const handleSendMessage = () => {
    if (!message.text.trim()) return;

    if (!chat) {
      createNewChat(message);
    }

    console.log('sending message', message);
    console.log('base64File', base64File);

    setMessages([...messages, message]);
    setMessage({
      text: '',
      isUser: false,
      timestamp: new Date(),
    });
    setBase64File(null);
    setFileCardData(null);
  };

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
          message={message}
          setMessage={setMessage}
          handleSendMessage={handleSendMessage}
          show={true}
        />
      </div>
    </div>
  );
}

export default Chat;
