import { useState } from 'react';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { ArrowUp, AudioLines } from 'lucide-react';

interface MessageBubbleProps {
  message: string;
  isUser?: boolean;
}

function MessageBubble({ message, isUser = false }: MessageBubbleProps) {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-md rounded-lg px-4 py-2 ${
          isUser
            ? 'bg-blue-500 text-white ml-12'
            : 'bg-neutral-800 text-white mr-12'
        }`}
      >
        {message}
      </div>
    </div>
  );
}

function Conversation({ initialMessage }: { initialMessage: string }) {
  const mockConversation = [
    "Hey there! How's your day going so far? I've been super busy with work lately.",
    "I'm doing pretty well, thanks for asking! Just finished a big project yesterday so I'm feeling a bit relieved. How about you - anything exciting happening?",
    "That's awesome to hear about your project! I'm curious, what's your name? I don't think we've properly introduced ourselves yet.",
    "My name is John Doe. I've been working in software development for about 5 years now. Always nice to meet new people in the industry! What about you?",
    "Nice to meet you, John! That's really cool - I've actually been thinking about getting into coding myself. Have you always been interested in tech or did you switch from something else?",
    "I started in graphic design actually, but gradually moved toward the development side. Speaking of interests, I've been meaning to ask - do you have a favorite color? Mine changes all the time but right now I'm into deep greens.",
    "That's an interesting career path! I love hearing how people find their way into different fields. And about colors - I've always been drawn to blue, especially those deep ocean blues. There's something really calming about it. Do you have favorite foods too? I'm always looking for new recipes to try.",
    "Blue is a classic choice! Food-wise, I'm a huge pizza enthusiast - but not just any pizza. I make my own with sourdough crust that I've been perfecting for nearly two years. It's become a bit of an obsession! What kinds of foods do you enjoy?",
    "Wow, homemade sourdough pizza sounds incredible! I'm impressed by that level of dedication. I enjoy all kinds of cuisine, but I particularly love Thai food - something about the balance of flavors just works perfectly for me. When I'm not eating, I'm usually watching something. Any favorite movies or shows you've seen recently?",
    "Thai food is fantastic! I had an amazing Pad See Ew last weekend. As for movies, I'm a huge Christopher Nolan fan - The Dark Knight still tops my list after all these years. The storytelling and Heath Ledger's performance were just phenomenal. Have you seen it?",
    "Absolutely! The Dark Knight is a masterpiece. Ledger's Joker is probably one of the best villain performances of all time. I also enjoy thought-provoking sci-fi like Arrival and Interstellar. TV-wise, have you watched anything good lately? I just finished rewatching Breaking Bad for the third time.",
    "Breaking Bad is incredible! The character development of Walter White is some of the best writing I've ever seen. I'm currently watching Succession - the family dynamics are so twisted but fascinating. When I'm not watching shows, I try to stay active. Do you follow any sports or have athletic hobbies?",
    "I haven't started Succession yet, but it's definitely on my list! As for sports, I've been playing basketball since high school. Nothing professional, just pickup games on weekends with friends. It's a great way to stay active and socialize at the same time. I also try to hike whenever the weather permits. How about you?",
    "Basketball is great! I'm more of a casual fan but enjoy watching playoffs. I used to run track in college, but these days I'm more into rock climbing and yoga. They complement each other well - one for strength and problem-solving, the other for flexibility and mindfulness. Besides physical activities, do you have other hobbies you're passionate about?",
    "Rock climbing looks so challenging but rewarding! I've always wanted to try it. Outside of sports, reading has always been my main hobby. I go through phases with genres, but lately I've been diving into historical fiction and popular science books. There's something special about getting lost in a good book on a rainy afternoon. What about you - what do you enjoy when you have free time?",
    "Reading is wonderful! I bounce between non-fiction and fantasy myself. Beyond that, I've recently gotten into woodworking - started with small projects like cutting boards and now I'm working on building my own desk. There's something really satisfying about creating something tangible with your hands. Do you have any creative hobbies or things you've been wanting to learn?",
  ];

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([
    initialMessage,
    ...mockConversation,
  ]);

  const handleSendMessage = () => {
    setMessages([...messages, message]);
    setMessage('');
  };

  return (
    <div className="flex flex-col flex-1 justify-between p-4 max-w-3xl w-full mx-auto min-h-0">
      <div className="flex flex-1 overflow-hidden min-h-0 flex-col gap-2 overflow-y-auto">
        {messages.map((message, index) => (
          <MessageBubble
            isUser={index % 2 === 0}
            key={index}
            message={message}
          />
        ))}
      </div>
      {/* <div className="ml-auto">
        <MessageBubble message={initialMessage} />
      </div> */}
      <div className="flex flex-row items-end gap-2">
        <Textarea
          className="w-full resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
        />
        <Button disabled={message.length === 0} variant="outline" size="icon" onClick={handleSendMessage}>
          <ArrowUp />
        </Button>
      </div>
    </div>
  );
}

export default Conversation;
