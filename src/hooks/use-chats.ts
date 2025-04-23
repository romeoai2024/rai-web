import { ChatType } from '@/types/chat';
import { useEffect, useState } from 'react';

export function useChats() {
  const [chats, setChats] = useState<ChatType[]>([]);

  useEffect(() => {
    const storedChats = localStorage.getItem('chats');
    if (storedChats) {
      setChats(JSON.parse(storedChats));
    }
  }, []);

  const addChatToLocalStorage = (chat: ChatType) => {
    const storedChats = localStorage.getItem('chats');
    if (storedChats) {
      const parsedChats = JSON.parse(storedChats);
      parsedChats.push(chat);
      localStorage.setItem('chats', JSON.stringify(parsedChats));
    } else {
      localStorage.setItem('chats', JSON.stringify([chat]));
    }
  };

  const addChatsToLocalStorage = (chats: ChatType[]) => {
    localStorage.setItem('chats', JSON.stringify(chats));
    setChats(chats);
  };

  const updateChatInLocalStorage = (chat: ChatType) => {
    const storedChats = localStorage.getItem('chats');
    if (storedChats) {
      const parsedChats = JSON.parse(storedChats);
      const updatedChats = parsedChats.map((c: ChatType) =>
        c.id === chat.id ? chat : c,
      );
      localStorage.setItem('chats', JSON.stringify(updatedChats));
    }
  };

  return {
    chats,
    addChatToLocalStorage,
    addChatsToLocalStorage,
    updateChatInLocalStorage,
  };
}
