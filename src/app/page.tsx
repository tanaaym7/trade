import Link from "next/link";
import Image from "next/image";
import { PanelsTopLeft } from "lucide-react";
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function HomePage() {
  return (
    <div className="flex gap-3 justify-center items-center h-screen">
      <Button variant="default" asChild>
        <Link href="/account">
          tradepeeps demo
          <ArrowRightIcon className="ml-2" />
        </Link>
      </Button>
      <ModeToggle />
    </div>
  );
}
