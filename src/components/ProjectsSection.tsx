import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const songs = [
  {
    title: "🎶 Kalam Eineh (كلام عينيه)",
    description: "Sherine — lembut, emosional, dan dalam banget 💭",
    image: "/sherine.jpg",
    color: "from-sky-400 via-indigo-400 to-purple-400",
  },
  {
    title: "💙 El Watar El Hassas",
    description: "Sherine — lagu yang nyentuh perasaan 💔",
    image: "/sherine2.jpg",
    color: "from-pink-300 via-rose-400 to-orange-300",
  },
  {
    title: "✨ Ah W Noss",
    description: "Nancy Ajram — ringan, catchy, dan enak didengar 🌸",
    image: "/wnos.jpg",
    color: "from-yellow-300 via-orange-400 to-pink-400",
  },
  {
    title: "🤍 For the Rest of My Life",
    description: "Maher Zain — tenang, hangat, dan penuh makna 🌙",
    image: "/fortherest.jpg",
    color: "from-purple-400 via-pink-400 to-fuchsia-400",
  },
  {
    title: "🥀 Tak Segampang Itu",
    description: "Anggi Marito — galau tapi indah 🎧",
    image: "/taksegampang.jpg",
    color: "from-green-300 via-emerald-400 to-teal-400",
  },
  {
    title: "💫 Takkan Terganti",
    description: "Marcell — klasik dan penuh kenangan ✨",
    image: "/takkanterganti.jpg",
    color: "from-sky-300 via-cyan-300 to-indigo-300",
  },
];

export default function SongsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section
      id="projects"
      className="
        relative py-24 overflow-hidden
        bg-pink-50 dark:bg-[#0a0510]
        text-pink-900 dark:text-pink-100
      "
    >
      {/* 🌸 BACKGROUND (SAMAIN ABOUT) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">

        {/* pink glow */}
        <div className="absolute w-[850px] h-[850px] bg-pink-300/25 blur-[220px] top-[-300px] left-[-250px]" />

        {/* peach glow */}
        <div className="absolute w-[800px] h-[800px] bg-orange-200/30 blur-[220px] bottom-[-320px] right-[-250px]" />

        {/* soft accent */}
        <div className="absolute w-[650px] h-[650px] bg-rose-300/20 blur-[200px] top-[20%] left-[10%]" />

        {/* extra warm */}
        <div className="absolute w-[600px] h-[600px] bg-pink-200/20 blur-[200px] top-[10%] right-[5%]" />

      </div>

      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold">
          🎧 Lagu Favorit
        </h2>
        <p className="text-pink-500 dark:text-pink-300 mt-2">
          Lagu yang sering nemenin suasana ✨
        </p>
      </div>

      {/* CAROUSEL (TIDAK DIUBAH) */}
      <div className="relative max-w-6xl mx-auto px-4">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6">

            {songs.map((song, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33%]"
              >
                <div className="
                  group p-4 rounded-2xl
                  bg-white/70 dark:bg-white/5
                  backdrop-blur-xl
                  border border-sky-200/30 dark:border-white/10
                  hover:-translate-y-2 transition duration-500
                ">

                  <div className="relative">
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${song.color} blur-2xl opacity-40 group-hover:opacity-80 transition`} />

                    <div className={`relative rounded-xl p-[2px] bg-gradient-to-r ${song.color}`}>
                      <div className="overflow-hidden rounded-xl aspect-[2/3] bg-black">
                        <img
                          src={song.image}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        />
                      </div>
                    </div>
                  </div>

                  <h3 className="mt-4 font-bold text-lg text-sky-900 dark:text-white">
                    {song.title}
                  </h3>

                  <p className="text-sm text-sky-600 dark:text-sky-300 mt-2">
                    {song.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* BUTTONS */}
        <Button
          onClick={scrollPrev}
          className="
            absolute left-2 top-1/2 -translate-y-1/2
            bg-white/90 dark:bg-white/10
            backdrop-blur-md
            border border-sky-200/40
          "
        >
          <ChevronLeft />
        </Button>

        <Button
          onClick={scrollNext}
          className="
            absolute right-2 top-1/2 -translate-y-1/2
            bg-white/90 dark:bg-white/10
            backdrop-blur-md
            border border-sky-200/40
          "
        >
          <ChevronRight />
        </Button>

      </div>
    </section>
  );
}