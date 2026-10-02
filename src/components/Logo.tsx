import { Sun, Zap, PanelTop } from 'lucide-react';

type LogoProps = {
  className?: string;
  variant?: 'light' | 'dark';
};

export default function Logo({ className = '', variant = 'dark' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy-900';
  const subColor = variant === 'light' ? 'text-gold-300' : 'text-gold-600';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-lg shadow-gold-500/20">
        <Sun className="w-5 h-5 text-navy-950" strokeWidth={2.5} />
        <PanelTop
          className="absolute w-6 h-6 text-navy-900/80"
          strokeWidth={2}
          style={{ transform: 'translate(2px, 3px)' }}
        />
        <Zap
          className="absolute w-3.5 h-3.5 text-white"
          strokeWidth={2.5}
          style={{ transform: 'translate(6px, -5px)' }}
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-display font-extrabold text-lg tracking-tight ${textColor}`}>
          Vihaan Spark
        </span>
        <span className={`font-display font-bold text-xs tracking-[0.2em] uppercase ${subColor}`}>
          Solar
        </span>
      </div>
    </div>
  );
}
