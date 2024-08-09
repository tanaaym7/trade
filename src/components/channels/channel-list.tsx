"use client";

import { useState } from "react";

type Channel = {
  id: string;
  name: string;
  subscribers: number;
  lastMessage: string;
  lastMessageTime: string;
};

export function ChannelList({ onSelectChannel }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data
  const topChannels: Channel[] = [
    {
      id: "1",
      name: "Channel A",
      subscribers: 250,
      lastMessage: "Hi, check out the new update!",
      lastMessageTime: "2:40 PM"
    },
    {
      id: "2",
      name: "Channel B",
      subscribers: 200,
      lastMessage: "Hi, check out the new update!",
      lastMessageTime: "2:40 PM"
    },
    {
      id: "3",
      name: "Channel C",
      subscribers: 250,
      lastMessage: "Hi, check out the new update!",
      lastMessageTime: "2:40 PM"
    },
    {
      id: "4",
      name: "Channel D",
      subscribers: 250,
      lastMessage: "Hi, check out the new update!",
      lastMessageTime: "2:40 PM"
    },
    {
      id: "5",
      name: "Channel E",
      subscribers: 250,
      lastMessage: "Hi, check out the new update!",
      lastMessageTime: "2:40 PM"
    }
    // ... add more channels
  ];

  const subscribedChannels: Channel[] = [
    {
      id: "1",
      name: "Channel 1",
      subscribers: 20,
      lastMessage: "Hi, check out the new update!",
      lastMessageTime: "2:40 PM"
    },
    {
      id: "2",
      name: "Channel 2",
      subscribers: 30,
      lastMessage: "Hi, check out the new update!",
      lastMessageTime: "2:40 PM"
    },
    {
      id: "3",
      name: "Channel 3",
      subscribers: 25,
      lastMessage: "Anyone up for a coding challenge?",
      lastMessageTime: "3:15 PM"
    },
    {
      id: "4",
      name: "Channel 4",
      subscribers: 40,
      lastMessage: "Don't forget about our meetup tomorrow!",
      lastMessageTime: "4:00 PM"
    },
    {
      id: "5",
      name: "Channel 5",
      subscribers: 15,
      lastMessage: "New tutorial video is up!",
      lastMessageTime: "5:30 PM"
    }
  ];

  const filteredTopChannels = topChannels.filter((channel) =>
    channel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSubscribedChannels = subscribedChannels.filter((channel) =>
    channel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 h-full flex flex-col">
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 mb-4 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h2 className="font-bold mb-2">Top Channels</h2>
      {filteredTopChannels.map((channel) => (
        <ChannelItem
          key={channel.id}
          channel={channel}
          onSelect={onSelectChannel}
        />
      ))}

      <h2 className="font-bold mt-4 mb-2">Subscribed</h2>
      {filteredSubscribedChannels.map((channel) => (
        <ChannelItem
          key={channel.id}
          channel={channel}
          onSelect={onSelectChannel}
        />
      ))}
    </div>
  );
}

function ChannelItem({ channel, onSelect }) {
  return (
    <div
      className="cursor-pointer hover:bg-gray-200 dark:hover:bg-secondary p-2 rounded shadow-md"
      onClick={() => onSelect(channel)}
    >
      <div className="flex justify-between">
        <span className="font-semibold">{channel.name}</span>
        <span className="text-sm text-gray-500">
          {channel.subscribers} subscribers
        </span>
      </div>
      <div className="text-sm text-gray-600">{channel.lastMessage}</div>
      <div className="text-xs text-gray-400 text-right">
        {channel.lastMessageTime}
      </div>
    </div>
  );
}
