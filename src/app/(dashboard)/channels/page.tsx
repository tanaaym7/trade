import { ContentLayout } from "@/components/admin-panel/content-layout";
import { ChannelsLayout } from "@/components/channels/channels-layout";

export default function ChannelsPage() {
  return (
    <ContentLayout title="Channels">
      <ChannelsLayout />
    </ContentLayout>
  );
}