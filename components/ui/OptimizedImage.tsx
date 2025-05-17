// components/OptimizedImage.tsx
import Image, { ImageProps } from 'next/image';
import React from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  folder: string;
  src: string;
  alt: string;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  folder,
  src,
  alt,
  width,
  height,
  priority = false,
  ...props
}) => {
  // Validate the image extension
  const validExtensions = ['.webp', '.avif', '.png', '.jpg', '.jpeg'];
  const fileExtension = src.substring(src.lastIndexOf('.')).toLowerCase();
  
  if (!validExtensions.includes(fileExtension)) {
    console.warn(`Image ${src} has non-optimal extension. Recommended: .webp`);
  }

  return (
    <Image
      src={`/assets/images/${folder}/${src}`}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      {...props}
    />
  );
};

export default OptimizedImage;