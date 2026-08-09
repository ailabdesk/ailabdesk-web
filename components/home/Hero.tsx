"use client";

import { motion } from "framer-motion";

import Container from "../ui/Container";
import SearchBar from "../ui/SearchBar";

import HeroBackground from "./HeroBackground";
import HeroEcosystem from "./HeroEcosystem";

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

const titleTransition = {
  duration: 0.9,
  ease: easing,
};

const fadeTransition = {
  duration: 0.8,
  ease: easing,
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-84px)] items-center overflow-hidden">
      <HeroBackground />

      <Container>
        <div className="grid w-full items-center gap-18 lg:grid-cols-2">
          {/* ================= LEFT ================= */}

          <div className="relative z-10">

            {/* Badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                ease: easing,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-5 py-2 text-sm font-medium text-orange-600 shadow-lg backdrop-blur-xl"
            >
              AI Discovery Platform
            </motion.div>

            {/* ================= TITLE ================= */}

            <div className="mt-9 space-y-4">

              <div className="overflow-hidden">

                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 90,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    ...titleTransition,
                    delay: 0.15,
                  }}
                  className="text-6xl font-extrabold leading-none tracking-tight text-slate-900 lg:text-7xl xl:text-8xl"
                >
                  Discover 
                </motion.h1>

              </div>

              <div className="overflow-hidden">

                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 90,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    ...titleTransition,
                    delay: 0.30,
                  }}
                  className="text-6xl font-extrabold leading-[1.08] tracking-tight lg:text-7xl xl:text-8xl"
                >
                  <motion.span
                    animate={{
                      backgroundPosition: [
                        "0%",
                        "100%",
                        "0%",
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="bg-gradient-to-r from-[#FF6B00] via-[#FF9800] to-[#FFC54D] bg-[length:200%_100%] bg-clip-text text-transparent"
                  >
                    AI Tools
                  </motion.span>
                </motion.h1>

              </div>

              <div className="overflow-hidden pb-3">

                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 90,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    ...titleTransition,
                    delay: 0.45,
                  }}
                  className="text-6xl font-extrabold leading-[1.08] tracking-tight text-slate-900 lg:text-7xl xl:text-8xl"
                >
                  <span className="text-slate-900">
                    worth using
                  </span>
                </motion.h1>

              </div>

            </div>
                        {/* ================= DESCRIPTION ================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                ...fadeTransition,
                delay: 0.75,
              }}
              className="mt-8 max-w-xl text-lg leading-8 text-slate-600"
            >
              Explore, compare and discover AI tools, software and equipment for
              writing, video, image, voice, coding, business and content creation.
            </motion.p>

            {/* ================= SEARCH ================= */}

            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0.88,
                y: 24,
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.95,
                ease: easing,
              }}
              style={{
                transformOrigin: "left center",
              }}
              className="mt-10 max-w-xl"
            >
              <SearchBar />
            </motion.div>

            {/* ================= STATS ================= */}

            <div className="mt-12 flex flex-wrap gap-5">

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.92,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  ...fadeTransition,
                  delay: 1.15,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
                className="rounded-2xl border border-white/50 bg-white/60 px-7 py-5 shadow-xl backdrop-blur-xl"
              >
                <div className="text-3xl font-bold text-slate-900">
                  150+
                </div>

                <div className="mt-1 text-sm text-slate-500">
                  AI Products
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.92,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  ...fadeTransition,
                  delay: 1.28,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
                className="rounded-2xl border border-white/50 bg-white/60 px-7 py-5 shadow-xl backdrop-blur-xl"
              >
                <div className="text-3xl font-bold text-slate-900">
                  40+
                </div>

                <div className="mt-1 text-sm text-slate-500">
                  Categories
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.92,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  ...fadeTransition,
                  delay: 1.41,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
                className="rounded-2xl border border-white/50 bg-white/60 px-7 py-5 shadow-xl backdrop-blur-xl"
              >
                <div className="text-3xl font-bold text-slate-900">
                  Trusted
                </div>

                <div className="mt-1 text-sm text-slate-500">
                  Recommendations
                </div>
              </motion.div>

            </div>

          </div>

          {/* ================= RIGHT ================= */}

                    <motion.div
            initial={{
              opacity: 0,
              scale: 0.88,
              x: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 1.2,
              delay: 1.6,
              ease: easing,
            }}
            className="relative flex items-center justify-center"
          >
            {/* Floating Motion */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <HeroEcosystem />
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}