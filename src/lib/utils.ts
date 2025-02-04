import { EventoEvent } from "@prisma/client";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { EVENTS_URL } from "./constants";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function getEvents(city: string) {
  const response = await fetch(`${EVENTS_URL}?city=${city}`, {
    next: {
      revalidate: 300,
    },
  });

  // if (!response.ok) return <div>Failed to load events</div>;

  const events: EventoEvent[] = await response.json();

  return events;
}

export async function getEvent(slug: string) {
  const response = await fetch(`${EVENTS_URL}/${slug}`);

  const event: EventoEvent = await response.json();

  if (!response.ok) {
    throw new Error("Event not found");
  }

  return event;
}
