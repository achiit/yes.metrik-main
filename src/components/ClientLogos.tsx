import "./scrolling-logos.css";

export const ClientLogos = () => {
  const logos = [
    "Aave",
    "Compound",
    "MakerDAO",
    "Uniswap",
    "Ethereum",
    "Synthetix",
    "Chainlink",
  ];

  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <p className="text-sm text-gray-500 font-inter font-medium">
          Trusted by leading DeFi protocols
        </p>
      </div>
      <div className="scrolling-logos-container">
        <div className="scrolling-logos whitespace-nowrap">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="inline-block mx-6 sm:mx-8 text-base sm:text-lg lg:text-xl text-gray-500 font-semibold font-space tracking-wide opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
