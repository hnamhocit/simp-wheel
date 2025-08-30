import { type FC, memo, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

import type { WheelColItem } from "../interfaces";
import clsx from "clsx";

interface ColumnProps {
  className?: string;
  itemClassName?: string;
  max?: number;
  items: WheelColItem[];
  length: number;
  onChange: (value: string) => void;
  currentValue: string;
}

const Column: FC<ColumnProps> = ({
  itemClassName,
  className,
  max,
  items,
  length,
  onChange,
  currentValue,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const columnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!columnRef.current) return;
    const el = columnRef.current;

    if (currentValue != "" && !isScrolled && el) {
      const itemHeight = (el.scrollHeight - el.clientHeight) / items.length;
      const offsetHeight = itemHeight / 2;
      const index = items.findIndex((item) => item.value === currentValue);

      el.scrollTo({
        top: offsetHeight + itemHeight * index,
        behavior: "smooth",
      });

      setIsScrolled(true);
    }
  }, [currentValue, items, isScrolled]);

  return (
    <div
      ref={columnRef}
      className={clsx(
        className,
        "flex flex-col overflow-y-scroll h-full shrink-0 scrollbar-hide scroll-smooth snap-y snap-mandatory",
      )}
      style={{ width: 100 / (max ?? length) + "%" }}
      onScroll={(e) => {
        const target = e.currentTarget;
        const itemHeight =
          (target.scrollHeight - target.clientHeight) / items.length;
        const offsetHeight = itemHeight / 2;
        const top = target.scrollTop - offsetHeight;
        const index = Math.ceil(top / itemHeight);

        setActiveIndex(index);
        onChange(items[index].value);
      }}
    >
      <div className="shrink-0 h-1/2"></div>

      {items.map((item, itemIndex) => (
        <motion.button
          whileHover={{ opacity: 0.8 }}
          whileTap={{ scale: 0.95 }}
          key={item.label}
          onClick={(e) => {
            setActiveIndex(itemIndex);

            onChange(item.value);

            e.currentTarget.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }}
          className={clsx(
            itemClassName,
            "block text-center shrink-0 h-12 snap-center rounded-xl cursor-pointer hover:bg-[rgba(0,0,0,.1)] transition-colors",
            (itemIndex === activeIndex - 1 || itemIndex === activeIndex + 1) &&
              "scale-80 text-gray-700",
            (itemIndex <= activeIndex - 2 || itemIndex >= activeIndex + 2) &&
              "scale-60 text-gray-500",
          )}
        >
          {item.label}
        </motion.button>
      ))}

      <div className="shrink-0 h-1/2"></div>
    </div>
  );
};

export default memo(Column);
