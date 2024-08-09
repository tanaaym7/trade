"use client";
import { useState } from "react";
import { ChannelList } from "./channel-list";
import { ChannelChat } from "./channel-chat";

export function ChannelsLayout() {
  const [selectedChannel, setSelectedChannel] = useState(null);

  return (
    <div className="flex h-full">
      <div className="w-1/3 border-r overflow-y-auto h-full relative">
        <ChannelList onSelectChannel={setSelectedChannel} />
      </div>
      <div className="w-2/3 overflow-y-auto h-full">
        {selectedChannel ? (
          <ChannelChat channel={selectedChannel} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a channel to view messages
          </div>
        )}
      </div>
    </div>
  );
}
