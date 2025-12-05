import content from "../content.json";

interface FeatureCardProps {
  title: string;
  description: string;
}

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <h3 className="relative text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="relative text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
            <span className="text-sm font-medium text-purple-300">✨ Fully Tested & Production Ready</span>
          </div>

          <h1
            id="main-heading"
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-gradient"
          >
            {content.hero.greeting}
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            {content.hero.subtitle}
          </p>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {content.hero.description}
          </p>
        </section>

        {/* Features Section */}
        <section className="w-full max-w-5xl mx-auto mb-20">
          <h2 className="text-2xl font-semibold text-center mb-10 text-gray-200">Why This App?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {content.features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/fabiandebrouwere-ltgm/ag-test-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              View on GitHub
            </a>
            <a
              href="#learn-more"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/40"
            >
              Learn More
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 border-t border-white/10">
        <p className="text-gray-500 text-sm">{content.footer.text}</p>
      </footer>
    </div>
  );
}
