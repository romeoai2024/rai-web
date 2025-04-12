import { useState } from 'react';
import { Badge } from '@/components/ui/badge';

function ModeSelector() {
  const [chatOrFormat, setChatOrFormat] = useState<'chat' | 'format'>('chat');

  return (
    <>
      <Badge
        variant="outline"
        onClick={() => setChatOrFormat('chat')}
        className={`
            cursor-pointer transition-colors
            ${
              chatOrFormat === 'chat'
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'hover:bg-primary/10'
            }
          `}
      >
        Chat
      </Badge>
      <Badge
        variant="outline"
        onClick={() => setChatOrFormat('format')}
        className={`
            cursor-pointer transition-colors
            ${
              chatOrFormat === 'format'
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
