import { EVENTS_URL } from "@/lib/constants";
import { EventoEvent } from "@/lib/types";
import EventCard from "./event-card";

type EventsListProps = {
  city: string;
};

export default async function EventsList({ city }: { city: string }) {
  const response = await fetch(`${EVENTS_URL}?city=${city}`, {
    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) return <div>Failed to load events</div>;

  const events: EventoEvent[] = await response.json();

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-8 justify-center">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
