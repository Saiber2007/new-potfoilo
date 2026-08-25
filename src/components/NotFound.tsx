import React from 'react';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

interface NotFoundProps {
  onReturn: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onReturn }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#07090e] font-mono text-center">
      <div className="max-w-md w-full bg-[#0b101b] border border-rose-500/40 rounded-2xl p-8 space-y-6 shadow-[0_0_30px_rgba(244,63,94,0.2)]">
        <div className="w-16 h-16 rounded-full bg-rose-950/80 border border-rose-500/50 flex items-center justify-center mx-auto text-rose-500 animate-pulse">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs text-rose-400 font-bold px-2 py-0.5 rounded bg-rose-950/60 border border-rose-800/40">
            HTTP_STATUS: 404 NOT_FOUND
          </span>
          <h1 className="text-3xl font-extrabold text-white font-heading">
            ACCESS DENIED
          </h1>
          <p className="text-slate-400 text-xs font-sans">
            The requested cybersecurity resource or page path does not exist in the Dixit Dabhi portfolio directory.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-[#07090e] border border-slate-800 text-[11px] text-slate-400 text-left">
          <code>&gt; ERROR_CODE: ERR_ROUTE_UNRESOLVED</code><br />
          <code>&gt; FIREWALL_ACTION: ISOLATED</code>
        </div>

        <button
          onClick={onReturn}
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(0,255,157,0.3)] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO MAIN TERMINAL</span>
        </button>
      </div>
    </div>
  );
};
