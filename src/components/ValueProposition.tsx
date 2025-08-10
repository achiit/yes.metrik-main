import { AnimatedText } from "./AnimatedText";
import { RandomWaveText } from "./RandomWaveText";

export const ValueProposition = () => {
  const platformPhrases = ["#1 Platform", "Top-Rated", "Most Secure"];
  const yieldPhrases = ["Higher Yields", "Maximized APY", "Best Returns"];
  const accessPhrases = ["Instant Access", "No Lock-ups", "24/7 Liquidity"];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="text-center max-w-5xl mx-auto text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-space leading-tight">
        <p className="mb-2 sm:mb-3">
          <RandomWaveText text="Metrik is the " />
          <AnimatedText
            phrases={platformPhrases}
            className="bg-purple-100 rounded-2xl px-3 sm:px-4 py-1 text-purple-700"
          />
        </p>
        <p className="mb-2 sm:mb-3">
          <RandomWaveText text="for crypto lending— offering" />
        </p>
        <p className="mb-2 sm:mb-3">
          <AnimatedText
            phrases={yieldPhrases}
            className="bg-green-100 text-green-700 px-3 sm:px-4 py-1 rounded-2xl"
          />
          <RandomWaveText text=", " />
          <AnimatedText
            phrases={accessPhrases}
            className="bg-blue-100 text-blue-700 px-3 sm:px-4 py-1 rounded-2xl"
          />
        </p>
        <p className="mb-2 sm:mb-3">
          <RandomWaveText text="zero lock-up periods, and " />
        </p>
        <p>
          <RandomWaveText text="24/7 support." />
        </p>
      </div>
    </section>
  );
};
