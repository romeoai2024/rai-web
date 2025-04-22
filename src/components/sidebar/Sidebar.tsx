import {
  Sidebar,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import ChatsList, { Chat } from './ChatsList';

export function AppSidebar({
  setSelectedChat,
}: {
  setSelectedChat: (chat: Chat) => void;
}) {
  return (
    <Sidebar>
      <SidebarGroup>
        <SidebarGroupLabel>Chats</SidebarGroupLabel>
        <SidebarGroupContent>
          <ChatsList setSelectedChat={setSelectedChat} />
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarFooter />
    </Sidebar>
  );
}
