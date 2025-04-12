import Chat from './components/chat/Chat';
import TopChatBar from './components/top-bar/top-chat-bar';

function ChatLayout() {
  return (
    <div className="flex flex-col h-full">
      <TopChatBar />
      <Chat />
    </div>
  );
}

export default ChatLayout;
