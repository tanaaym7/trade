import { EllipsisVertical, Share2, Bookmark } from "lucide-react";

type Message = {
  id: string;
  content: string;
  timestamp: string;
};

type ChannelChatProps = {
  channel: {
    id: string;
    name: string;
  };
};

export function ChannelChat({ channel }: ChannelChatProps) {
  // Mock data - replace with actual API call
  const messages: Message[] = [
    {
      id: "1",
      content:
        "Channel 1 content has been updated to include more detailed information. This message now contains at least twenty words to meet the new requirements for message length in our system. Hello everyone! How are you doing today? I hope you're all having a productive week so far. Don't forget to take breaks and stay hydrated throughout the day. Let's make it a great one!",
      timestamp: "11/08/2024"
    },
    {
      id: "2",
      content:
        "Hello everyone! How are you doing today? I hope you're all having a productive week so far. Don't forget to take breaks and stay hydrated throughout the day. Let's make it a great one!",
      timestamp: "11/09/2024"
    },
    {
      id: "3",
      content:
        "I just finished working on the new feature. Can someone review it? I've implemented all the requested functionality and added some additional error handling. Please let me know if you need any clarification or have suggestions for improvements.",
      timestamp: "11/10/2024"
    },
    {
      id: "4",
      content:
        "Great job on the presentation yesterday! Your delivery was clear and concise, and the visuals were very impressive. The client seemed genuinely excited about our proposed solutions. Let's build on this momentum for future projects.",
      timestamp: "11/11/2024"
    },
    {
      id: "5",
      content:
        "Don't forget about our team meeting at 3 PM. We'll be discussing the upcoming project timeline, resource allocation, and addressing any concerns or roadblocks. Please come prepared with your progress updates and any questions you may have.",
      timestamp: "11/12/2024"
    },
    {
      id: "6",
      content:
        "Has anyone seen the latest project requirements? I'm having trouble locating the most recent version in our shared drive. If you have access to it, could you please share the link or send it my way?",
      timestamp: "11/13/2024"
    },
    {
      id: "7",
      content:
        "I'm having trouble with the database connection. Any ideas? I've tried restarting the server and checking the configuration files, but I'm still getting timeout errors. If anyone has experienced similar issues, I'd appreciate some guidance.",
      timestamp: "11/14/2024"
    },
    {
      id: "8",
      content:
        "Remember to update your timesheets by end of day. Accurate time tracking is crucial for project billing and resource management. If you have any questions about how to categorize your hours, please don't hesitate to ask.",
      timestamp: "11/15/2024"
    },
    {
      id: "9",
      content:
        "The client loved our proposal! Great work, team! They were particularly impressed with our innovative approach to solving their pain points. Let's schedule a follow-up meeting to discuss next steps and start planning the implementation phase.",
      timestamp: "11/16/2024"
    },
    {
      id: "10",
      content:
        "Who's up for lunch? I'm thinking pizza. There's a new place down the street that offers a great lunch special with a variety of toppings. It could be a nice opportunity for us to take a break and chat informally.",
      timestamp: "11/17/2024"
    }
  ];

  return (
    <div className="py-4 px-8">
      <div className="flex justify-between items-center mb-4">
        <button className="text-blue-500">← All Channels</button>
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-bold text-xl">{channel.name}</h2>
          <span className="text-xs text-muted-foreground">
            last active: 2hrs ago
          </span>
        </div>
        <EllipsisVertical />
      </div>
      {messages.map((message) => (
        <div key={message.id} className="mb-4 space-y-2">
          <span className="text-sm text-gray-500">{message.timestamp}</span>
          <div className="py-2 px-3 bg-secondary rounded shadow">
            <p className="text-[15px]">{message.content}</p>
          </div>
          <div className="flex justify-between items-center">
            <button className="text-blue-500 text-sm mr-2 flex items-center gap-1">
              Share
              <Share2 size={20} />
            </button>
            <button className="text-blue-500 text-sm flex items-center gap-1">
              Bookmark
              <Bookmark size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
