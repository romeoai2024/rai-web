import ChatContainer from './components/chat/ChatContainer';
import TopChatBar from './components/top-bar/TopBar';

function ChatLayout() {
  return (
    <div className="flex flex-col h-full">
      <TopChatBar />
      <ChatContainer />
    </div>
  );
}

export default ChatLayout;
