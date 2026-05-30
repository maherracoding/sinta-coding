import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Heart, Palette, Music } from 'lucide-react';
import { useState } from 'react';

export default function AboutSection() {
  const [open, setOpen] = useState(0);

  const bioAccordion = [
    {
      title: '👩‍💻 Tentang Aku',
      content:
        'Hai! Aku Maherra Shyntta Mahfud, lahir di Banda Aceh, 14 April 2010. Sekarang aku masih pelajar dan lagi suka eksplor banyak hal baru, terutama yang berhubungan dengan kreativitas dan teknologi ✨',
    },
    {
      title: '🎨 Hal yang Aku Nikmati',
      content:
        'Aku suka makeup 💄, dengerin musik 🎧, dan melukis 🎨. Buat aku, hal-hal ini jadi cara buat mengekspresikan diri dan bikin mood jadi lebih baik.',
    },
    {
      title: '🎯 Tujuan & Harapan',
      content:
        'Aku punya impian untuk menjadi pegawai di Kementerian Perhubungan 🚆, supaya bisa ikut berkontribusi dalam perkembangan transportasi dan membantu banyak orang.',
    },
  ];

  const biographyCards = [
    { icon: Code2, text: 'Belajar Hal Baru 💻' },
    { icon: Heart, text: 'Suka Kreativitas ✨' },
    { icon: Palette, text: 'Makeup & Melukis 🎨' },
    { icon: Music, text: 'Musik & Mood 🎧' },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-pink-50 dark:bg-[#0a0510] text-pink-900 dark:text-pink-100 transition-colors duration-500"
    >
      <div className="container mx-auto px-4 max-w-5xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-pink-400 dark:text-pink-300 text-sm">
            About Me 🌸
          </span>

          <h2 className="text-2xl md:text-4xl font-bold mt-2 text-pink-700 dark:text-pink-200">
            A little story about me ✨
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-orange-300 mx-auto mt-3 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center">
              <div className="relative group">

                {/* glow */}
                <div className="absolute inset-0 rounded-2xl blur-xl
                                bg-gradient-to-br from-pink-400/20 to-orange-200/20
                                group-hover:blur-2xl transition" />

                <div className="w-[260px] md:w-[320px] lg:w-[360px] aspect-square rounded-2xl overflow-hidden border border-pink-200 dark:border-pink-800 shadow-lg relative">
                  <img
                    src="/fotosinta2.jpg"
                    alt="profile"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

              </div>
            </div>
          </motion.div>

          {/* CONTENT */}
          <div className="space-y-5">

            <h3 className="text-lg md:text-xl font-semibold text-pink-700 dark:text-pink-200">
              ✨ Get to know me a bit closer
            </h3>

            {/* ACCORDION */}
            <div className="space-y-2">
              {bioAccordion.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-pink-100 dark:border-pink-800 bg-white dark:bg-[#140a18] overflow-hidden"
                >
                  <button
                    onClick={() => setOpen(open === index ? -1 : index)}
                    className="w-full flex justify-between items-center px-4 py-3 text-sm font-medium text-pink-700 dark:text-pink-200 hover:bg-pink-50 dark:hover:bg-[#1b0f20] transition"
                  >
                    {item.title}
                    <span className="text-pink-400">
                      {open === index ? '−' : '+'}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 pb-3 text-xs md:text-sm text-pink-600 dark:text-pink-300 leading-relaxed"
                      >
                        {item.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* BIO CARDS */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {biographyCards.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 rounded-lg text-center
                             bg-gradient-to-br from-pink-100 to-orange-100
                             dark:from-[#140a18] dark:to-[#1a0f1f]
                             border border-pink-200 dark:border-pink-800
                             hover:scale-[1.03] transition"
                >
                  <item.icon className="h-5 w-5 mx-auto mb-1 text-pink-400" />
                  <p className="text-xs md:text-sm text-pink-700 dark:text-pink-200">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}