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
        gap-4

        rounded-2xl

        px-4
        py-4

        transition-all
        duration-200

        hover:bg-[#1B1B1B]
        active:scale-[0.98]
      "
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center

          rounded-xl

          bg-[#1C1C1C]

          text-[#D4B46A]
        "
      >
        <Icon size={22} />
      </div>

      <div className="flex flex-col text-left">
        <span className="font-medium text-[#F6F3EA]">
          {title}
        </span>

        {value && (
          <span className="mt-1 text-sm text-[#AFA89B]">
            {value}
          </span>
        )}
      </div>
    </button>
  );
}

export default DrawerItem;