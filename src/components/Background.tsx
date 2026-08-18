export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[color:var(--color-bg)]" />
      <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-[color:var(--color-violet)] opacity-20 blur-[120px] animate-blob" />
      <div className="absolute top-1/3 -right-40 w-[32rem] h-[32rem] rounded-full bg-[color:var(--color-pink)] opacity-15 blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] rounded-full bg-[color:var(--color-cyan)] opacity-10 blur-[120px] animate-blob animation-delay-4000" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  )
}
