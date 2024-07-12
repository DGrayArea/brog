import Image from "next/image";

const ResponsiveImage = ({
  src,
  alt,
  width,
  height,
  className,
  layout = "responsive",
}) => {
  return (
    <div className="w-full h-full">
      <Image
        src={src}
        alt={alt}
        layout={layout}
        width={width}
        height={height}
        className={`object-cover ${className}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default ResponsiveImage;
