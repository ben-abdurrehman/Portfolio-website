export default function PitchingTagline() {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-hidden">
        {/* Background pattern/texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        {/* Content container */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          
          {/* Top badges section */}
          <div className="mb-8">
            <p className="text-gray-300 text-lg mb-6">
              Fast • Accessible • SEO-Optimized
            </p>
            <p className="text-gray-400 text-base mb-8">
              Websites That Deliver Results.
            </p>
            
            {/* Performance badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  100
                </div>
                <span className="text-green-400 text-xs">Performance</span>
              </div>
              
              <div className="bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  100
                </div>
                <span className="text-green-400 text-xs">Accessibility</span>
              </div>
              
              <div className="bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  100
                </div>
                <span className="text-green-400 text-xs">Best Practices</span>
              </div>
              
              <div className="bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  100
                </div>
                <span className="text-green-400 text-xs">SEO</span>
              </div>
            </div>
          </div>
  
          {/* Main heading */}
          <div className="max-w-6xl mx-auto mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Websites & Apps
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mt-2">
              That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 relative">
                Convert
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
              </span>
            </h1>
          </div>
  
          {/* Subtitle */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              For Businesses that are ready to grow, from strategy
              <br />
              to development and launch. See how I can help.
            </p>
          </div>
  
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-slate-800/80 hover:bg-slate-700 border border-slate-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:border-slate-500">
              Get in touch
            </button>
            <button className="bg-transparent hover:bg-slate-800/50 border border-slate-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:border-slate-500">
              My process
            </button>
          </div>
        </div>
  
        {/* Additional background elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </section>
    );
  }