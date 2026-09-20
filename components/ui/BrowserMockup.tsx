interface BrowserMockupProps {
  gradient?: string;
  className?: string;
}

export default function BrowserMockup({ gradient = "from-purple-600 to-blue-600", className = "" }: BrowserMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-3xl opacity-20 scale-95`} />

      {/* Browser Frame */}
      <div className="relative rounded-2xl border border-white/10 bg-[#0d1117] overflow-hidden shadow-2xl shadow-black/50">
        {/* Browser Chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/3">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 mx-4 h-6 rounded-md bg-white/5 border border-white/5 flex items-center px-3">
            <span className="text-xs text-slate-500 font-mono">novaedgedigital.com</span>
          </div>
          <div className="flex gap-1">
            <div className="w-4 h-4 rounded bg-white/5" />
            <div className="w-4 h-4 rounded bg-white/5" />
          </div>
        </div>

        {/* Mock Content */}
        <div className="p-4 space-y-4 bg-[#080c14]">
          {/* Navbar mock */}
          <div className="flex items-center justify-between px-2 py-2 rounded-lg bg-white/3 border border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-gradient-to-br from-purple-500 to-blue-500" />
              <div className="w-16 h-2 rounded bg-white/20" />
            </div>
            <div className="flex gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-1.5 rounded bg-white/15" />
              ))}
            </div>
            <div className="w-20 h-5 rounded-md bg-gradient-to-r from-purple-500/60 to-blue-500/60" />
          </div>

          {/* Hero mock */}
          <div className="rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-white/5 p-6 space-y-3">
            <div className="flex gap-2 mb-4">
              <div className="w-24 h-5 rounded-full bg-purple-500/30 border border-purple-500/20" />
            </div>
            <div className="w-4/5 h-4 rounded bg-white/25" />
            <div className="w-3/5 h-4 rounded bg-white/20" />
            <div className="w-2/3 h-3 rounded bg-white/10" />
            <div className="w-1/2 h-3 rounded bg-white/10" />
            <div className="flex gap-2 mt-4">
              <div className="w-24 h-7 rounded-lg bg-gradient-to-r from-purple-500/80 to-blue-500/80" />
              <div className="w-20 h-7 rounded-lg border border-white/20 bg-white/5" />
            </div>
          </div>

          {/* Cards mock */}
          <div className="grid grid-cols-3 gap-2">
            {[
              "from-purple-500/20 to-blue-500/20",
              "from-blue-500/20 to-cyan-500/20",
              "from-violet-500/20 to-purple-500/20",
            ].map((g, i) => (
              <div
                key={i}
                className={`rounded-lg bg-gradient-to-br ${g} border border-white/5 p-3 space-y-1.5`}
              >
                <div className="w-5 h-5 rounded bg-white/20" />
                <div className="w-full h-1.5 rounded bg-white/20" />
                <div className="w-3/4 h-1.5 rounded bg-white/10" />
              </div>
            ))}
          </div>

          {/* Stats bar mock */}
          <div className="grid grid-cols-4 gap-2">
            {["50+", "30+", "3+", "98%"].map((v, i) => (
              <div key={i} className="rounded-lg border border-white/5 bg-white/3 p-2 text-center">
                <div className="text-xs font-bold text-purple-400">{v}</div>
                <div className="w-full h-1 rounded mt-1 bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm rotate-12" />
      <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm -rotate-6" />
    </div>
  );
}
