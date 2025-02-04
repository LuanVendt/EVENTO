import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";

type EventsPageProps = {
  params: {
    city: string;
  };
};

type SearchEventsPageProps = EventsPageProps & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: EventsPageProps): Metadata {
  const city = capitalize(params.city);

  return {
    title: city === "all" ? "All Events" : `Events in ${city}`,
  };
}

export default async function EventsPage({
  params,
  searchParams,
}: SearchEventsPageProps) {
  const city = params.city;
  const page = Number(searchParams.page) || 1;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capitalize(city)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventsList city={city} page={page} />
      </Suspense>
    </main>
  );
}
