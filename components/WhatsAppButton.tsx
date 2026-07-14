import { CONTACT } from "@/lib/contact";

/**
 * WhatsApp CTA — same treatment as the aipathdiginext.com footer button.
 * `full` renders the two-line "Fastest response / Chat with Us" version.
 */
export default function WhatsAppButton({
  className = "",
  full = true,
}: {
  className?: string;
  full?: boolean;
}) {
  return (
    <a
      href={CONTACT.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with us on WhatsApp — ${CONTACT.whatsapp.display}`}
      className={`inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-4 rounded-xl shadow-lg shadow-[#25D366]/25 transition-all hover:scale-[1.03] shrink-0 ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className={full ? "w-8 h-8 shrink-0" : "w-5 h-5 shrink-0"} aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.892c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.9 11.9 0 005.71 1.454h.005c6.582 0 11.943-5.359 11.945-11.892a11.8 11.8 0 00-3.48-8.463z" />
      </svg>
      {full ? (
        <div className="text-left leading-tight">
          <div className="text-xs font-normal text-white/90">Fastest response</div>
          <div className="text-lg">Chat with Us</div>
        </div>
      ) : (
        <span>WhatsApp {CONTACT.whatsapp.display}</span>
      )}
    </a>
  );
}
