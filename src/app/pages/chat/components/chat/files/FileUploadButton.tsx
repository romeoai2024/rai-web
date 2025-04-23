import { Button } from '@/components/ui/button';

import { Paperclip } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { FileCardData } from './FileCard';

function FileUploadButton({
  setFileCardData,
  fileCardData,
}: {
  setFileCardData: (fileCardData: FileCardData) => void;
  fileCardData: FileCardData | null;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Reset file input when file is removed
  useEffect(() => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [fileCardData]);

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      alert('Please upload a PDF or JPEG file only');
      return;
    }

    const base64File = await convertFileToBase64(file);

    setFileCardData({
      name: file.name,
      type: file.type,
      size: file.size,
      base64file: base64File,
    });
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('Failed to convert file to base64'));
        }
      };
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".pdf,.jpg,.jpeg"
        className="hidden"
      />
      <Button variant="outline" size="icon" onClick={handleFileUpload}>
        <Paperclip />
      </Button>
    </>
  );
}

export default FileUploadButton;
