import { motion } from 'framer-motion';
import { ArrowDown, Github, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
                 bg-pink-50 dark:bg-[#0a0510] transition-colors duration-500"
    >
      {/* 🌸 BACKGROUND GLOW (PINK → PEACH) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-pink-50 dark:bg-[#0a0510]" />

        {/* kanan atas */}
        <div className="absolute right-[-150px] top-[-100px] w-[450px] h-[450px]
                        bg-pink-400/20 dark:bg-pink-500/10 blur-[140px] rounded-full" />

        {/* kiri bawah */}
        <div className="absolute left-[-150px] bottom-[-120px] w-[350px] h-[350px]
                        bg-orange-200/30 dark:bg-orange-300/10 blur-[130px] rounded-full" />

        {/* overlay */}
        <div className="absolute inset-0 bg-white/10 dark:bg-black/30" />
      </div>

      <ThreeScene />

      <div className="container mx-auto px-6 relative z-10 flex justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 max-w-4xl w-full">

          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-center"
          >
            <div className="relative group">

              <div className="absolute inset-0 rounded-[2rem] blur-2xl
                              bg-gradient-to-br from-pink-400/20 to-orange-200/20
                              opacity-40 group-hover:opacity-60 transition" />

              <div className="relative w-[240px] md:w-[280px] lg:w-[340px] aspect-[3/4]">
                <img
                  src="/fotosinta1.jpg"
                  alt="Raihana"
                  className="w-full h-full object-cover rounded-[2rem]
                             border border-pink-200 dark:border-pink-800 shadow-xl
                             hover:scale-[1.03] transition duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* TEXT */}
          <div className="text-center md:text-left max-w-md">

            <motion.span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium
                         bg-pink-500/10 text-pink-500 dark:text-pink-300 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ✨ Little space on the internet
            </motion.span>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-5 leading-tight
                         text-pink-900 dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Hi, I’m{' '}
              <span className="bg-gradient-to-r from-pink-400 via-rose-300 to-orange-300 bg-clip-text text-transparent">
                Maherra
              </span>
              <br />
              just exploring things ✨
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl mb-6
                         text-pink-700/80 dark:text-white/70"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Lagi belajar dan pelan-pelan masuk ke dunia{' '}
              <span className="text-pink-400">web development</span>.  
              Masih banyak yang belum aku tahu, tapi justru itu serunya 🚀
            </motion.p>

            {/* BUTTON */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Button
                size="lg"
                className="rounded-full px-8
                           bg-gradient-to-r from-pink-400 to-orange-300
                           hover:opacity-90 text-white shadow-lg"
                onClick={() => {
                  const el = document.querySelector('#projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                See what I made 🌸
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8
                           border-pink-300 text-pink-500 dark:text-pink-300
                           hover:bg-pink-500/10"
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Say hi 👋
              </Button>
            </motion.div>

            {/* SOCIAL */}
            <motion.div
              className="flex gap-3 mt-6 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {[
                { icon: Github, href: 'https://github.com/maherracoding/sinta-coding.git' },
                { icon: Youtube, href: 'https://youtube.com/' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="p-2.5 rounded-full border
                             border-pink-200 dark:border-pink-800
                             hover:border-pink-400 transition"
                  whileHover={{ scale: 1.1 }}
                >
                  <social.icon className="h-4 w-4 text-pink-500 dark:text-pink-300 hover:text-orange-300" />
                </motion.a>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      {/* SCROLL */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full
                   bg-pink-50 dark:bg-[#0a0510]
                   border border-pink-200 dark:border-pink-800
                   hover:border-pink-400 transition"
        whileHover={{ scale: 1.1 }}
      >
        <ArrowDown className="h-5 w-5 text-pink-400" />
      </motion.button>
    </section>
  );
}