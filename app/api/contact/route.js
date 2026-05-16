import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { business } from "../../../src/lib/site-content.js";

const recipientEmail = process.env.CONTACT_TO || business.email;
const requiredFields = ["phone", "message"];

function normalize(value) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: {
      user,
      pass,
    },
  });
}

function validate(fields) {
  const errors = {};

  for (const field of requiredFields) {
    if (!fields[field]) {
      errors[field] = "This field is required.";
    }
  }

  if (fields.phone && fields.phone.length < 7) {
    errors.phone = "Please enter a valid phone or WhatsApp number.";
  }

  if (fields.message && fields.message.length < 8) {
    errors.message = "Please write a short query.";
  }

  return errors;
}

function buildEmailMarkup(fields) {
  const items = [
    ["Phone / WhatsApp", fields.phone],
    ["Query", fields.message],
  ];

  const text = items.map(([label, value]) => `${label}: ${value}`).join("\n");
  const htmlRows = items
    .map(
      ([label, value]) =>
        `<tr><td style="padding:10px 14px;font-weight:700;border-bottom:1px solid #d9e3f0;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:10px 14px;border-bottom:1px solid #d9e3f0;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  const html = `
    <div style="background:#f4f7fc;padding:32px;font-family:Arial,sans-serif;color:#10203f;">
      <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #d9e3f0;border-radius:22px;overflow:hidden;">
        <div style="padding:24px 28px;background:#10203f;color:#ffffff;">
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#d9ab2f;">New Contact Inquiry</p>
          <h1 style="margin:0;font-size:28px;line-height:1.2;">A new client inquiry has arrived.</h1>
        </div>
        <div style="padding:24px 28px;">
          <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.6;">
            <tbody>${htmlRows}</tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return { text, html };
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (normalize(body.website)) {
      return NextResponse.json({ ok: true, message: "We have received your request. We will respond shortly." });
    }

    const fields = {
      phone: normalize(body.phone),
      message: normalize(body.message),
    };

    const errors = validate(fields);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please correct the highlighted fields and send the request again.",
          errors,
        },
        { status: 400 },
      );
    }

    const transporter = getTransporter();

    if (!transporter) {
      return NextResponse.json(
        {
          ok: false,
          message: "The contact form is not configured yet. Add the SMTP settings, then try again.",
        },
        { status: 500 },
      );
    }

    const { text, html } = buildEmailMarkup(fields);
    const from = process.env.SMTP_FROM || process.env.SMTP_USER;

    await transporter.sendMail({
      from,
      to: recipientEmail,
      subject: `New trip inquiry from ${fields.phone}`,
      text,
      html,
    });

    return NextResponse.json({
      ok: true,
      message: "We have received your request and will respond shortly.",
    });
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "The form could not be submitted right now. Please try again in a moment.",
      },
      { status: 500 },
    );
  }
}
