import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = ["PROBLEM", "SOLUTION", "ECONOMICS", "PRECEDENT", "ROADMAP", "TEAM"];

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative h-[100dvh] w-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full  object-cover"
        >
          <source src="/videos/lunarbase-video.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background" />
        <div className="absolute inset-0 scanline pointer-events-none opacity-20" />
      </div>
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-20"
      >
        <div className="flex items-center justify-between px-8 py-6 md:px-16">
          <a href="#" aria-label="Lunarbase">
            <img
              src="/images/logo.svg"
              alt="Lunarbase"
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 font-body text-sm tracking-wider text-muted-foreground">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition-colors duration-300 hover:text-primary"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-muted-foreground hover:text-primary transition-colors duration-300 p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden md:hidden border-t border-border/30 bg-background/90 backdrop-blur-md"
            >
              <div className="flex flex-col px-8 py-4 gap-5">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="font-body text-sm tracking-[0.4em] text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      {/* Hero Content */}
      <div className="relative z-10 flex h-[calc(100dvh-88px)] flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="mb-6 h-px w-16 bg-primary/40"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-4 font-body text-lg tracking-[0.5em] text-muted-foreground uppercase font-bold"
        >
          Lunarbase Labs presents
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.3 }}
          className="font-display text-5xl font-bold tracking-wider text-foreground text-glow-strong md:text-6xl lg:text-8xl"
        >
          PROPDEX
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-6 max-w-2xl font-body text-base text-muted-foreground leading-relaxed md:text-lg"
        >
          The proprietary liquidity engine for Base. Oracle-anchored,
          inventory-aware, deterministic onchain execution — no solver market,
          no intent auction, no off-chain negotiation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="https://lunarbase.gg/lightpaper"
            target="_blank"
            rel="noopener noreferrer"
            className="border-glow rounded-sm border border-primary/30 bg-primary/10 px-8 py-3 font-display text-xs tracking-[0.3em] text-primary transition-all duration-500 hover:bg-primary/20 hover:border-primary/50"
          >
            READ LITEPAPER
          </a>
        </motion.div>
        {/* TL;DR Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
          className="mt-12 max-w-xl rounded-sm border border-border/50 bg-secondary/30 px-6 py-4"
        >
          <p className="font-body text-xs leading-relaxed text-muted-foreground">
            {/* <span className="text-primary font-display tracking-wider">
              TL;DR
            </span>{" "} */}
            A single contract holds liquidity, prices it against live oracle
            feeds, and serves deterministic quotes. Two functions:{" "}
            <span className="text-foreground font-mono text-[11px]">
              quoteExactIn
            </span>{" "}
            (never reverts) and{" "}
            <span className="text-foreground font-mono text-[11px]">
              swapExactIn
            </span>{" "}
            (fills or reverts with a reason).
          </p>
        </motion.div>
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.2 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="font-body text-[10px] tracking-[0.4em] text-muted-foreground">
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
var stdin_default = HeroSection;
export { stdin_default as default };
