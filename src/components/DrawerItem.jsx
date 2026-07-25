function DrawerItem({
  icon: Icon,
  title,
  value,
  href,
  external = true,
}) {
  const handleClick = () => {
    if (!href) return;

    if (href.startsWith("tel:")) {
      window.location.href = href;
      return;
    }

    window.open(href, external ? "_blank" : "_self");
  };

  return (
    <button
      onClick={handleClick}
      className="
        w-full

        flex
        items-center
        gap-3

        rounded-xl

        px-3
        py-2.5

        transition-all
        duration-200

        hover:bg-[#1B1B1B]
        active:scale-[0.98]
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center

          rounded-lg

          bg-[#1C1C1C]

          text-[#D4B46A]
        "
      >
        <Icon size={18} />
      </div>

      <div className="min-w-0 flex flex-col text-left">
        <span className="text-[15px] font-semibold text-[#F6F3EA]">
          {title}
        </span>

        {value && (
          <span className="mt-0.5 text-xs leading-5 text-[#AFA89B] break-words">
            {value}
          </span>
        )}
      </div>
    </button>
  );
}

export default DrawerItem;