// import { motion, AnimatePresence } from "framer-motion";

// import logo from "../assets/logo.png";

// function LoadingOverlay({ show }) {
//     return (
//         <AnimatePresence>
//             {show && (
//                 <motion.div
//                     initial={{ opacity: 1 }}
//                     exit={{
//                         opacity: 0,
//                         backdropFilter: "blur(0px)",
//                         transition: {
//                             duration: 0.8,
//                             ease: "easeInOut",
//                         },
//                     }}
//                     className="
//                         fixed
//                         inset-0
//                         z-50
//                         flex
//                         items-center
//                         justify-center
//                         overflow-hidden

//                         bg-white/20
//                         backdrop-blur-xl
//                     "
//                 >
//                     {/* Back Glow */}

//                     <motion.div
//                         className="
//                             absolute
//                             rounded-full

//                             h-[280px]
//                             w-[280px]

//                             sm:h-[380px]
//                             sm:w-[380px]

//                             lg:h-[520px]
//                             lg:w-[520px]

//                             bg-green-400/20
//                             blur-[120px]
//                         "
//                         animate={{
//                             scale: [1, 1.15, 1],
//                             opacity: [0.15, 0.35, 0.15],
//                         }}
//                         transition={{
//                             duration: 4,
//                             repeat: Infinity,
//                             ease: "easeInOut",
//                         }}
//                     />

//                     {/* Inner Glow */}

//                     <motion.div
//                         className="
//                             absolute
//                             rounded-full

//                             h-[180px]
//                             w-[180px]

//                             sm:h-[260px]
//                             sm:w-[260px]

//                             bg-emerald-300/25
//                             blur-[80px]
//                         "
//                         animate={{
//                             scale: [1.1, 0.9, 1.1],
//                             opacity: [0.2, 0.45, 0.2],
//                         }}
//                         transition={{
//                             duration: 5,
//                             repeat: Infinity,
//                             ease: "easeInOut",
//                         }}
//                     />

//                     {/* Logo */}

//                     <motion.div
//                         className="relative z-10"
//                         animate={{
//                             y: [-6, 6, -6],
//                             rotate: [-1, 1, -1],
//                         }}
//                         transition={{
//                             duration: 6,
//                             repeat: Infinity,
//                             ease: "easeInOut",
//                         }}
//                     >
//                         <div
//                             className="
//                                 flex
//                                 items-center
//                                 justify-center

//                                 h-28
//                                 w-28

//                                 sm:h-36
//                                 sm:w-36

//                                 md:h-44
//                                 md:w-44

//                                 rounded-full

//                                 bg-white/70

//                                 border
//                                 border-white/60

//                                 backdrop-blur-xl

//                                 shadow-[0_20px_60px_rgba(16,185,129,0.25)]
//                             "
//                         >
//                             {/* Replace with logo */}

//                             <span
//                                 className="
//                                     text-5xl
//                                     font-black
//                                     text-green-700
//                                 "
//                             >
//                                 Z
//                             </span>

//                             {/*
//                             <img
//                                 src={logo}
//                                 alt="Zistea"
//                                 className="w-3/4 h-3/4 object-contain"
//                             />
//                             */}
//                         </div>
//                     </motion.div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }

// export default LoadingOverlay;

import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/logo.png";

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