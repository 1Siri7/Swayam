import { MessageCircle } from 'lucide-react';

const PHONE = '919963349988';
const TEXT = encodeURIComponent(
  "Hello Swayam Interior Designs, I'd love to discuss a project for my home.",
);

// whatsapp:// opens the installed desktop / mobile app directly.
// wa.me is the web fallback if the app isn't installed.
const APP_URL = `whatsapp://send?phone=${PHONE}&text=${TEXT}`;
const WEB_URL = `https://wa.me/${PHONE}?text=${TEXT}`;

export default function WhatsAppButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Try opening the native app; if it fails within 1.5 s, fall back to web
    const start = Date.now();
    window.location.href = APP_URL;
    const fallback = window.setTimeout(() => {
      if (Date.now() - start < 2000) {
        window.open(WEB_URL, '_blank', 'noopener,noreferrer');
      }
    }, 1500);
    // If the app opened, the page will blur — cancel the fallback
    const onBlur = () => {
      window.clearTimeout(fallback);
      window.removeEventListener('blur', onBlur);
    };
    window.addEventListener('blur', onBlur);
  };

  return (
    <a
      href={APP_URL}
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 md:right-8"
    >
      <MessageCircle size={26} />
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  );
}
