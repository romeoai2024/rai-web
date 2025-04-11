import './App.css';
import { AppSidebar } from './components/app-sidebar';
import { ThemeProvider } from './components/theme-provider';
import { SidebarProvider } from './components/ui/sidebar';
import Chat from './pages/chat/Chat';

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <div className="relative h-screen w-screen bg-background">
          {/* SVG noise filter definition */}
          <svg className="hidden">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" />
            </filter>
          </svg>

          {/* Noise overlay */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              filter: 'url(#noise)',
            }}
          ></div>

          {/* Your Chat component */}
          <div className="relative z-10 h-full w-full">
            <Chat />
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
