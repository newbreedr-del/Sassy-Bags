const items = [
  'Free Shipping on R1,000+',
  'South African Made',
  'Premium Craftsmanship',
  'Book a Styling Session',
  'New Arrivals Weekly',
  'Proudly Founded by Nonhlanhla',
  'Secure Checkout',
  'Free Returns Within 14 Days',
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-[#EDE0C8] overflow-hidden" style={{ height: '34px' }}>
      <div
        className="flex items-center h-full animate-marquee whitespace-nowrap"
        style={{ width: 'max-content' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-7 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#1C1A16]"
          >
            <span
              className="inline-block w-1 h-1 rounded-full bg-[#8A7A5A] flex-shrink-0"
              aria-hidden="true"
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
