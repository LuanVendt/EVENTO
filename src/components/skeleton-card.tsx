import Skeleton from "./skeleton";

export default function SkeletonCard() {
  return (
    <div>
      <Skeleton className="h-12 w-12 rounded-full" />
      <Skeleton className="h-4 w-[250-px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  );
}
