import type React from "react";
import "./card.css";

export function Card(props: {
  children: React.ReactNode;
  styles: React.CSSProperties;
  img?: string;
}) {
  return (
    <div style={props.styles} className="card">
      {props.img && (
        <img
          src={props.img}
          style={{ height: "auto", width: "100%" }}
          alt="card image"
        />
      )}
      {props.children}
    </div>
  );
}
