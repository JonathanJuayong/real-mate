import Image from 'next/image';
import { Box } from '@chakra-ui/react';

export const Logo: React.FC<{height: number, white?: boolean}> = ({height, white}) => {
  const src = white ? "/logo-white.svg" : "/logo.svg";
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