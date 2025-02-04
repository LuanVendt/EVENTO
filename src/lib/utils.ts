import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function getEvents(city: string) {
  return await prisma.eventoEvent.findMany({
    where: { city: city === "all" ? undefined : capitalize(city) },
    orderBy: { date: "asc" },
  });
}

export async function getEvent(slug: string) {
  return await prisma.eventoEvent.findUnique({
    where: { slug },
  });
}
