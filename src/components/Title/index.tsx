import "./title.css";

import type { ElementType } from "react";

type TitleProps = {
  as?: ElementType;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export function Title({ as: Tag = "h1", ...props }: TitleProps) {
  return (
    <>
      <Tag className="title h1 h2 h3 h4 h5 h6" {...props}>
        {props.children}
      </Tag>
    </>
  );
}
