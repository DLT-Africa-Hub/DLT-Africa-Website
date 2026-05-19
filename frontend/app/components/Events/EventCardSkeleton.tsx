export default function EventCardSkeleton({ featured = false }: { featured?: boolean }) {
  if (featured) {
    return (
      <div className="animate-pulse overflow-hidden rounded-3xl border border-[#E4E8EC]/60 bg-white shadow-lg lg:grid lg:grid-cols-2">
        <div className="aspect-[4/3] bg-[#E8EEE4] lg:aspect-auto lg:min-h-[360px]" />
        <div className="space-y-4 p-8">
          <div className="h-6 w-24 rounded-full bg-[#E8EEE4]" />
          <div className="h-10 w-3/4 rounded-lg bg-[#E8EEE4]" />
          <div className="h-16 w-full rounded-lg bg-[#E8EEE4]" />
          <div className="space-y-2">
            <div className="h-4 w-full rounded bg-[#E8EEE4]" />
            <div className="h-4 w-2/3 rounded bg-[#E8EEE4]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border border-[#E4E8EC]/60 bg-white">
      <div className="aspect-[4/3] bg-[#E8EEE4]" />
      <div className="space-y-3 p-5">
        <div className="flex gap-2">
          <div className="h-6 w-16 rounded-full bg-[#E8EEE4]" />
          <div className="h-6 w-20 rounded-full bg-[#E8EEE4]" />
        </div>
        <div className="h-7 w-4/5 rounded-lg bg-[#E8EEE4]" />
        <div className="h-12 w-full rounded-lg bg-[#E8EEE4]" />
        <div className="h-4 w-full rounded bg-[#E8EEE4]" />
        <div className="h-10 w-full rounded-xl bg-[#E8EEE4]" />
      </div>
    </div>
  );
}
