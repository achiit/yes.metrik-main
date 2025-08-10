
export const KeyMetrics = () => {
  const metrics = [
    {
      number: "3,200+",
      label: "Invoices tokenized on-chain",
    },
    {
      number: "$42M+",
      label: "Liquidity committed by LPs",
    },
    {
      number: "1,100+",
      label: "Verified invoices with reputation",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12 text-center">
        {metrics.map((metric, index) => (
          <div key={index} className="space-y-3">
            <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent mb-3 font-space">
              {metric.number}
            </div>
            <div className="text-lg lg:text-xl text-gray-600 font-inter leading-relaxed max-w-xs mx-auto">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
