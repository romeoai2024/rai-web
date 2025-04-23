import {
  Sidebar,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import { useChats } from '@/hooks/use-chats';

export function AppSidebar() {
  const { chats } = useChats();

  const selectChat = (chatId: string) => {
    console.log(chatId);
    // Additional functionality can be added here
  };

  return (
    <Sidebar>
      <SidebarGroup>
        <SidebarGroupLabel>Chats</SidebarGroupLabel>
        <SidebarGroupContent>
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => selectChat(chat.id)}
              className="bg-transparent rounded-lg px-3 py-2 mb-1 shadow-xs
                         cursor-pointer transition-all duration-100 ease-in-out
                         hover:bg-background hover:text-accent-foreground
                          active:shadow-sm"
            >
              {chat.messages[0]
                ? 'text' in chat.messages[0]
                  ? chat.messages[0].text
                  : chat.messages[0].name
                : 'New Chat'}
            </div>
          ))}
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarFooter />
    </Sidebar>
  );
}
