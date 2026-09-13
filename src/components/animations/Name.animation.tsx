import { forwardRef, type ReactNode, type Ref } from "react";

export const TelplateComponentAnimate = forwardRef(
  ({ children }: { children: ReactNode }, ref: Ref<HTMLDivElement>) => {
    return <div ref={ref}>{children}</div>;
  },
);
//const ComponentAnimate = motion(TelplateComponentAnimate); pour l'utiliser
