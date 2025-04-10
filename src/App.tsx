import './App.css';
import { ThemeProvider } from './components/theme-provider';
import Chat from './pages/Chat';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-svh w-screen bg-background">
        <Chat />
      </div>
    </ThemeProvider>
  );
}

export default App;
