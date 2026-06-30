import React, { useState, useRef } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, className = '' }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleInteractionStart = (clientX: number) => {
    setIsDragging(true);
    handleMove(clientX);
  };

  return (
    <div 
      className={`relative w-full h-full overflow-hidden cursor-ew-resize select-none group ${className}`}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchEnd={() => setIsDragging(false)}
      onMouseDown={(e) => handleInteractionStart(e.clientX)}
      onTouchStart={(e) => handleInteractionStart(e.touches[0].clientX)}
    >
      {/* After image (background) */}
      <img src={afterImage} alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <div className="absolute top-4 right-4 bg-brand-brown/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm pointer-events-none">After</div>
      
      {/* Before image (clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={beforeImage} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute top-4 left-4 bg-brand-brown/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">Before</div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_15px_rgba(0,0,0,0.5)] pointer-events-none flex items-center justify-center transition-opacity duration-300"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
          <div className="flex space-x-1">
             <div className="w-1 h-4 bg-brand-brown/40 rounded-full"></div>
             <div className="w-1 h-4 bg-brand-brown/40 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
