import { Message } from '@/types/message';
import { useEffect, useState } from 'react';
import Chat from './Chat';
import { FileCardData } from './files/FileCard';
import { v4 as uuidv4 } from 'uuid';
import { ChatType } from '@/types/chat';
import { useChats } from '@/hooks/use-chats';

function ChatContainer() {
  const [chats, setChats] = useState<ChatType[]>([]);
  const [chat, setChat] = useState<ChatType | null>(null);
  const [messages, setMessages] = useState<(Message | FileCardData)[]>([]);
  const [message, setMessage] = useState<Message | null>(null);
  const [base64File, setBase64File] = useState<string | null>(null);
  const [fileCardData, setFileCardData] = useState<FileCardData | null>(null);
  const {
    addChatToLocalStorage,
    addChatsToLocalStorage,
    updateChatInLocalStorage,
  } = useChats();

  useEffect(() => {
    if (!chat) {
      createNewChat();
    }
  }, []);

  // get chats from local storage
  // create new chat if new message is sent
  // add message or file card data to current chat if sent
  // send message to server
  // send file to server

  const getChats = () => {
    const chats = localStorage.getItem('chats');
    if (chats) {
      setChats(JSON.parse(chats));
    }
  };

  const createNewChat = () => {
    console.log('createNewChat');
    const newChat: ChatType = {
      id: uuidv4(),
      messages: [],
      timestamp: new Date(),
    };

    setChat(newChat);
    addChatToLocalStorage(newChat);
  };

  // const addChatToLocalStorage = (chat: ChatType) => {
  //   setChats([...chats, chat]);
  //   localStorage.setItem('chats', JSON.stringify(chats));
  // };

  // const updateChatInLocalStorage = (chat: ChatType) => {
  //   setChats(chats.map((c) => (c.id === chat.id ? chat : c)));
  //   localStorage.setItem('chats', JSON.stringify(chats));
  // };

  const send = ({
    message,
    fileCardData,
  }: {
    message: Message | null;
    fileCardData: FileCardData | null;
  }) => {
    appendChatItemToChat(
      [message, fileCardData].filter((item) => item !== null) as (
        | Message
        | FileCardData
      )[],
    );

    // TODO: send message to server
    setMessage(null);
    setFileCardData(null);
  };

  const appendChatItemToChat = (chatItems: (Message | FileCardData)[]) => {
    if (!chat) return;

    setChat({
      ...chat,
      messages: [...chat.messages, ...chatItems],
    });
    updateChatInLocalStorage(chat);
  };

  return (
    <Chat
      send={send}
      message={message}
      setMessage={setMessage}
      messages={messages}
      base64File={base64File}
      setBase64File={setBase64File}
      fileCardData={fileCardData}
      setFileCardData={setFileCardData}
      chat={chat}
    />
  );
}

export default ChatContainer;
