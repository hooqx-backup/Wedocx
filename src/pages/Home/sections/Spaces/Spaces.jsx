import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  luxGpImgs,
  luxDentalImgs,
  luxTreatmentImgs,
  fioreSuite1Imgs,
  fioreSuite3Imgs,
  fioreSuite5Imgs,
  dentalImgs1,
  dermImgs,
  treatmentImgs,
} from "../../../../assets/images";
import { stagger, t, viewport } from "../../../../animations/variants";
import ServiceSelectionModal from "../../../../components/booking/ServiceSelectionModal";
import ContactModal from "../../../../components/ui/ContactModal/ContactModal";

const filters = ["All", "Lux Aeterna", "Fiore", "Life"];

const clinicRows = [
  {
    clinic: "Lux Aeterna Clinic",
    filterKey: "Lux Aeterna",
    badge: "Premium",
    badgeClass: "border-purple-400/40 text-purple-400 bg-purple-500/8",
    spaces: [
      {
        badge: "Live now", live: true,
        type: "GP · 200 SQFT", rating: "5.0",
        name: "GP Suite", loc: "JLT, Dubai · Floor 12",
        imgs: luxGpImgs,
      },
      {
        badge: "Live now", live: true,
        type: "DENTAL · 220 SQFT", rating: "5.0",
        name: "Dental Suite", loc: "JLT, Dubai · Floor 06",
        imgs: luxDentalImgs,
      },
      {
        badge: "Live now", live: true,
        type: "TREATMENT · 240 SQFT", rating: "5.0",
        name: "Treatment Suite", loc: "JLT, Dubai · Floor 08",
        imgs: luxTreatmentImgs,
      },
    ],
  },
  {
    clinic: "Fiore Medical Centre",
    filterKey: "Fiore",
    badge: "Flagship",
    badgeClass: "border-rose-400/40 text-rose-400 bg-rose-500/8",
    spaces: [
      {
        badge: "Live now", live: true,
        type: "GP · 200 SQFT", rating: "4.9",
        name: "General Practice Suite", loc: "JLT, Dubai · Floor 04",
        imgs: fioreSuite1Imgs,
      },
      {
        badge: "Live now", live: true,
        type: "DERM · 180 SQFT", rating: "5.0",
        name: "Dermatology Room", loc: "JLT, Dubai · Floor 03",
        imgs: fioreSuite3Imgs,
      },
      {
        badge: "2 left", live: false,
        type: "TREATMENT · 240 SQFT", rating: "5.0",
        name: "Treatment Room", loc: "JLT, Dubai · Floor 02",
        imgs: fioreSuite5Imgs,
      },
    ],
  },
  {
    clinic: "Life Clinic",
    filterKey: "Life",
    badge: "Upcoming",
    badgeClass: "border-emerald-400/40 text-emerald-400 bg-emerald-500/8",
    spaces: [
      {
        badge: "Upcoming", live: false,
        type: "TREATMENT · 240 SQFT", rating: "—",
        name: "Treatment Suite", loc: "JLT, Dubai · Opening 2026",
        imgs: treatmentImgs,
      },
      {
        badge: "Upcoming", live: false,
        type: "DENTAL · 220 SQFT", rating: "—",
        name: "Dental Suite", loc: "JLT, Dubai · Opening 2026",
        imgs: dentalImgs1,
      },
      {
        badge: "Upcoming", live: false,
        type: "DERM · 180 SQFT", rating: "—",
        name: "Dermatology Room", loc: "JLT, Dubai · Opening 2026",
        imgs: dermImgs,
      },
    ],
  },
];

/* ── Word-reveal heading with blur ─────────────────────────────────────────── */
const wordVariant = {
  hidden: { y: "110%", opacity: 0, filter: "blur(8px)" },
  visible: (i) => ({
    y: "0%", opacity: 1, filter: "blur(0px)",
    transition: { duration: 0.78, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

function RevealWord({ children, i, className = "" }) {
  return (
    <span className="inline-block overflow-hidden leading-[1.15]">
      <motion.span custom={i} variants={wordVariant} className={`inline-block ${className}`}>
        {children}
      </motion.span>
    </span>
  );
}

/* ── Floating ambient orb ──────────────────────────────────────────────────── */
function Orb({ style, dur, delay }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={style}
      animate={{ y: [0, -28, 0], scale: [1, 1.06, 1] }}
      transition={{ duration: dur, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ── Auto-cycling image carousel ───────────────────────────────────────────── */
function CardCarousel({ imgs, name }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (imgs.length <= 1) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % imgs.length), 2800);
    return () => clearInterval(id);
  }, [imgs.length]);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence initial={false}>
        <motion.img
          key={idx}
          src={imgs[idx]}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.95, ease: "easeInOut" }}
        />
      </AnimatePresence>
      {imgs.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {imgs.map((_, j) => (
            <div
              key={j}
              className={`h-1 rounded-full bg-white transition-all duration-300 ${
                j === idx ? "w-4 opacity-90" : "w-1 opacity-40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Space card ─────────────────────────────────────────────────────────────── */
function SpaceCard({ s, i, onContact }) {
  const snap = [0.22, 1, 0.36, 1];

  const curX = useMotionValue(0.5);
  const imgX  = useSpring(useTransform(curX, [0, 1], [-16, 16]), { stiffness: 140, damping: 22 });

  const mx  = useMotionValue(-9999);
  const my  = useMotionValue(-9999);
  const spotColor = "rgba(200,154,79,0.11)";
  const spot = useMotionTemplate`radial-gradient(260px circle at ${mx}px ${my}px, ${spotColor}, transparent 65%)`;

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    curX.set((e.clientX - r.left) / r.width);
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };
  const onLeave = () => {
    curX.set(0.5);
    mx.set(-9999); my.set(-9999);
  };

  return (
    <motion.div
      onClick={onContact}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial="rest"
      whileHover="hover"
      variants={{
        rest:  { y: 0,  scale: 1,     boxShadow: "0 4px 24px -8px rgba(15,25,41,0.10), 0 0 0 1px rgba(15,25,41,0.06)" },
        hover: { y: -8, scale: 1.018,
          boxShadow: "0 28px 64px -18px rgba(15,25,41,0.24), 0 0 0 1.5px rgba(200,154,79,0.50)",
          transition: { duration: 0.42, ease: snap } },
      }}
      className="relative bg-bone rounded-2xl overflow-hidden cursor-pointer h-full"
    >
      <motion.div className="absolute inset-0 pointer-events-none z-10" style={{ background: spot }} />

      <div className="relative aspect-4/3 overflow-hidden">
        <span className={`absolute top-3.5 left-3.5 z-20 px-2.5 py-1 rounded-full font-mono text-[9px] tracking-[.15em] uppercase backdrop-blur-[10px] ${
          s.live ? "bg-[#27c46b] text-white" : "bg-bone/90"
        }`}>
          {s.live && (
            <motion.span className="inline-block w-1.5 h-1.5 rounded-full bg-white mr-1.5 mb-px"
              animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} />
          )}
          {s.badge}
        </span>
        <button className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-bone/90 backdrop-blur-[10px] flex items-center justify-center text-sm transition-all hover:bg-white hover:scale-105">♡</button>

        <motion.div
          className="absolute pointer-events-none"
          style={{ inset: "-18px", x: imgX }}
          variants={{ rest: { scale: 1 }, hover: { scale: 1.06, transition: { duration: 0.55, ease: snap } } }}
        >
          <CardCarousel imgs={s.imgs} name={s.name} />
        </motion.div>

        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          variants={{
            rest:  { opacity: 0 },
            hover: { opacity: 1, transition: { duration: 0.4 } },
          }}
          style={{ background: "linear-gradient(to top, rgba(15,25,41,0.35) 0%, transparent 55%)" }}
        />
      </div>

      <div className="p-6 relative z-10">
        <div className="flex justify-between items-center font-mono text-[10px] tracking-[.12em] uppercase text-[#5a6478] mb-2.5">
          <span>{s.type}</span>
          <motion.span
            variants={{
              rest:  { color: "rgb(26,34,50)" },
              hover: { color: "rgb(200,154,79)", transition: { duration: 0.28 } },
            }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
          >
            ★ {s.rating}
          </motion.span>
        </div>

        <motion.h3
          className="font-serif text-[22px] font-normal mb-1.5"
          variants={{
            rest:  { letterSpacing: "-0.01em", x: 0 },
            hover: { letterSpacing: "0.015em",  x: 3, transition: { duration: 0.4, ease: snap } },
          }}
        >
          {s.name}
        </motion.h3>

        <motion.p
          className="text-[13px] mb-4"
          variants={{
            rest:  { color: "rgb(90,100,120)" },
            hover: { color: "rgb(58,69,88)", transition: { duration: 0.28 } },
          }}
        >
          {s.loc}
        </motion.p>

        <motion.div
          className="h-px origin-left"
          variants={{
            rest:  { backgroundColor: "rgba(15,25,41,0.05)", scaleX: 1 },
            hover: { backgroundColor: "rgba(200,154,79,0.50)", scaleX: 1, transition: { duration: 0.55, ease: snap } },
          }}
        />
      </div>

      <BookStrip />
    </motion.div>
  );
}

/* ── Book strip ─────────────────────────────────────────────────────────────── */
function BookStrip() {
  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 bg-ink text-bone px-6 py-3.75 flex items-center justify-between z-30"
      variants={{
        rest: { y: "101%" },
        hover: { y: 0, transition: { duration: 0.40, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      <span className="font-mono text-[10px] tracking-[.22em] uppercase">Book this suite</span>
      <motion.span
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        className="text-brand"
      >
        →
      </motion.span>
    </motion.div>
  );
}

/* ── Magnetic filter pill ───────────────────────────────────────────────────── */
function FilterBtn({ label, active, onClick }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 22 });
  const sy = useSpring(y, { stiffness: 260, damping: 22 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.28);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.28);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.button
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className="relative px-4 py-2 rounded-full text-[13px] border border-ink/10 overflow-hidden"
    >
      {active && (
        <motion.span
          layoutId="filter-active"
          className="absolute inset-0 rounded-full bg-ink"
          transition={{ type: "spring", bounce: 0.18, duration: 0.42 }}
        />
      )}
      <span className={`relative z-10 transition-colors duration-200 ${active ? "text-bone" : "text-ink"}`}>
        {label}
      </span>
    </motion.button>
  );
}

/* ── Clinic row header ──────────────────────────────────────────────────────── */
function RowHeader({ clinic, badge, badgeClass }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="w-7 h-px bg-ink/25 block shrink-0" />
      <span className="font-mono text-[11px] tracking-[.18em] uppercase text-ink/55">{clinic}</span>
      <span className={`font-mono text-[9px] tracking-[.14em] uppercase px-2.5 py-1 rounded-full border ${badgeClass}`}>
        {badge}
      </span>
      <span className="flex-1 h-px bg-ink/8 block" />
    </div>
  );
}

/* ── Main section ──────────────────────────────────────────────────────────── */
export default function Spaces() {
  const [active, setActive] = useState("All");
  const [servicesOpen, setServicesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const visibleRows = active === "All"
    ? clinicRows
    : clinicRows.filter(r => r.filterKey === active);

  return (
    <>
      <section
        id="spaces"
        className="py-30 px-10 max-lg:py-20 max-sm:py-16 max-sm:px-5 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, var(--color-bone) 0%, var(--color-cream) 100%)" }}
      >
        <Orb
          style={{
            width: 500, height: 500, top: -140, right: -120,
            background: "radial-gradient(circle, rgba(200,154,79,0.09), transparent 68%)",
            filter: "blur(64px)",
          }}
          dur={9} delay={0}
        />
        <Orb
          style={{
            width: 380, height: 380, bottom: 40, left: -100,
            background: "radial-gradient(circle, rgba(200,154,79,0.07), transparent 68%)",
            filter: "blur(54px)",
          }}
          dur={11} delay={2.5}
        />

        <div className="max-w-360 mx-auto relative z-10">

          {/* ── Header ── */}
          <motion.div
            variants={stagger()}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid lg:grid-cols-[200px_1fr] grid-cols-1 gap-15 max-lg:gap-6 mb-10 items-start"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -16 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="font-mono text-[11px] tracking-[.2em] uppercase text-brand pt-3 border-t border-ink w-15"
            >
              Spaces
            </motion.div>

            <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-none tracking-[-0.03em] flex flex-wrap gap-x-[0.28em]">
              <RevealWord i={0}>Suites</RevealWord>
              <RevealWord i={1}>built</RevealWord>
              <RevealWord i={2}>for</RevealWord>
              {" "}
              <RevealWord i={3} className="italic text-gold">specialists.</RevealWord>
            </h2>
          </motion.div>

          {/* ── Description + Filters ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={t(0.6)}
            className="flex flex-wrap justify-between items-end gap-6 mb-15"
          >
            <p className="max-w-120 text-[#3a4558] leading-relaxed">
              Every room is photographed, equipped, and reviewed by practitioners
              in that specialty.
            </p>
            <div className="flex gap-2 flex-wrap">
              {filters.map((f) => (
                <FilterBtn key={f} label={f} active={active === f} onClick={() => setActive(f)} />
              ))}
            </div>
          </motion.div>

          {/* ── Clinic rows ── */}
          <AnimatePresence mode="wait">
          <div className="flex flex-col gap-16">
            {visibleRows.map((row, rowIdx) => (
              <motion.div
                key={row.clinic}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, delay: rowIdx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <RowHeader clinic={row.clinic} badge={row.badge} badgeClass={row.badgeClass} />
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                  {row.spaces.map((s, i) => (
                    <motion.div
                      key={s.name + row.clinic}
                      initial={{ opacity: 0, y: 40, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={viewport}
                      transition={{ duration: 0.52, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <SpaceCard s={s} i={i} onContact={() => setServicesOpen(true)} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          </AnimatePresence>

          {/* ── CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={t(0.5)}
            className="flex justify-center mt-15"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full bg-ink/15"
                animate={{ scale: [1, 1.22, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.button
                onClick={() => setServicesOpen(true)}
                whileHover={{ y: -2, boxShadow: "0 18px 44px -10px rgba(15,25,41,0.34)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="relative inline-flex items-center gap-2 px-20 py-4 rounded-full text-sm font-medium bg-ink text-bone border border-ink"
              >
                Book Now{" "}
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </motion.button>
            </div>
          </motion.div>

        </div>
      </section>

      <ServiceSelectionModal open={servicesOpen} onClose={() => setServicesOpen(false)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
