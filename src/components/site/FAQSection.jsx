export function FAQSection({ items }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details key={item.question} className="rounded-[1.5rem] bg-white p-6 shadow-lg shadow-navy-900/5 ring-1 ring-navy-100">
          <summary className="cursor-pointer text-left text-lg font-black text-navy-900">{item.question}</summary>
          <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
