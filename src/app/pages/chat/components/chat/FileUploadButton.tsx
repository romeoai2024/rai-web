import { Button } from '@/components/ui/button';
import { Paperclip } from 'lucide-react';
import { useRef, useState } from 'react';

function FileUploadButton() {
  const [base64File, setBase64File] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      alert('Please upload a PDF or JPEG file only');
      return;
    }

    // Handle the file upload here
    const base64File = await convertFileToBase64(file);
    setBase64File(base64File);
    // You can add your file upload logic here
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
