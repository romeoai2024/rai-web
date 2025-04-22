import { AppSidebar } from '@/components/sidebar/Sidebar';
import { ThemeProvider } from '../components/theme-provider';
import { SidebarProvider } from '../components/ui/sidebar';
import ChatLayout from './pages/chat/ChatLayout';
import { useState } from 'react';
import { Chat } from '@/types/chat';

function App() {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  return (
    <ThemeProvider>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar setSelectedChat={setSelectedChat} />
        <div className="relative h-screen w-screen bg-background">
          {/* SVG noise filter definition with grayscale */}
          <svg className="hidden">
            <filter id="noise">
              {/* Create fractal noise first */}
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="2"
                result="noise"
              />

              {/* Convert the noise to grayscale with enhanced contrast */}
              <feColorMatrix
                in="noise"
                type="matrix"
                values="0.5 0.5 0.5 0 0
                    0.5 0.5 0.5 0 0
                    0.5 0.5 0.5 0 0
                    0 0 0 1 0"
              />
            </filter>
          </svg>

          {/* Noise overlay with increased opacity */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              filter: 'url(#noise)',
            }}
          ></div>

          <div className="relative z-10 h-full w-full">
            <ChatLayout />
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
