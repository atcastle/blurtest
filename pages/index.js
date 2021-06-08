import Image from "next/image";
import src from '../public/xps.jpg'
export default function Home() {
  return (
    <Image
      src={src}
      placeholder="blur"
    />
  );
}