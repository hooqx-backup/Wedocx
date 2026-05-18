import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  dentalImgs1,
  dentalImgs2,
  dermImgs,
  treatmentImgs,
  pediatricImgs,
} from "../../../../assets/images";
import { fadeUp, stagger, t, viewport } from "../../../../animations/variants";
import ServiceSelectionModal from "../../../../components/booking/ServiceSelectionModal";

const filters = [
  "All suites",
  "Dental",
  "Dermatology",
  "Pediatric",
  "Treatment",
];

const spaces = [
  {
    badge: "Live now",
    live: true,
    category: "Dental",
    type: "DENTAL · 220 SQFT",
    rating: "4.9",
    name: "Dental Suite 01",
    loc: "Business Bay, Dubai · Floor 04",
    imgs: dentalImgs1,
  },
  {
    badge: "2 left",
    live: false,
    category: "Dental",
    type: "DENTAL · 240 SQFT",
    rating: "4.8",
    name: "Dental Suite 02",
    loc: "Business Bay, Dubai · Floor 04",
    imgs: dentalImgs2,
  },
  {
    badge: "Live now",
    live: true,
    category: "Dermatology",
    type: "DERM · 180 SQFT",
    rating: "5.0",
    name: "Dermatology Room",
    loc: "DIFC, Dubai · Floor 03",
    imgs: dermImgs,
  },
  {
    badge: "New",
    live: false,
    category: "Dermatology",
    type: "DERM · 160 SQFT",
    rating: "4.9",
    name: "Dermatology Suite 02",
    loc: "DIFC, Dubai · Floor 03",
    imgs: dermImgs,
  },
  {
    badge: "Live now",
    live: true,
    category: "Treatment",
    type: "TREATMENT · 200 SQFT",
    rating: "4.9",
    name: "Treatment Room",
    loc: "Al Reem Island, Abu Dhabi",
    imgs: treatmentImgs,
  },
  {
    badge: "Premium",
    live: false,
    category: "Pediatric",
    type: "PEDIATRIC · 220 SQFT",
    rating: "5.0",
    name: "Pediatrician Suite",
    loc: "Jumeirah, Dubai · Floor 02",
    imgs: pediatricImgs,
  },
];

function CardCarousel({ imgs, name }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (imgs.length <= 1) return;
    const timer = setInterval(() => setIdx((i) => (i + 1) % imgs.length), 2800);
    return () => clearInterval(timer);
  }, [imgs.length]);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence initial={false}>
        <motion.img
          key={idx}
          src={imgs[idx]}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {imgs.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {imgs.map((_, j) => (
            <div
              key={j}
              className={`h-1 rounded-full bg-white transition-all duration-300 ${j === idx ? "w-4 opacity-90" : "w-1 opacity-40"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Spaces() {
  const [active, setActive] = useState("All suites");
  const [servicesOpen, setServicesOpen] = useState(false);

  const filtered =
    active === "All suites"
      ? spaces
      : spaces.filter((s) => s.category === active);

  return (
    <>
    <section
      id="spaces"
      className="py-30 px-10 max-lg:py-20 max-sm:py-16 max-sm:px-5"
      style={{
        background:
          "linear-gradient(180deg, var(--color-bone) 0%, var(--color-cream) 100%)",
      }}
    >
      <div className="max-w-360 mx-auto">
        <motion.div
          variants={stagger()}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid lg:grid-cols-[200px_1fr] grid-cols-1 gap-15 max-lg:gap-6 mb-15 items-start"
        >
          <motion.div
            variants={fadeUp}
            transition={t(0.6)}
            className="font-mono text-[11px] tracking-[.2em] uppercase text-brand pt-3 border-t border-ink w-15"
          >
            Spaces
          </motion.div>
          <motion.h2
            variants={fadeUp}
            transition={t()}
            className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-none tracking-[-0.03em]"
          >
            Suites built for{" "}
            <span className="italic text-gold">specialists.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={t(0.6)}
          className="flex flex-wrap justify-between items-end gap-6 mb-15"
        >
          <p className="max-w-120 text-[#3a4558] leading-relaxed">
            Every room is photographed, equipped, and reviewed by practitioners
            in that specialty. Filter by what you need.
          </p>
          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <motion.button
                key={f}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-full text-[13px] border transition-all duration-200 ${
                  active === f
                    ? "bg-ink text-bone border-ink"
                    : "bg-white/50 border-ink/10 hover:bg-white hover:border-ink"
                }`}
              >
                {f}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((s) => (
              <motion.div
                key={s.name}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 20px 60px -12px rgba(15,25,41,0.18), 0 0 0 1px rgba(200,154,79,0.35)",
                }}
                className="bg-bone rounded-2xl overflow-hidden border border-ink/5 cursor-pointer group"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <span
                    className={`absolute top-3.5 left-3.5 z-10 px-2.5 py-1 rounded-full font-mono text-[9px] tracking-[.15em] uppercase backdrop-blur-[10px] ${
                      s.live ? "bg-[#27c46b] text-white" : "bg-bone/90"
                    }`}
                  >
                    {s.badge}
                  </span>
                  <button className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-bone/90 backdrop-blur-[10px] flex items-center justify-center text-sm transition-all hover:bg-white hover:scale-105">
                    ♡
                  </button>
                  <CardCarousel imgs={s.imgs} name={s.name} />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center font-mono text-[10px] tracking-[.12em] uppercase text-[#5a6478] mb-2.5">
                    <span>{s.type}</span>
                    <span className="text-ink">★ {s.rating}</span>
                  </div>
                  <h3 className="font-serif text-[22px] font-normal tracking-tight mb-1.5">
                    {s.name}
                  </h3>
                  <p className="text-[13px] text-[#5a6478] mb-4">{s.loc}</p>
                  <div className="pt-4 border-t border-ink/5">
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={t(0.5)}
          className="flex justify-center mt-15"
        >
          <button
            onClick={() => setServicesOpen(true)}
            className="inline-flex items-center gap-2 px-20 py-4 rounded-full text-sm font-medium bg-ink text-bone border border-ink transition-all duration-300 hover:-translate-y-px hover:shadow-card"
          >
            Book Now <span>→</span>
          </button>
        </motion.div>
      </div>
    </section>

    <ServiceSelectionModal
      open={servicesOpen}
      onClose={() => setServicesOpen(false)}
    />
    </>
  );
}
