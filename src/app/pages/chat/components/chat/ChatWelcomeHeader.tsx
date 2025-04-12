import { AnimatePresence, motion } from 'motion/react';

function ChatWelcomeHeader() {
  return (
    <AnimatePresence>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="text-2xl font-bold -top-10 absolute text-center w-full
        "
      >
        What can I help you with?
      </motion.p>
    </AnimatePresence>
  );
}

export default ChatWelcomeHeader;
