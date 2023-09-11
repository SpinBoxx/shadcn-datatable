import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return <div className="mx-auto px-8 lg:w-[90%] lg:px-0">{children}</div>;
}
