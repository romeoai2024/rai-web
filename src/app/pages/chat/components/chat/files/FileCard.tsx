import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FileIcon, Trash } from 'lucide-react';

export interface FileCardData {
  name: string | null | undefined;
  type: string | null | undefined;
  size: number | null | undefined;
}

function FileCard({
  file,
  handleRemoveFile,
}: {
  file: FileCardData;
  handleRemoveFile: () => void;
}) {
  return (
    <Card className="w-64 sm:w-96 group relative py-2">
      <div className="absolute top-2 right-2">
        <Button
          variant="outline"
          size="icon"
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={handleRemoveFile}
        >
          <Trash />
        </Button>
      </div>
      <CardHeader className="flex flex-row items-center gap-2 p-3">
        <div className="p-1.5 bg-secondary rounded-lg">
          <FileIcon className="h-5 w-5" />
        </div>
        <div className="flex flex-col gap-0.5 overflow-hidden">
          <CardTitle className="text-sm truncate">{file.name}</CardTitle>
          <CardDescription className="text-xs truncate">
            {file.type} • {((file.size || 0) / 1024 / 1024).toFixed(2)} MB
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}

export default FileCard;
