import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const team = [
  {
    name: "Alex Mercer",
    role: "Founder & CEO",
    bio: "Former quant at Jane Street. Built liquidity systems for Base-native protocols since 2022.",
    avatar: "/images/team/alex-mercer.jpg",
    initials: "AM",
    links: { twitter: "#", github: "#" },
  },
  {
    name: "Yuna Park",
    role: "Head of Protocol",
    bio: "Smart contract architect. Previously core contributor to Uniswap v4 hooks research.",
    avatar: "/images/team/yuna-park.jpg",
    initials: "YP",
    links: { twitter: "#", github: "#" },
  },
  {
    name: "Dante Cruz",
    role: "Lead Engineer",
    bio: "Systems engineer with 8 years in HFT infrastructure. Obsessed with deterministic execution.",
    avatar: "/images/team/dante-cruz.jpg",
    initials: "DC",
    links: { twitter: "#", github: "#" },
  },
  {
    name: "Mira Osei",
    role: "Research & Risk",
    bio: "PhD in financial mathematics. Designs the oracle-anchored pricing models behind PropDEX.",
    avatar: "/images/team/mira-osei.jpg",
    initials: "MO",
    links: { twitter: "#", github: "#" },
  },
];

const TwitterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
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
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
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
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </a>
                <a
                  href={member.links.github}
                  className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                  aria-label="GitHub"
                >
                  <GithubIcon />
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
