import { motion } from 'framer-motion';

const subjects = {
  favorit: [
    { name: 'Informatika 💻✨', level: 93 },
    { name: 'Matematika ➗✨', level: 90 },
    { name: 'Bahasa Inggris ✨', level: 85 },
    { name: 'Seni Budaya 🎨✨', level: 87 },
    { name: 'Agama 📿✨', level: 94 },
  ],

  utama: [
    { name: 'Matematika ➗', level: 90 },
    { name: 'Bahasa Indonesia 📖', level: 95 },
    { name: 'Bahasa Inggris ✨', level: 85 },
    { name: 'IPA 🔬', level: 88 },
    { name: 'IPS 🌍', level: 82 },
  ],

  tambahan: [
    { name: 'PPKn 🇮🇩', level: 92 },
    { name: 'PJOK 🏃‍♀️', level: 80 },
    { name: 'Prakarya 🧵', level: 84 },
    { name: 'TIK 💻', level: 89 },
    { name: 'Sejarah 📜', level: 86 },
  ],
};

function MapelBar({ name, level }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-pink-800 dark:text-pink-200">{name}</span>
        <span className="text-pink-400">{level}% ✨</span>
      </div>

      <div className="h-2 rounded-full bg-pink-100 dark:bg-[#140a18] overflow-hidden">
        <div
          className="h-full rounded-full transition-all
                     bg-gradient-to-r from-pink-400 via-rose-300 to-orange-300"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function Box({ title, emoji, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-5 rounded-2xl border
                 border-pink-200 dark:border-pink-800
                 bg-white/70 dark:bg-[#140a18]
                 shadow-md hover:shadow-lg transition"
    >
      <h3 className="text-lg font-semibold mb-4 text-pink-700 dark:text-pink-200">
        {emoji} {title}
      </h3>

      <div className="space-y-4">{children}</div>
    </motion.div>
  );
}

export default function MapelSection() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-pink-50 dark:bg-[#0a0510]
                 text-pink-900 dark:text-pink-100 transition-colors"
    >
      <div className="container mx-auto px-4 max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-pink-400 text-sm">
            📚 Things I Learn
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-pink-700 dark:text-pink-200">
            Subjects I Spend Time On ✨
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-orange-300 mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* BOX GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          <Box title="Yang Lagi Aku Nikmati" emoji="🌸">
            {subjects.favorit.map((item) => (
              <MapelBar key={item.name} {...item} />
            ))}
          </Box>

          <Box title="Pelajaran Harian" emoji="📖">
            {subjects.utama.map((item) => (
              <MapelBar key={item.name} {...item} />
            ))}
          </Box>

          <Box title="Tambahan & Pelengkap" emoji="✨">
            {subjects.tambahan.map((item) => (
              <MapelBar key={item.name} {...item} />
            ))}
          </Box>

        </div>
      </div>
    </section>
  );
}