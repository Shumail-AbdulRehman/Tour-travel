import { ContactForm } from "../components/ContactForm.jsx";
import { contactDetails } from "../data/siteData.js";

export function ContactPage() {
  return (
    <section id="page-contact" className="relative overflow-hidden bg-navy-50 px-4 pb-20 pt-24">
      <div className="absolute left-[-10rem] top-8 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl"></div>
      <div className="absolute right-[-12rem] top-36 h-96 w-96 rounded-full bg-navy-300/25 blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-[13px] font-bold uppercase tracking-widest text-gold-600">Contact Us</p>
          <h1 className="font-display text-[34px] font-black leading-tight text-navy-900 sm:text-[44px]">
            Plan Your Trip or Vehicle Rental With Us
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-navy-700">
            Tell us where you want to go, what vehicle you need, and your preferred dates. Our team will respond with clear options and pricing.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="fade-up overflow-hidden rounded-[2rem] bg-navy-900 text-white shadow-2xl shadow-navy-900/20">
            <div className="border-b border-white/10 bg-white/5 p-7">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-400">Booking Desk</p>
              <h2 className="mt-3 font-display text-[28px] font-black leading-tight">Fast contact, clear answers.</h2>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Call for urgent bookings, send the form for detailed plans, or open the head office location for directions.
              </p>
            </div>

            <div className="space-y-4 p-5 sm:p-7">
              {contactDetails.map(({ label, icon: Icon, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-gold-400/50 hover:bg-white/[0.1]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[12px] font-bold uppercase tracking-[0.18em] text-white/45">
                      {external ? "Visit Office" : "Direct Contact"}
                    </span>
                    <span className="mt-1 block text-sm font-semibold leading-6 text-white transition group-hover:text-gold-200">
                      {label}
                    </span>
                  </span>
                </a>
              ))}

              <a
                href="#rent"
                className="mt-2 inline-flex rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-navy-900 transition hover:bg-gold-400"
              >
                View Rental Cars
              </a>
            </div>
          </aside>

          <div className="fade-up">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
