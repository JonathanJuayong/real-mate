import Image from 'next/image';

export const Logo: React.FC<{height: number}> = ({height}) => {
  const src = "/logo.svg";
  const alt = "real simple";
  const width = height * 3.42;
  return (
    <Image
      src={src}
      height={height}
      width={width}
      priority
    />
  )
}