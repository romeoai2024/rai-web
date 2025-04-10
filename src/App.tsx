import './App.css';
import { AppSidebar } from './components/app-sidebar';
import { ThemeProvider } from './components/theme-provider';
import { SidebarProvider } from './components/ui/sidebar';
import Chat from './pages/Chat';

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <div className="h-screen w-screen bg-background">
          <Chat />
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
