const whatsappMessage = encodeURIComponent("Hello Abid Tour & Travels, I want to plan a tour.");

export function WhatsAppButton({ phone }) {
  return (
    <a
      href={`https://wa.me/${phone}?text=${whatsappMessage}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Abid Tour & Travels on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-[3.9rem] w-[3.9rem] items-center justify-center rounded-full bg-[#25D366] p-[0.62rem] text-white shadow-2xl shadow-navy-900/25 transition hover:scale-105 hover:bg-[#20bd5a]"
    >
      <svg className="h-full w-full" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor">
        <path d="M16.04 3C8.88 3 3.07 8.75 3.07 15.84c0 2.27.6 4.49 1.75 6.43L3 29l6.92-1.8a13.05 13.05 0 0 0 6.12 1.53C23.2 28.73 29 22.97 29 15.88S23.2 3 16.04 3Zm0 23.56c-1.96 0-3.88-.52-5.55-1.49l-.4-.23-4.1 1.06 1.1-3.95-.26-.41a10.6 10.6 0 0 1-1.61-5.7c0-5.88 4.85-10.67 10.82-10.67 5.96 0 10.81 4.79 10.81 10.67 0 5.9-4.85 10.72-10.81 10.72Zm5.94-7.98c-.32-.16-1.9-.93-2.2-1.04-.3-.1-.52-.16-.74.16-.21.32-.85 1.04-1.04 1.25-.19.21-.38.24-.7.08-.32-.16-1.36-.49-2.59-1.57-.96-.84-1.6-1.88-1.79-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.49-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.73-1.74-1-2.39-.26-.63-.53-.54-.73-.55h-.63c-.21 0-.56.08-.85.4-.3.32-1.12 1.09-1.12 2.66 0 1.56 1.15 3.07 1.31 3.29.16.21 2.27 3.43 5.5 4.8.77.33 1.37.53 1.84.68.77.24 1.48.21 2.04.13.62-.09 1.9-.77 2.17-1.51.27-.75.27-1.39.19-1.52-.08-.14-.29-.22-.61-.38Z" />
      </svg>
    </a>
  );
}
