import type { CardsTypeProps } from "../types/CardsTypeProps";

export function CardHome({
  positionCard,
  titleCard,
  expirienceCard,
  noteCard,
  iconCard,
  ...props
}: Readonly<CardsTypeProps>) {
  return (
    <div
      className={`badge-soft p-6 flex flex-col rounded-box absolute ${positionCard}`}
      {...props}
    >
      <span className="text-gray-400">{titleCard}</span>
      <span className="text-2xl font-semibold">{expirienceCard}</span>
      <div className="flex justify-between gap-2 items-center text-gray-400">
        {noteCard} {iconCard}{" "}
      </div>
    </div>
  );
}
