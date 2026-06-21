import { Whatsapp } from "@/components/ui/BrandIcons";
import { whatsappLink } from "@/lib/site";

/** Floating WhatsApp chat button — fixed bottom-left on every page. */
export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 left-6 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-105"
    >
      {/* pulsing ring */}
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25D366] opacity-30 motion-reduce:hidden" />
      <Whatsapp className="relative size-7" />
      {/* tooltip (desktop) */}
      <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-lg bg-card px-3 py-1.5 text-sm font-medium text-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100 lg:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
