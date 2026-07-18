// components/CursorGlow.tsx

import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
  <>
    <div
      className="fixed pointer-events-none z-9999 rounded-full"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        width: 50,
        height: 50,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(34,197,94,0.45) 0%, rgba(34,197,94,0.24) 35%, rgba(34,197,94,0.10) 60%, rgba(34,197,94,0) 80%)",
        filter: "blur(15px)",
      }}
    />
  </>
);
};

export default CursorGlow;