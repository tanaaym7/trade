import Link from "next/link";

import PlaceholderContent from "@/components/demo/placeholder-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";

export default function ProfilePage() {
  return (
    <ContentLayout title="Profile">
      <PlaceholderContent title="Profile" />
    </ContentLayout>
  );
}
