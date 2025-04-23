import {
  Sidebar,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarGroup>
        <SidebarGroupLabel></SidebarGroupLabel>
        <SidebarGroupContent></SidebarGroupContent>
      </SidebarGroup>
      <SidebarFooter />
    </Sidebar>
  );
}
