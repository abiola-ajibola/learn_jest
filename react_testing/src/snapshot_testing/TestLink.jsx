import { useState } from "react";

export default function TestLink({ url, children }) {
  const [hover, setHover] = useState("normal");

  const handleMouseEnter = () => setHover("hover");
  const handleMouseLeave = () => setHover("normal");

  return (
    <a
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href={url}
      className={hover}
    >
      {children}
    </a>
  );
}
