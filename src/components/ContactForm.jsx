import { Loader2 } from "lucide-react";
import { useState } from "react";
import { contactOptions } from "../data/siteData.js";

const initialFormValues = {
  name: "",
  email: "",
  phone: "",
  packageInterest: "",
  message: "Tell us about your dream adventure...",
};

export function ContactForm() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [submissionState, setSubmissionState] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const updateField = (fieldName) => (event) => {
    setFormValues((currentValues) => ({
      ...currentValues,
      [fieldName]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmissionState("loading");
    setStatusMessage("");

    await new Promise((resolve) => {
      window.setTimeout(resolve, 700);
    });

    setSubmissionState("success");
    setStatusMessage("✓ Your inquiry has been sent! We'll get back to you soon.");
    setFormValues(initialFormValues);
  };

  return (
    <form
      id="contact-form"
      className="space-y-5 rounded-[2rem] border border-navy-100 bg-white/95 p-6 shadow-2xl shadow-navy-900/10 sm:p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full Name" htmlFor="c-name">
          <input
            id="c-name"
            type="text"
            required
            value={formValues.name}
            onChange={updateField("name")}
            className="w-full rounded-2xl border border-navy-100 bg-navy-50/40 px-4 py-3 outline-none transition focus:border-gold-400 focus:bg-white focus:ring-2 focus:ring-gold-300/40"
            placeholder="Your name"
          />
        </FormField>
        <FormField label="Email Address" htmlFor="c-email">
          <input
            id="c-email"
            type="email"
            required
            value={formValues.email}
            onChange={updateField("email")}
            className="w-full rounded-2xl border border-navy-100 bg-navy-50/40 px-4 py-3 outline-none transition focus:border-gold-400 focus:bg-white focus:ring-2 focus:ring-gold-300/40"
            placeholder="you@example.com"
          />
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Phone Number" htmlFor="c-phone">
          <input
            id="c-phone"
            type="tel"
            value={formValues.phone}
            onChange={updateField("phone")}
            className="w-full rounded-2xl border border-navy-100 bg-navy-50/40 px-4 py-3 outline-none transition focus:border-gold-400 focus:bg-white focus:ring-2 focus:ring-gold-300/40"
            placeholder="Your phone number"
          />
        </FormField>
        <FormField label="Interested Package" htmlFor="c-pkg">
          <select
            id="c-pkg"
            value={formValues.packageInterest}
            onChange={updateField("packageInterest")}
            className="w-full rounded-2xl border border-navy-100 bg-navy-50/40 px-4 py-3 outline-none transition focus:border-gold-400 focus:bg-white focus:ring-2 focus:ring-gold-300/40"
          >
            <option value="">Select a package</option>
            {contactOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </FormField>
      </div>

      <FormField label="Your Message" htmlFor="c-msg">
        <textarea
          id="c-msg"
          rows="4"
          required
          value={formValues.message}
          onChange={updateField("message")}
          className="w-full rounded-2xl border border-navy-100 bg-navy-50/40 px-4 py-3 outline-none transition focus:border-gold-400 focus:bg-white focus:ring-2 focus:ring-gold-300/40"
        />
      </FormField>

      <button
        type="submit"
        disabled={submissionState === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gold-500 py-4 font-bold text-navy-900 shadow-lg shadow-gold-500/20 transition-all hover:scale-[1.01] hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submissionState === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Send Inquiry"
        )}
      </button>

      {statusMessage ? (
        <div className="text-center text-sm font-medium text-green-600" role="status" aria-live="polite">
          {statusMessage}
        </div>
      ) : null}
    </form>
  );
}

function FormField({ label, htmlFor, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-bold text-navy-800">
        {label}
      </label>
      {children}
    </div>
  );
}
