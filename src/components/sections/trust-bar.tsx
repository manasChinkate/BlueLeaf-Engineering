interface ClientLogo {
  id: number;
  name: string;
  file: string;
}

const PUBLIC_DEVELOPMENT_URL =
  process.env.PUBLIC_DEVELOPMENT_URL || "/images/client logos";

const clientLogos: ClientLogo[] = [
  { id: 1, name: "Client Partner 1", file: "logo-1.jpg" },
  { id: 2, name: "Client Partner 2", file: "logo-2.jpg" },
  { id: 3, name: "Client Partner 3", file: "logo-3.jpg" },
  { id: 4, name: "Client Partner 4", file: "logo-4.png" },
  { id: 5, name: "Client Partner 5", file: "logo-5.png" },
  { id: 6, name: "Client Partner 6", file: "logo-6.png" },
  { id: 7, name: "Client Partner 7", file: "logo-7.png" },
  { id: 8, name: "Client Partner 8", file: "logo-8.webp" },
  { id: 9, name: "Client Partner 9", file: "logo-9.jpg" },
  { id: 10, name: "Client Partner 10", file: "logo-10.png" },
  { id: 11, name: "Client Partner 11", file: "logo-11.png" },
  { id: 12, name: "Client Partner 12", file: "logo-12.jpg" },
  { id: 13, name: "Client Partner 13", file: "logo-13.jpg" },
  { id: 14, name: "Client Partner 14", file: "logo-14.jpg" },
  { id: 15, name: "Client Partner 15", file: "logo-15.png" },
  { id: 16, name: "Client Partner 16", file: "logo-16.png" },
  { id: 17, name: "Client Partner 17", file: "logo-17.jpg" },
  { id: 18, name: "Client Partner 18", file: "logo-18.png" },
  { id: 19, name: "Client Partner 19", file: "logo-19.webp" },
  { id: 20, name: "Client Partner 20", file: "logo-20.png" },
  { id: 21, name: "Client Partner 21", file: "logo-21.jpeg" },
  { id: 22, name: "Client Partner 22", file: "logo-22.png" },
  { id: 23, name: "Client Partner 23", file: "logo-23.png" },
  { id: 24, name: "Client Partner 24", file: "logo-24.png" },
  { id: 25, name: "Client Partner 25", file: "logo-25.png" },
  { id: 26, name: "Client Partner 26", file: "logo-26.jpg" },
];

export default function TrustBar() {
  const row1 = clientLogos.slice(0, 9);
  const row2 = clientLogos.slice(9, 18);
  const row3 = clientLogos.slice(18);

  const renderRow = (
    items: ClientLogo[],
    animationClass: string,
    duration: string
  ) => {
    // Repeat items for continuous infinite marquee loop
    const repeatedItems = [...items, ...items, ...items, ...items];
    return (
      <div className="relative overflow-hidden">
        <div
          className={`flex ${animationClass} w-max items-center`}
          style={{ animationDuration: duration }}
        >
          {repeatedItems.map((client, i) => {
            const logoSrc = `${PUBLIC_DEVELOPMENT_URL}/${client.file}`;
            return (
              <div
                key={`${client.id}-${i}`}
                className="flex-shrink-0 mx-3"
              >
                <div className="h-16 w-40 px-4 py-2.5 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex items-center justify-center group cursor-default select-none">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logoSrc}
                    alt={client.name}
                    className="max-h-10 w-auto max-w-[130px] object-contain filter grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-12 bg-slate-50 border-y border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest">
          Trusted by 100+ Leading Companies & Clients Across India
        </p>
      </div>

      {/* Infinite Scroll Container (3 Rows) */}
      <div className="relative flex flex-col gap-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {renderRow(row1, "animate-scroll-left", "40s")}
        {renderRow(row2, "animate-scroll-right", "35s")}
        {renderRow(row3, "animate-scroll-left", "45s")}
      </div>
    </section>
  );
}




