export default function Header() {
  return (
    <header className="bg-[#111] px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold tracking-widest text-white">
          DEGEN
        </h1>

        {/* Sign in button */}
        <button className="rounded-xl bg-[#1a1a1a] px-5 py-2 text-sm font-medium text-white shadow hover:bg-[#222] transition">
          Sign in
        </button>
      </div>
    </header>
  );
}
