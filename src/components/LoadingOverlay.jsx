import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/logo.webp";

function LoadingOverlay({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 1,
            backdropFilter: "blur(24px)",
          }}
          exit={{
            opacity: 0,
            backdropFilter: "blur(0px)",
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          className="
            fixed
            inset-0
            z-50

            flex
            items-center
            justify-center

            overflow-hidden

            bg-black/45
            backdrop-blur-2xl
          "
        >
          {/* Main Gold Glow */}

          <motion.div
            className="
              absolute

              h-[320px]
              w-[320px]

              sm:h-[420px]
              sm:w-[420px]

              md:h-[520px]
              md:w-[520px]

              lg:h-[620px]
              lg:w-[620px]

              rounded-full

              bg-[#D4B46A]/25

              blur-[140px]
            "
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Inner Warm Glow */}

          <motion.div
            className="
                absolute

                h-[360px]
                w-[360px]

                sm:h-[480px]
                sm:w-[480px]

                lg:h-[650px]
                lg:w-[650px]

                rounded-full

                bg-[#D4B46A]/20

                blur-[150px]
            "
            animate={{
                scale: [1, 1.08, 1],
                opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            />

          {/* Logo */}

          <motion.div
            className="
                relative
                z-20

                flex
                flex-col
                items-center

                -translate-y-8
            "
            animate={{
                y: [-6, 6, -6],
                scale: [1, 1.02, 1],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            >
            <img
                src={logo}
                alt="Zistea"
                draggable={false}
                className="
                w-44
                sm:w-56
                md:w-72
                lg:w-80

                object-contain
                select-none
                pointer-events-none

                drop-shadow-[0_0_35px_rgba(212,180,106,0.35)]
                "
            />

            <p
                className="
                    mt-4

                    text-sm
                    sm:text-base

                    font-medium

                    text-[#E8D69B]

                    tracking-wide

                    select-none
                "
                >
                Brewing Something Special...
                </p>
            </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingOverlay;