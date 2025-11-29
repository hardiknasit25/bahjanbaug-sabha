import { useState } from "react";
import { FALLBACK_AVATAR_PLACEHOLDER } from "~/constant/constant";

function ImageComponent({
  src,
  alt,
  className = "",
}: {
  src: string | null;
  alt: string;
  className?: string;
}) {
  const [imageState, setImageState] = useState({
    loaded: false,
    error: false,
  });

  const handleLoad = () => {
    setImageState((prev) => ({ ...prev, loaded: true }));
  };

  const handleError = () => {
    setImageState((prev) => ({ ...prev, error: true }));
  };

  // Logic: Show placeholder if loading OR if there's an error OR if no API src provided
  const showPlaceholder = !imageState.loaded || imageState.error || !src;

  return (
    <div
      className={`relative overflow-hidden p-1 h-[75px] w-[75px] rounded-full border border-primaryColor ${className}`}
    >
      {/* 1. Local Placeholder Image */}
      {showPlaceholder && (
        <img
          src={FALLBACK_AVATAR_PLACEHOLDER}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* 2. API Image (Hidden until loaded) */}
      {src && !imageState.error && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`h-full w-full object-cover transition-opacity duration-300 bg-neutral-800 rounded-full ${
            imageState.loaded ? "opacity-100" : "bg-gray-200 animate-pulse"
          }`}
        />
      )}
    </div>
  );
}

export default ImageComponent;
