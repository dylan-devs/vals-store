"use client";

import * as motion from "motion/react-client";
import { ReactNode, useState } from "react";

interface CarouselClientProps {
  children: ReactNode;
}

export function CarouselClient({ children }: CarouselClientProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.ul
      className="flex gap-4"
      initial={{ x: 0 }}
      animate={{ x: isHovered ? "undefined" : "-33.333%" }}
      transition={{
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </motion.ul>
  );
}
