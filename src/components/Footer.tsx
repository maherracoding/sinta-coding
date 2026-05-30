import { motion } from 'framer-motion';
import { Github, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/maherracoding/sinta-coding.git',
      label: 'GitHub',
    },
    {
      icon: Youtube,
      href: 'https://www.youtube.com/',
      label: 'YouTube',
    },
  ];

  return (
    <footer
      className="
        relative overflow-hidden
        py-10 md:py-14
        bg-pink-50 dark:bg-[#0a0510]
        border-t border-pink-200/40 dark:border-white/10
        text-pink-900 dark:text-pink-100
      "
    >
      {/* 🌸 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-pink-300/25 blur-[140px] -top-40 -left-40" />
        <div className="absolute w-[400px] h-[400px] bg-orange-200/30 blur-[140px] bottom-[-150px] right-[-120px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              flex flex-wrap items-center gap-2 text-sm md:text-base
              text-pink-700 dark:text-pink-200
            "
          >
            <span>© {currentYear}</span>

            <span className="flex items-center gap-1">
              dirangkai dengan
              <Heart className="h-4 w-4 text-pink-400 fill-pink-400 animate-pulse" />
            </span>

            <span className="font-semibold bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent">
              Maherra Shyntta
            </span>

            <span className="opacity-70">— sedikit cerita dalam bentuk web ✨</span>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                aria-label={social.label}
                whileHover={{ scale: 1.15, rotate: 6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="
                  relative p-3 rounded-full
                  bg-white/70 dark:bg-white/5
                  backdrop-blur-md
                  border border-pink-200/40 dark:border-white/10
                  text-pink-500 dark:text-pink-200
                  hover:text-orange-300
                  transition
                "
              >
                <social.icon className="h-5 w-5" />

                {/* glow */}
                <div className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 bg-gradient-to-r from-pink-400/20 to-orange-200/20 blur-md transition" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            text-center mt-8 text-xs md:text-sm
            text-pink-500/70 dark:text-pink-300/60
          "
        >
          kadang pelan, kadang cepat — tapi tetap berjalan 🌷
        </motion.p>
      </div>
    </footer>
  );
}