import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'maherracoding@gmail.com',
    href: 'mailto:maherracoding@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+62 852-7545-4448',
    href: 'tel:+62 852-7545-4448',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Banda Aceh, Indonesia',
    href: 'https://maps.app.goo.gl/cGv9vZUvsbUTFk596',
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { toast } = useToast();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const valid = contactSchema.safeParse(form);
    if (!valid.success) return;

    setLoading(true);

    try {
      await supabase.functions.invoke('send-contact-email', {
        body: form,
      });

      toast({
        title: 'Pesan berhasil terkirim ✨',
        description: 'Terima kasih sudah menghubungi aku 💖',
      });

      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      toast({
        title: 'Ups, gagal kirim 😢',
        description: 'Coba lagi nanti ya',
        variant: 'destructive',
      });
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="
        relative py-24 md:py-32 overflow-hidden
        bg-pink-50 dark:bg-[#0a0510]
      "
    >
      {/* 🌸 BACKGROUND (SAMAIN ABOUT) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-pink-300/25 blur-[200px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-orange-200/30 blur-[180px] bottom-[-200px] right-[-200px]" />
      </div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-pink-900 dark:text-white">
          Ngobrol Yuk 💌
        </h2>

        <p className="text-pink-500 dark:text-pink-300 mt-2">
          kalau kamu punya cerita, ide, atau cuma mau say hi ✨
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="space-y-4">

          {contactInfo.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="
                flex items-center gap-4 p-4 rounded-xl
                bg-white/60 dark:bg-white/5
                backdrop-blur-xl
                border border-pink-200/40 dark:border-white/10
                hover:border-pink-400/40 transition
              "
            >
              <div className="p-3 rounded-lg bg-pink-400/10">
                <item.icon className="h-5 w-5 text-pink-400" />
              </div>

              <div>
                <p className="text-xs text-pink-400">{item.label}</p>
                <p className="font-medium text-pink-900 dark:text-white">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}

        </div>

        {/* RIGHT SIDE */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="
            p-6 rounded-2xl
            bg-white/60 dark:bg-white/5
            backdrop-blur-xl
            border border-pink-200/40 dark:border-white/10
            space-y-4
          "
        >

          <Input
            name="name"
            placeholder="Nama kamu ✨"
            value={form.name}
            onChange={handleChange}
          />

          <Input
            name="email"
            placeholder="Email aktif 💌"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            name="subject"
            placeholder="Tentang apa nih?"
            value={form.subject}
            onChange={handleChange}
          />

          <Textarea
            name="message"
            placeholder="Tulis sesuatu di sini... 💭"
            value={form.message}
            onChange={handleChange}
            rows={5}
          />

          <Button
            type="submit"
            disabled={loading}
            className="
              w-full rounded-full
              bg-gradient-to-r from-pink-400 to-orange-300
              hover:opacity-90 text-white
            "
          >
            {loading ? (
              <Loader2 className="animate-spin h-4 w-4 mr-2" />
            ) : (
              <Send className="h-4 w-4 mr-2" />
            )}
            Kirim Sekarang ✨
          </Button>

        </motion.form>

      </div>
    </section>
  );
}