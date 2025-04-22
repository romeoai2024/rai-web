import { useGetChats } from '@/hooks/use-get-chats';
import { Chat } from '@/types/chat';
import { Message } from '@/types/message';

function ChatsList({
  setSelectedChat,
}: {
  setSelectedChat: (chat: Chat) => void;
}) {
  const [chats] = useGetChats();

  return (
    <>
      {chats.map((chat: Chat) => (
        <div onClick={() => setSelectedChat(chat)}>{chat.messages[0].text}</div>
      ))}
    </>
  );
}

export default ChatsList;
