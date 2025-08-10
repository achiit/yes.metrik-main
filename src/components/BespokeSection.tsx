
export const BespokeSection = () => {
  const tech = [
    {
      title: "Smart Contracts",
      description: "Trustless execution for tokenization, verification, and settlement",
      color: "orange",
    },
    {
      title: "Role-Based Onboarding",
      description: "Tailored dashboards and actions per user type",
      color: "orange",
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time portfolio tracking, risk assessment, and liquidity stats",
      color: "orange",
    },
    {
      title: "Token Economy",
      description: "Governance, rewards, and staking for aligned incentives",
      color: "orange",
    },
  ];

  const steps = [
    { name: "Invoice Creation", desc: "Supplier tokenizes the invoice" },
    { name: "Verification", desc: "Verifier validates and stakes reputation" },
    { name: "Funding", desc: "LPs fund invoice tokens and earn yield" },
    { name: "Repayment", desc: "Buyer settles; funds flow back to LPs" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 font-space leading-tight">
            Technology & Infrastructure
          </h2>
          <div className="space-y-6">
            {tech.map((card, index) => (
              <div
                key={index}
                className={`bg-white p-6 lg:p-8 rounded-3xl shadow-lg border-l-4 hover:shadow-xl transition-shadow duration-300 border-l-orange-500 bg-orange-50/30`}
              >
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 font-space">
                  {card.title}
                </h3>
                <p className="text-gray-600 font-inter leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center font-space">
            How It Works
          </h3>
          <div className="grid grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg text-left hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-orange-600 font-space">{index + 1}</span>
                </div>
                <h4 className="font-bold text-gray-900 text-base font-space">{step.name}</h4>
                <p className="text-gray-600 text-sm font-inter">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
