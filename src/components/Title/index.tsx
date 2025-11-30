import "./title.css";

import type { ElementType } from "react";

type TitleProps = {
  as?: ElementType;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export function Title({ as: Tag = "h1", ...props }: TitleProps) {
  return (
    <>
      <Tag className="title" {...props}>
        {props.children}
      </Tag>
    </>
  );
}
