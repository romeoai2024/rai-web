import { Badge } from '@/components/ui/badge';

function ModeSelector({
  mode,
  setMode,
}: {
  mode: 'chat' | 'format';
  setMode: (mode: 'chat' | 'format') => void;
}) {
  return (
    <>
      <Badge
        variant="outline"
        onClick={() => setMode('chat')}
        className={`
            cursor-pointer transition-colors
            ${
              mode === 'chat'
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'hover:bg-primary/10'
            }
          `}
      >
        Chat
      </Badge>
      <Badge
        variant="outline"
        onClick={() => setMode('format')}
        className={`
            cursor-pointer transition-colors
            ${
              mode === 'format'
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'hover:bg-primary/10'
            }
          `}
      >
        Format
      </Badge>
    </>
  );
}

export default ModeSelector;
