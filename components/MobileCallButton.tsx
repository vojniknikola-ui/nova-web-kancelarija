export default function MobileCallButton() {
  return (
    <a
      href="tel:+38761111222"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:translate-y-0.5 md:hidden"
    >
      ☎ Pozovi
    </a>
  );
}
