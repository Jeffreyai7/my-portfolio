export default function Loading() {
  return (
    <div className="grid h-screen place-items-center" role="status" aria-label="Loading">
      <span className="grid h-10 w-10 animate-pulse place-items-center rounded-full bg-accent font-display text-xl italic text-accent-foreground">
        j
      </span>
    </div>
  );
}
