"use client";

import Image from "next/image";
import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 36 }) => {
  return (
    <Image
      src="/logo.png"
      alt="CosLynx Logo"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
};

export default Logo;
