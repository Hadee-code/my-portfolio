import React, { useState, useCallback } from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";
import { ToastContext } from "./ToastContext";

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "success", duration = 3000) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    }
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {/* Toast floating container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-black/[0.1] backdrop-blur-xl shadow-[0_12px_32px_rgba(0,0,0,0.12)] text-[#111111] text-xs sm:text-sm font-medium animate-fadeIn transition-all"
          >
            {toast.type === "success" && (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            )}
            {toast.type === "error" && (
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            )}
            {toast.type === "info" && (
              <Info className="w-4 h-4 text-zinc-700 shrink-0" />
            )}
            <span className="flex-1 text-zinc-800">{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-zinc-400 hover:text-black p-1 rounded-lg transition cursor-pointer"
              aria-label="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export default ToastProvider;
