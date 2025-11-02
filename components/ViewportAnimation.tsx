"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useAnimation,
  Variant,
  Transition,
  HTMLMotionProps,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = HTMLMotionProps<"div"> & {
  on?: Variant;
  off?: Variant;
  threshold?: number;
  once?: boolean;
};

export default function ViewportAnimation({
  on,
  off,
  children,
  threshold,
  once,
  className,
  ...props
}: Props) {
  const [used, setUsed] = useState<boolean>(false);

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: threshold ?? 0.1 });

  useEffect(() => {
    if (inView && !used) {
      controls.start("on");
      if (once !== false) setUsed(true);
    } else if (!inView && !used) {
      controls.start("off");
    }
  }, [controls, inView, used, once]);

  const variants = { on: on ?? {}, off: off ?? {} };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="off"
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
