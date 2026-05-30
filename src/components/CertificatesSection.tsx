import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    title: 'Cloud Architecture Basics',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialId: 'AWS-SAA-123456',
    image: '🏆',
  },
  {
    title: 'Cloud App Development',
    issuer: 'Google Cloud',
    date: '2023',
    credentialId: 'GCP-PCD-789012',
    image: '☁️',
  },
  {
    title: 'Front-End Web Journey',
    issuer: 'Meta',
    date: '2023',
    credentialId: 'META-FE-345678',
    image: '⚛️',
  },
  {
    title: 'Database Fundamentals',
    issuer: 'MongoDB University',
    date: '2023',
    credentialId: 'MDB-DEV-901234',
    image: '🍃',
  },
  {
    title: 'Container & Deployment',
    issuer: 'CNCF',
    date: '2022',
    credentialId: 'CKA-567890',
    image: '⚙️',
  },
  {
    title: 'Team & Workflow Basics',
    issuer: 'Scrum.org',
    date: '2022',
    credentialId: 'PSM-I-234567',
    image: '📋',
  },
];

export default function CertificatesSection() {
  return (
    <section
      className="
        relative py-24 md:py-32 overflow-hidden
        bg-pink-50 dark:bg-[#0a0510]
        text-pink-900 dark:text-pink-100
      "
    >

      {/* 🌸 BACKGROUND */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute w-[700px] h-[700px] bg-pink-300/25 blur-[160px] top-[-200px] left-[-200px]" />

        <div className="absolute w-[600px] h-[600px] bg-orange-200/30 blur-[160px] bottom-[-250px] right-[-200px]" />

        <div className="absolute w-[500px] h-[500px] bg-rose-300/20 blur-[140px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      </div>

      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-pink-400 dark:text-pink-300 tracking-widest">
            ✦ MY JOURNEY ✦
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Perjalanan Belajar & Pengalaman ✨
          </h2>

          <p className="text-pink-500/70 dark:text-pink-200/70 mt-2 text-sm">
            hal-hal yang pernah aku pelajari dan capai sejauh ini 💭
          </p>

          <div className="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-pink-400 to-orange-300 rounded-full" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative"
            >

              {/* glow */}
              <div className="absolute inset-0 rounded-2xl bg-pink-400/10 blur-2xl opacity-0 group-hover:opacity-70 transition" />

              {/* CARD */}
              <div
                className="
                  relative p-6 rounded-2xl
                  bg-white/80 dark:bg-white/5
                  backdrop-blur-xl
                  border border-pink-200/40 dark:border-white/10
                  hover:-translate-y-2 transition duration-500
                "
              >

                {/* ICON */}
                <div className="text-3xl mb-3">
                  {cert.image}
                </div>

                {/* TITLE */}
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-pink-400" />
                  <h3 className="font-bold">
                    {cert.title}
                  </h3>
                </div>

                {/* ISSUER */}
                <p className="text-sm text-pink-500/70 dark:text-pink-200/70 mt-2">
                  {cert.issuer}
                </p>

                {/* DATE */}
                <div className="flex items-center gap-2 mt-2 text-sm text-pink-400/70">
                  <Calendar className="h-4 w-4 text-pink-300" />
                  {cert.date}
                </div>

                {/* ID */}
                <p className="text-xs mt-3 font-mono text-pink-400/50">
                  ID: {cert.credentialId}
                </p>

                {/* BUTTON */}
                <Button
                  size="sm"
                  className="
                    mt-4 rounded-full
                    bg-gradient-to-r from-pink-400 to-orange-300
                    hover:opacity-90
                    text-white
                  "
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Explore
                </Button>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}