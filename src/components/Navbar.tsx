import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [active, setActive] = useState('#home');
  const [position, setPosition] = useState({ left: 0, width: 0 });

  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const targetRef = useRef<string | null>(null);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Know Me', href: '#about' },
    { label: 'Subjects', href: '#skills' },
    { label: 'Favorites', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const updatePosition = (index: number) => {
    const el = itemRefs.current[index];
    if (!el) return;

    setPosition({
      left: el.offsetLeft,
      width: el.offsetWidth,
    });
  };

  useLayoutEffect(() => {
    const index = navItems.findIndex((i) => i.href === active);
    if (index !== -1) updatePosition(index);
  }, [active]);

  useEffect(() => {
    const handleResize = () => {
      const index = navItems.findIndex((i) => i.href === active);
      if (index !== -1) updatePosition(index);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [active]);

  // 🔥 FIX: SINGLE OBSERVER + BEST VISIBILITY
  useEffect(() => {
    const sections = navItems
      .map((item) => ({
        href: item.href,
        el: document.querySelector(item.href),
      }))
      .filter((s) => s.el) as { href: string; el: Element }[];

    const observer = new IntersectionObserver(
      (entries) => {
        // kalau lagi klik scroll → jangan ganggu
        if (targetRef.current) return;

        // cari section dengan visibility terbesar
        let maxRatio = 0;
        let currentSection: string | null = null;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            currentSection = `#${entry.target.id}`;
          }
        });

        if (currentSection && currentSection !== active) {
          const index = navItems.findIndex((i) => i.href === currentSection);
          if (index !== -1) {
            setActive(currentSection);
            updatePosition(index);
          }
        }
      },
      {
        threshold: [0.3, 0.5, 0.7], // 🔥 lebih stabil
      }
    );

    sections.forEach((s) => observer.observe(s.el));

    return () => observer.disconnect();
  }, [active]);

  const scrollToSection = (href: string, index: number) => {
    const el = document.querySelector(href);
    if (!el) return;

    targetRef.current = href;

    setActive(href);
    updatePosition(index);

    el.scrollIntoView({ behavior: 'smooth' });

    // 🔥 unlock setelah scroll selesai
    setTimeout(() => {
      targetRef.current = null;
    }, 800);
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">

      {/* 🌸 GLOW */}
      <div className="absolute inset-0 blur-2xl opacity-40 bg-gradient-to-r from-pink-400/30 via-rose-300/20 to-orange-200/30 rounded-full pointer-events-none" />

      <div
        className={`relative flex items-center gap-2 px-3 py-2 rounded-full border backdrop-blur-xl transition ${
          isDark
            ? 'bg-black/50 border-white/10'
            : 'bg-white/80 border-pink-200/40'
        } shadow-[0_0_35px_rgba(255,140,170,0.25)]`}
      >
        <div className="relative flex items-center">

          {/* CAPSULE */}
          <motion.div
            className="absolute top-0 bottom-0 rounded-full"
            animate={{
              left: position.left,
              width: position.width,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="
              w-full h-full rounded-full
              bg-gradient-to-r from-pink-400/30 via-rose-300/30 to-orange-200/30
              shadow-[0_0_25px_rgba(255,120,160,0.6),inset_0_0_12px_rgba(255,180,140,0.4)]
            " />
          </motion.div>

          {navItems.map((item, index) => (
            <button
              key={item.href}
              ref={(el) => (itemRefs.current[index] = el)}
              onClick={() => scrollToSection(item.href, index)}
              className={`relative px-3 py-1.5 text-sm font-medium transition-all duration-300 ${
                active === item.href
                  ? 'bg-gradient-to-r from-pink-400 via-rose-300 to-orange-300 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,120,160,0.9)]'
                  : isDark
                  ? 'text-white/70 hover:text-pink-300'
                  : 'text-black/70 hover:text-pink-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* divider */}
        <div className={`w-px h-4 mx-1 ${
          isDark ? 'bg-white/10' : 'bg-pink-200/40'
        }`} />

        {/* toggle */}
        <button
          onClick={toggleTheme}
          className={`p-1.5 rounded-full transition ${
            isDark ? 'hover:bg-white/10' : 'hover:bg-pink-100/50'
          }`}
        >
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <Sun className="w-4 h-4 text-orange-300" />
              </motion.div>
            ) : (
              <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <Moon className="w-4 h-4 text-pink-400" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}