import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 lg:py-32 mt-16 md:mt-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="max-w-2xl text-center lg:text-left">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
            <img 
              src="/lovable-uploads/740fe202-f907-4e64-aaad-79c67441b4ae.png" 
              alt="Metrik Logo" 
              className="w-16 h-16 drop-shadow-2xl"
            />
            <div>
              <h3 className="text-3xl font-bold font-space bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                METRIK
              </h3>
              <p className="text-sm text-gray-600 font-inter">Crypto Lending & Borrowing Platform</p>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-space text-gray-900 mb-6 leading-[1.1] tracking-tight">
            Earn More Than{" "}
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent block md:inline">
              Traditional Banks
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed font-inter">
            Lend your crypto assets and earn up to{" "}
            <span className="font-bold text-green-600">15% APY</span> - 
            significantly higher returns than traditional banking.
            Start earning passive income today.
          </p>

          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
            <span className="px-4 py-2.5 bg-gradient-to-r from-orange-50 to-amber-100 text-orange-700 rounded-full text-sm font-medium font-inter border border-orange-200">
              High Yield Lending
            </span>
            <span className="px-4 py-2.5 bg-gradient-to-r from-orange-50 to-amber-100 text-orange-700 rounded-full text-sm font-medium font-inter border border-orange-200">
              Instant Borrowing
            </span>
            <span className="px-4 py-2.5 bg-gradient-to-r from-orange-50 to-amber-100 text-orange-700 rounded-full text-sm font-medium font-inter border border-orange-200">
              DeFi Yields
            </span>
            <span className="px-4 py-2.5 bg-gradient-to-r from-orange-50 to-amber-100 text-orange-700 rounded-full text-sm font-medium font-inter border border-orange-200">
              Secure Protocol
            </span>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:via-amber-600 hover:to-yellow-600 text-white px-8 py-4 text-lg font-inter font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto">
              Start Lending Now
            </Button>
            <div className="text-gray-600 font-inter text-center sm:text-left">
              <span className="block text-sm">No minimum deposit</span>
              <span className="block text-sm font-semibold text-green-600">Withdraw anytime</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-100">
            <div>
              <div className="text-2xl font-bold text-green-600 font-space">15%</div>
              <div className="text-sm text-gray-600 font-inter">Max APY</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600 font-space">$500M+</div>
              <div className="text-sm text-gray-600 font-inter">Total Lent</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-600 font-space">50K+</div>
              <div className="text-sm text-gray-600 font-inter">Active Users</div>
            </div>
          </div>
        </div>

        {/* Interactive Illustration */}
        <div className="relative lg:ml-8 w-full max-w-lg mx-auto">
          <div className="w-full h-80 sm:h-96 lg:h-[500px] bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-3xl flex items-center justify-center relative overflow-hidden border border-white/20 shadow-2xl">
            {/* Animated crypto symbols */}
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl shadow-lg flex items-center justify-center text-white font-bold text-lg animate-bounce">
              ₿
            </div>
            <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl shadow-lg flex items-center justify-center text-white font-bold text-2xl animate-pulse">
              Ξ
            </div>
            <div className="absolute top-1/2 right-2 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl shadow-lg flex items-center justify-center text-white font-bold animate-spin text-xs">
              SOL
            </div>
            
            {/* Central yield display */}
            <div className="w-60 h-60 sm:w-72 sm:h-72 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl flex flex-col items-center justify-center relative">
              <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-4 font-space">
                15.2%
              </div>
              <div className="text-lg text-gray-600 font-inter font-medium">Current APY</div>
              <div className="text-sm text-gray-500 font-inter">Updated in real-time</div>
              
              {/* Floating particles */}
              <div className="absolute -top-4 -left-4 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -right-4 w-3 h-3 bg-amber-400 rounded-full animate-ping delay-1000"></div>
              <div className="absolute top-1/4 -right-6 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/4 -left-6 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
