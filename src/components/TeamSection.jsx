import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const team = [
  {
    name: "Essential Sam",
    role: "Founder & CEO",
    bio: "Former quant at Jane Street. Built liquidity systems for Base-native protocols since 2022.",
    avatar: "/images/team/essential.jpg",
    initials: "AM",
    links: { twitter: "https://x.com/Essentialsam01" },
  },
  {
    name: "Essential Sam",
    role: "Community Lead",
    bio: "Smart contract architect. Previously core contributor to Uniswap v4 hooks research.",
    avatar: "/images/team/essential.jpg",
    initials: "YP",
    links: { twitter: "https://x.com/Essentialsam01" },
  },
  {
    name: "Essential Sam",
    role: "Lead Engineer",
    bio: "Systems engineer with 8 years in HFT infrastructure. Obsessed with deterministic execution.",
    avatar: "/images/team/essential.jpg",
    initials: "DC",
    links: { twitter: "https://x.com/Essentialsam01" },
  },
  {
    name: "Essential Sam",
    role: "Research & Risk",
    bio: "PhD in financial mathematics. Designs the oracle-anchored pricing models behind PropDEX.",
    avatar: "/images/team/essential.jpg",
    initials: "MO",
    links: { twitter: "https://x.com/Essentialsam01" },
  },
];

const TwitterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="relative px-8 py-32 md:px-16">
      <div className="absolute inset-0 gradient-lunar pointer-events-none" />

      <div className="relative mx-auto max-w-6xl" ref={ref}>
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 2 }}
            className="mx-auto mb-8 h-px w-16 bg-primary/40"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-4 font-body text-sm tracking-[0.5em] text-muted-foreground uppercase"
          >
            The builders
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-3xl tracking-wider text-foreground text-glow md:text-5xl"
          >
            MEET THE TEAM
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
              className="card-lunar group rounded-sm p-6 flex flex-col gap-4"
            >
              {/* Avatar */}
              <div className="relative w-full aspect-square overflow-hidden rounded-sm border border-primary/20 bg-primary/5">
                {member.avatar ? (
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 grayscale"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-display text-3xl tracking-wider text-primary text-glow">
                    {member.initials}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Name & Role */}
              <div>
                <p className="font-display text-xs tracking-wider text-foreground">
                  {member.name}
                </p>
                <p className="font-body text-[11px] tracking-wider text-primary/70 mt-0.5">
                  {member.role}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-border/50" />

              {/* Bio */}
              <p className="font-body text-xs text-muted-foreground leading-relaxed flex-1">
                {member.bio}
              </p>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={member.links.twitter}
                  className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                  aria-label="X (Twitter)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
