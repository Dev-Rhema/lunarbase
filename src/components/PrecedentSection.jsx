import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { stat: "$40B+", label: "monthly volume", context: "HumidiFi on Solana" },
  { stat: "30%+", label: "Solana DEX market share", context: "held by HumidiFi" },
  { stat: "$34B", label: "Base monthly DEX volume", context: "the uncontested frontier" },
];

const PrecedentSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const narrativeRef = useRef(null);
  const narrativeInView = useInView(narrativeRef, { once: true, margin: "-50px" });

  return (
    <section id="precedent" className="relative overflow-hidden px-8 py-32 md:px-16">
      <div className="absolute inset-0 gradient-lunar pointer-events-none" />
      <div className="relative mx-auto max-w-6xl">
        {/* Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 font-body text-xs tracking-[0.5em] text-muted-foreground">
            THE PROVEN MODEL
          </p>
          <h2 className="font-display text-3xl tracking-wider text-foreground text-glow md:text-4xl">
            PRECEDENT
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={titleInView ? { width: 80 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="mx-auto mt-6 h-px bg-primary/40"
          />
          <p className="mx-auto mt-8 max-w-2xl font-body text-sm leading-relaxed text-muted-foreground">
            This is not a new idea. On Solana, prop AMMs already won.
            The model is proven. EVM is the{" "}
            <span className="text-foreground">uncontested frontier</span>.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mb-20 grid gap-6 md:grid-cols-3">
          {stats.map((s, i) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-50px" });
            return (
              <motion.div
                ref={ref}
                key={s.label}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="card-lunar rounded-sm p-8 text-center"
              >
                <div className="font-display text-4xl text-foreground text-glow">{s.stat}</div>
                <div className="mt-2 font-body text-sm text-muted-foreground">{s.label}</div>
                <div className="mt-1 font-body text-xs text-primary/60">{s.context}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Two-column narrative */}
        <div ref={narrativeRef} className="grid gap-8 lg:grid-cols-2">
          {/* Solana proof */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={narrativeInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-lunar rounded-sm p-8"
          >
            <h3 className="mb-4 font-display text-sm tracking-[0.3em] text-foreground">
              SOLANA PROVED IT
            </h3>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              HumidiFi alone processes roughly{" "}
              <span className="text-foreground">$40 billion per month</span> and has held over{" "}
              <span className="text-foreground">30% of Solana DEX volume</span>. The model is
              proven. On Base's{" "}
              <span className="text-foreground">$34 billion in monthly DEX volume</span>, that
              is tens of millions flowing to arbitrage instead of users. The shift is coming to
              Base now.
            </p>
          </motion.div>

          {/* Verifiable receipts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={narrativeInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="card-lunar rounded-sm p-8"
          >
            <h3 className="mb-4 font-display text-sm tracking-[0.3em] text-foreground">
              BEST EXECUTION IS A RECEIPT
            </h3>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              Aggregators know this. But they cannot prove it. There is no auditable record
              showing whether you received a good fill or a bad one. "Best execution" is a
              claim, not a receipt.
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
              Every PropDEX fill produces a machine-readable receipt:{" "}
              <span className="text-foreground">
                the oracle mid, the spread charged, the execution mode
              </span>
              . For the first time, a router can point to a trade and say —
            </p>
            <blockquote className="mt-5 border-l-2 border-primary/40 pl-4 font-body text-sm italic text-foreground">
              "This was 3 bps better. Here's the proof."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrecedentSection;
