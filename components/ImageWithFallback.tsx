'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps {
  src: string;
  fallback: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
}

export default function ImageWithFallback({
  src,
  fallback,
  alt,
  fill,
  sizes,
  className,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill={fill}
      sizes={sizes}
      className={className}
      onError={() => setImgSrc(fallback)}
    />
  );
}
