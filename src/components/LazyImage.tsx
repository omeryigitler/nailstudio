import React, { useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  placeholderColor?: string;
  wrapperClassName?: string;
  className?: string;
}

export default function LazyImage({ 
  src,
  alt,
  placeholderColor = 'bg-brand-cream', 
  wrapperClassName = '',
  className = '', 
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative w-full h-full overflow-hidden ${placeholderColor} ${wrapperClassName}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
          isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-xl scale-110'
        } ${className}`}
      />
    </div>
  );
}
