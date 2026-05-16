"use client";

import { useRef, useState } from "react";

const initialState = {
  status: "idle",
  message: "",
  errors: {},
};

const fieldClassName =
  "w-full rounded-[1.15rem] border border-navy-100 bg-white px-4 py-3.5 text-[15px] leading-6 text-navy-900 shadow-[0_14px_32px_-24px_rgba(9,20,40,0.42)] outline-none transition placeholder:text-slate-400 focus:border-gold-500 focus:ring-4 focus:ring-gold-500/15";

export function ContactInquiryForm({ phone, phoneDisplay }) {
  const formRef = useRef(null);
  const [submission, setSubmission] = useState(initialState);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    setSubmission({
      status: "submitting",
      message: "",
      errors: {},
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setSubmission({
          status: "error",
          message: data.message || "Your request could not be sent right now. Please try again in a moment.",
          errors: data.errors || {},
        });
        return;
      }

      formRef.current?.reset();
      setSubmission({
        status: "success",
        message: data.message || "We have received your request. We will respond shortly.",
        errors: {},
      });
    } catch {
      setSubmission({
        status: "error",
        message: "The form could not reach the booking desk right now. Please try again or call directly.",
        errors: {},
      });
    }
  }

  if (submission.status === "success") {
    return (
      <div className="mx-auto max-w-3xl rounded-[1.9rem] bg-white p-8 shadow-[0_28px_70px_-34px_rgba(9,20,40,0.28)] ring-1 ring-navy-100 sm:p-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-600">Message Received</p>
        <h2 className="mt-3 font-display text-3xl font-black leading-tight text-navy-900 sm:text-[2.35rem]">
          We have received your request.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
          {submission.message} If you need a faster response, call the booking desk directly.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setSubmission(initialState)}
            className="rounded-full bg-navy-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-navy-800"
          >
            Send another message
          </button>
          <a
            href={`tel:${phone}`}
            className="rounded-full border border-navy-200 px-6 py-3 text-sm font-semibold text-navy-900 no-underline transition hover:border-navy-300"
          >
            Call {phoneDisplay}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl rounded-[1.9rem] bg-white p-8 shadow-[0_28px_70px_-34px_rgba(9,20,40,0.28)] ring-1 ring-navy-100 sm:p-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-600">Quick Inquiry</p>
          <h2 className="mt-3 font-display text-3xl font-black leading-tight text-navy-900 sm:text-[2.35rem]">
            Send your number and your question.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Keep it short. The booking desk will review it and get back to you.
          </p>
        </div>

        <a
          href={`tel:${phone}`}
          className="rounded-full bg-navy-50 px-5 py-3 text-sm font-bold text-navy-900 no-underline ring-1 ring-navy-100 transition hover:bg-navy-100"
        >
          Call {phoneDisplay}
        </a>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
        <input type="text" name="website" tabIndex="-1" autoComplete="off" className="hidden" />

        <label className="block space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-navy-700">Client Number</span>
          <input
            className={`${fieldClassName} ${submission.errors.phone ? "border-red-300 bg-red-50/40 focus:border-red-400 focus:ring-red-400/10" : ""}`}
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="+92 3xx xxxxxxx"
            required
          />
          {submission.errors.phone ? <span className="text-sm text-red-600">{submission.errors.phone}</span> : null}
        </label>

        <label className="block space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-navy-700">Your Query</span>
          <textarea
            className={`${fieldClassName} min-h-36 resize-y ${submission.errors.message ? "border-red-300 bg-red-50/40 focus:border-red-400 focus:ring-red-400/10" : ""}`}
            name="message"
            placeholder="Write your question, route idea, or booking request here."
            required
          />
          {submission.errors.message ? <span className="text-sm text-red-600">{submission.errors.message}</span> : null}
        </label>

        <div aria-live="polite" className="min-h-6">
          {submission.status === "error" ? (
            <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {submission.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-3 border-t border-navy-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-slate-500">Your message goes directly to the booking desk email.</p>
          <button
            type="submit"
            disabled={submission.status === "submitting"}
            className="inline-flex items-center justify-center rounded-full bg-gold-500 px-7 py-3 text-sm font-bold text-navy-900 transition hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submission.status === "submitting" ? "Sending..." : "Send message"}
          </button>
        </div>
      </form>
    </div>
  );
}
