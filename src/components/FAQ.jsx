import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="terminal-panel py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="section-kicker">FAQ</p>
          <h2 className="section-title">Answers for students deciding if this is the right next step.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map(({ question, answer }, index) => (
            <div key={question} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-base font-medium text-slate-100">{question}</span>
                <ChevronDown className={`h-5 w-5 text-yellow-300 transition ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && <p className="px-5 pb-5 text-sm leading-7 text-slate-300">{answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
