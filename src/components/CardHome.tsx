import { motion } from "framer-motion";
import type { CardsTypeProps } from "../types/CardsTypeProps.ts";

export function CardHome({
  positionCard,
  titleCard,
  expirienceCard,
  noteCard,
  iconCard,
  ...props
}: Readonly<CardsTypeProps>) {
  return (
    <motion.div
      className={`badge-soft p-6 flex flex-col rounded-box absolute ${positionCard}`}
      {...props}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 0.9, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      style={{ zIndex: 51 }}
    >
      <span className="text-gray-400">{titleCard}</span>
      <span className="text-2xl font-semibold opacity-100">
        {expirienceCard}
      </span>
      <div className="flex justify-between gap-2 items-center text-gray-400">
        {noteCard} {iconCard}{" "}
      </div>
    </motion.div>
  );
}
