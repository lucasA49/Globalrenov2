import { ChevronDown } from "lucide-react";
import { FAQ } from "../lib/business";

// <details>/<summary> : les réponses restent dans le HTML même repliées,
// donc lisibles par Google et les robots IA sans JavaScript.
export default function FaqSection() {
  return (
    <section id="faq" className="bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center">
          Questions fréquentes
        </h2>
        <p className="mt-4 text-center text-gray-600">
          Isolation, façade, peinture à Cholet et dans le Maine-et-Loire : nos réponses.
        </p>

        <div className="mt-10 space-y-4">
          {FAQ.map(({ q, a }) => (
            <details
              key={q}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-gray-900">
                <h3 className="text-base md:text-lg">{q}</h3>
                <ChevronDown className="w-5 h-5 shrink-0 text-[#4F7A28] transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
