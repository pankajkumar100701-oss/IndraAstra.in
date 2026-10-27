export default function Avatar({ name, size = "h-14 w-14 text-lg" }: { name: string; size?: string }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
  return (
    <div className={`relative grid ${size} place-items-center rounded-2xl bg-gradient-to-br from-bolt/30 via-volt/10 to-gold/20 font-semibold ring-1 ring-white/10`}>
      {initials}
    </div>
  );
}
