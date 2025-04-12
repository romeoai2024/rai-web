import { User } from 'lucide-react';

export function UserCircle() {
  return (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700">
      <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
    </div>
  );
}
