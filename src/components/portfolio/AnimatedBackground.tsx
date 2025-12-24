const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-pattern opacity-50" />
      
      {/* Animated flow lines - HVAC inspired */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Horizontal flow lines */}
        <g className="animate-flow" style={{ animationDuration: '25s' }}>
          <path
            d="M0 30% Q25% 25%, 50% 30% T100% 30% T150% 30% T200% 30%"
            fill="none"
            stroke="url(#flowGradient1)"
            strokeWidth="2"
          />
          <path
            d="M0 50% Q25% 55%, 50% 50% T100% 50% T150% 50% T200% 50%"
            fill="none"
            stroke="url(#flowGradient2)"
            strokeWidth="1.5"
          />
          <path
            d="M0 70% Q25% 65%, 50% 70% T100% 70% T150% 70% T200% 70%"
            fill="none"
            stroke="url(#flowGradient1)"
            strokeWidth="1"
          />
        </g>
      </svg>

      {/* Geometric shapes - technical feel */}
      <div className="absolute top-20 right-10 w-64 h-64 opacity-[0.03]">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-rotate-slow">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.3" className="text-primary" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.3" className="text-primary" />
        </svg>
      </div>

      <div className="absolute bottom-20 left-10 w-48 h-48 opacity-[0.03]">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '40s' }}>
          <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
          <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-accent/25 rounded-full animate-float" style={{ animationDelay: '3s' }} />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-accent/[0.02]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default AnimatedBackground;
