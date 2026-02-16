export default function ProviderLoading() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-pulse">
      <div className="h-5 w-32 rounded bg-slate-800" />
      <div className="card p-5 sm:p-7 flex flex-col sm:flex-row gap-4">
        <div className="h-16 w-16 rounded-2xl bg-slate-800 shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-24 rounded bg-slate-800" />
          <div className="h-8 w-48 rounded bg-slate-800" />
          <div className="h-4 w-full max-w-md rounded bg-slate-800" />
          <div className="h-4 w-3/4 rounded bg-slate-800" />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="card p-4 md:col-span-2 space-y-3">
          <div className="h-5 w-40 rounded bg-slate-800" />
          <div className="h-4 w-full rounded bg-slate-800" />
          <div className="h-4 w-full rounded bg-slate-800" />
          <div className="h-4 w-2/3 rounded bg-slate-800" />
        </div>
        <div className="card p-4 space-y-3">
          <div className="h-5 w-36 rounded bg-slate-800" />
          <ul className="space-y-2">
            {[1, 2, 3].map((i) => (
              <li key={i} className="h-4 w-full rounded bg-slate-800" />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
