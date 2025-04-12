import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SidebarTrigger } from '@/components/ui/sidebar';

function TopChatBar() {
  return (
    <div className="w-full flex items-center justify-between h-16 px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        {/* <TopChatBarMenu /> */}
      </div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default TopChatBar;
