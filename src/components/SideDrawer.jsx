import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import restaurant from "../data/restaurant.json";
import logo from "../assets/logo.webp";

import DrawerItem from "./DrawerItem";

import {
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { MdFeedback, MdVerified } from "react-icons/md";
import { IoClose } from "react-icons/io5";

function SideDrawer({ open, onClose }) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const drawerItems = [
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      value: `${restaurant.address.line1}, ${restaurant.address.line2}`,
      href: restaurant.address.maps,
    },
    {
      icon: FaPhoneAlt,
      title: "Call Us",
      value: restaurant.contact.phone,
      href: `tel:${restaurant.contact.phone}`,
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp Channel",
      href: restaurant.contact.whatsapp,
    },
    {
      icon: FaInstagram,
      title: "Instagram",
      href: restaurant.contact.instagram,
    },
    {
      icon: MdFeedback,
      title: "Suggestions & Complaints",
      href: restaurant.contact.feedback,
    },
    {
      icon: MdVerified,
      title: "FSSAI License",
      value: restaurant.license.fssai,
    },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed
            inset-0
            z-100

            flex
            items-center
            justify-center

            bg-black/70
            backdrop-blur-md

            px-5
          "
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{
              x: "-120%",
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              x: "-120%",
              opacity: 0,
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
            }}
            className="
              relative

              flex
              flex-col

              w-[90%]
              max-w-[340px]

              h-[78vh]

              rounded-[28px]

              bg-[#101010]

              border
              border-[#3A3122]

              shadow-[0_24px_60px_rgba(0,0,0,0.55)]

              p-5
            "
          >
            {/* Close Button */}

            <button
              onClick={onClose}
              className="
                absolute
                top-4
                right-4

                rounded-full
                p-2

                text-[#D4B46A]

                transition-all
                duration-200

                hover:bg-[#1B1B1B]
                hover:rotate-90
              "
            >
              <IoClose size={20} />
            </button>

            {/* Header */}

            <div className="shrink-0 border-b border-[#3A3122] pb-4 text-center">
              <img
                src={logo}
                alt="ZISTEA"
                className="mx-auto h-14 w-14 object-contain"
              />

              <h2 className="mt-2 text-xl font-bold tracking-wide text-[#F6F3EA]">
                {restaurant.name}
              </h2>

              <p className="mt-1 text-sm text-[#D4B46A]">
                {restaurant.tagline}
              </p>

              <p className="mt-1 text-xs text-[#AFA89B]">
                {restaurant.description}
              </p>
            </div>

            {/* Items */}

            <div className="flex-1 flex flex-col justify-evenly py-2">
              {drawerItems.map((item) => (
                <DrawerItem
                  key={item.title}
                  {...item}
                />
              ))}
            </div>

            {/* Footer */}

            <div className="shrink-0 border-t border-[#3A3122] pt-3 text-center">
              <p className="text-xs text-[#7C7468]">
                Made with ❤️ for tea lovers
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SideDrawer;