import ChatContainer from './components/chat/ChatContainer';

function ChatLayout() {
  return (
    <div className="flex flex-col h-full">
      {/* <TopChatBar /> */}
      <ChatContainer />
    </div>
  );
}

export default ChatLayout;
