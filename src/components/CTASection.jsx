import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section className="relative px-8 py-32 md:px-16">
      <div className="absolute inset-0 gradient-lunar pointer-events-none" />
      <div className="relative mx-auto max-w-3xl text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 2 }}
          className="mx-auto mb-8 h-px w-16 bg-primary/40"
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 font-display text-3xl tracking-wider text-foreground text-glow md:text-5xl"
        >
          BUILD WITH US
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10 font-body text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto"
        >
          Lunarbase Labs — building internet capital markets on Base. Integrate
          with PropDEX or join the mission.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          {/* <a
            href="#"
            className="border-glow w-full rounded-sm border border-primary/30 bg-primary/10 px-8 py-3 font-display text-xs tracking-[0.3em] text-primary transition-all duration-500 hover:bg-primary/20 hover:border-primary/50 sm:w-auto"
          >
            INTEGRATE
          </a> */}
          <a
            href="https://lunarbase.gg/lightpaper"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-sm border border-border px-8 py-3 font-display text-xs tracking-[0.3em] text-muted-foreground transition-all duration-500 hover:border-primary/30 hover:text-primary sm:w-auto"
          >
            READ LITEPAPER
          </a>{" "}
        </motion.div>
      </div>
      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
        className="relative mt-32 border-t border-border pt-8"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="font-display text-xs tracking-[0.3em] text-muted-foreground">
            LUNARBASE LABS © 2026
          </div>
          <div className="flex gap-6 items-center text-muted-foreground">
            <a
              href="https://x.com/LunarBaseX"
              aria-label="X"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-primary"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://lunarbase.gg/cabal"
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-primary"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
            <a
              href="https://farcaster.xyz/lunarbase"
              aria-label="Farcaster"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-primary"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 1000 1000"
                fill="currentColor"
              >
                <path d="M257.778 155.556H742.222V844.445H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.445H257.778V155.556Z" />
                <path d="M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.445H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z" />
                <path d="M675.556 746.667C663.283 746.667 653.333 756.616 653.333 768.889V795.556H648.889C636.616 795.556 626.667 805.505 626.667 817.778V844.445H875.556V817.778C875.556 805.505 865.606 795.556 853.333 795.556H848.889V768.889C848.889 756.616 838.94 746.667 826.667 746.667V351.111H851.111L880 253.333H702.222V746.667H675.556Z" />
              </svg>
            </a>
            <a
              href="https://discord.gg/yemKxTT6"
              aria-label="Discord"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-primary"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.114 18.1.133 18.11a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
            <a
              href="https://base.app/profile/0xb0d71A48ae0FaDaf735aBaf4486843D1F01B86Af?tab=posts"
              aria-label="Base"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-primary"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 111 111"
                fill="currentColor"
              >
                <path d="M54.921 110.034C85.359 110.034 110.034 85.402 110.034 55.017C110.034 24.632 85.359 0 54.921 0C26.0432 0 2.35281 22.1714 0 50.3923H72.8467V59.6416H3.9565e-07C2.35281 87.8625 26.0432 110.034 54.921 110.034Z" />
              </svg>
            </a>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};
var stdin_default = CTASection;
export { stdin_default as default };
