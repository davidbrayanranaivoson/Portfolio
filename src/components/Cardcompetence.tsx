import type { CardsTypeProps } from "../types/CardsTypeProps.tx";

export function CardCompetence({
  langage,
  niveau,
  iconCard,
  ...props
}: Readonly<CardCompetenceTypeProps>) {
  return (
    <div
      className={`badge-soft opacity-90 p-6 flex flex-col rounded-box absolute`}
      {...props}
    >
      <span className="text-gray-400">{titleCard}</span>
      <span className="text-2xl font-semibold opacity-100">{}</span>
      <div className="flex justify-between gap-2 items-center text-gray-400">
        {noteCard} {iconCard}{" "}
      </div>
    </div>
  );
}
