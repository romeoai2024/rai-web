import TopChatBarMenu from './top-chat-bar-menu';
import { SidebarTrigger } from './ui/sidebar';
import { UserCircle } from './user-circle';

function TopChatBar() {
  return (
    <div className="w-full flex items-center justify-between h-16 px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <TopChatBarMenu />
      </div>
      <UserCircle />
    </div>
  );
}

export default TopChatBar;
