import { FileCardData } from '@/app/pages/chat/components/chat/files/FileCard';
import { Message } from './message';

export type ChatType = {
  id: string;
  messages: (Message | FileCardData)[];
  timestamp: Date;
};
