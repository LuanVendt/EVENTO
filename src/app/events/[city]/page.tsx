"use client";

import H1 from "@/components/h1";
import { usePathname } from "next/navigation";

export default function EventsPage() {
  const pathName = usePathname();

  const city = pathName.split("/")[2];

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1>Events in {city}</H1>
    </main>
  );
}
