export default function TrustBar() {
  const clients = [
    "Tata Power",
    "Airtel",
    "Indian Oil",
    "L&T",
    "Reliance",
    "HDFC Bank",
    "Mahindra",
    "Godrej",
    "Adani",
    "JSW Steel",
    "Hindustan Unilever",
    "Bajaj",
  ];

  return (
    <section className="relative py-12 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest">
          Trusted by 100+ Clients Across India
        </p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        <div className="flex animate-scroll-left w-max">
          {/* Duplicate the list for seamless loop */}
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex-shrink-0 mx-6 sm:mx-10"
            >
              <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 cursor-default select-none">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white font-bold text-sm font-outfit">
                  {client.charAt(0)}
                </div>
                <span className="text-sm font-semibold text-slate-600 whitespace-nowrap">
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
