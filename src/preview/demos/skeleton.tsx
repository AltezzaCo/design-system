import { Skeleton } from '../../components/ui/skeleton';

export function SkeletonDemo() {
  return (
    <div className="max-w-xl space-y-4 rounded-2xl border bg-card p-6">
      <div className="flex items-center gap-4">
        <Skeleton className="h-11 w-11 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
      <Skeleton className="h-20 w-full" />
      <div className="flex justify-end">
        <Skeleton className="h-9 w-32" />
      </div>
    </div>
  );
}