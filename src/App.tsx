import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion, AnimatePresence } from "framer-motion";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/* ================= LOADING SCREEN ================= */

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden
                 bg-pink-50 dark:bg-[#0a0510]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* 🌸 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-pink-300/30 blur-[180px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-orange-200/30 blur-[160px] bottom-[-150px] right-[-150px]" />
      </div>

      {/* ✨ LOTTIE */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-60 h-60"
      >
        <DotLottieReact
          src="https://lottie.host/cc1a3d60-9f28-451b-9364-50065b456ce7/o7wKwFzB3t.lottie"
          loop
          autoplay
        />
      </motion.div>

      {/* ✨ TEXT */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-sm md:text-base
                   text-pink-500 dark:text-pink-300 tracking-wide"
      >
        sedang menyiapkan sesuatu yang cantik ✨
      </motion.p>

      {/* ✨ DOT LOADING */}
      <motion.div
        className="flex gap-2 mt-3"
        initial="hidden"
        animate="visible"
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-2 h-2 rounded-full bg-pink-400"
            variants={{
              hidden: { opacity: 0.3, y: 0 },
              visible: {
                opacity: [0.3, 1, 0.3],
                y: [0, -6, 0],
              },
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

/* ================= APP ================= */

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lebih smooth (bukan hard 3 detik doang)
    const minLoad = 2500; // minimal tampil
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minLoad);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* 🔥 TRANSITION */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" />
          ) : (
            <motion.div
              key="app"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </motion.div>
          )}
        </AnimatePresence>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;