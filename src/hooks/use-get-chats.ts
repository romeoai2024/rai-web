import { Chat } from '@/types/chat';
import { useEffect, useState } from 'react';

export function useGetChats(): [Chat[], (newChats: Chat[]) => void] {
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const storedChats = localStorage.getItem('chats');
    if (storedChats) {
      setChats(JSON.parse(storedChats));
    }
  }, []);

  const updateChats = (newChats: Chat[]) => {
    setChats(newChats);
    localStorage.setItem('chats', JSON.stringify(newChats));
  };

  return [chats, updateChats];
}
