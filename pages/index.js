import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import ResponsiveImage from "@/components/ResponsiveImage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      style={{ backgroundImage: "url('/bg_1.png')" }}
      className={`flex min-h-screen flex-col items-center bg-cover bg-center ${inter.className}`}
    >
      <div className="w-full justify-between items-center mt-1 p-2 flex flex-row">
        <div className="w-full">
          <Link href="/">
            <Image
              src="/file (1).png"
              alt="logo"
              width={80}
              height={80}
              className="w-[70px] lg:w-[100px]"
            />
          </Link>
        </div>

        <div className="w-full flex flex-row items-center justify-end">
          <Link target="_blank" href="https://t.me/brogieonbase">
            <Image
              src="/file (4).png"
              alt="tele"
              width={80}
              height={80}
              className="w-[30px] lg:w-[50px]"
            />
          </Link>
          <Link target="_blank" href="https://x.com/brogieonbase?s=21">
            <Image
              src="/file (5).png"
              alt="x"
              width={80}
              height={80}
              className="w-[32px] lg:w-[50px]"
            />
          </Link>
          <Link target="_blank" href="#">
            <Image
              src="/file (3).png"
              alt="buy"
              width={80}
              height={80}
              className="w-[42px] lg:w-[70px]"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-row justify-between w-full mt-10">
        <div className="w-full">
          <ResponsiveImage
            src="/big logo rainbow.png"
            alt="Rainbow Logo"
            width={1920}
            height={1080}
            className="w-[215px] lg:w-[250px] aspect-auto"
          />
        </div>
        <div className="w-full">
          <ResponsiveImage
            src="/file7.png"
            alt="frog"
            width={1620}
            height={780}
            className="w-[150px] lg:w-[180px] aspect-auto"
          />
        </div>
      </div>

      <div className="w-full relative">
        <ResponsiveImage
          src="/leaf.png"
          alt="leaf"
          width={1620}
          height={780}
          className="w-[150px] lg:w-[180px] aspect-auto"
        />
        <ResponsiveImage
          src="/art assets page 2.png"
          alt="cup"
          width={1620}
          height={780}
          layout="intrinsic"
          className="w-[180px] h-[274px] md:h-[350px] md:w-[350px] lg:w-[500px] lg:h-[700px] aspect-auto absolute top-[18%] left-[28%] md:left-[32%] lg:top-[22%] lg:left-[32%]"
        />
      </div>

      <div className="w-full justify-center items-center flex my-8 text-[#0059e4] patrick text-3xl md:text-4xl lg:text-6xl">
        BROG TOKENOMICS
      </div>

      <div className="relative w-full justify-center items-center flex mt-2">
        <ResponsiveImage
          src="/assets art page 3 .png"
          alt="assets"
          width={1620}
          height={780}
          layout="intrinsic"
          className="object-fit w-[90%] h-auto mx-auto"
        />
      </div>
      <div className="w-full justify-center items-center flex my-8 text-[#0059e4] patrick text-3xl md:text-3xl lg:text-6xl">
        HOW TO BUY
      </div>
      <div className="w-full justify-center items-center flex-row mt-12 grid grid-cols-2 lg:grid-cols-4 mx-auto">
        <ResponsiveImage
          src="/assets art 1.png"
          alt="assets"
          width={1620}
          height={780}
          layout="intrinsic"
          className="object-fit w-[93%] h-auto mx-auto"
        />
        <ResponsiveImage
          src="/assets art 2.png"
          alt="assets"
          width={1620}
          height={780}
          layout="intrinsic"
          className="object-fit w-[100%] h-auto mx-auto"
        />
        <ResponsiveImage
          src="/assets art 3.png"
          alt="assets"
          width={1620}
          height={780}
          layout="intrinsic"
          className="object-fit w-[83%] h-auto mx-auto"
        />
        <ResponsiveImage
          src="/assets art 4.png"
          alt="assets"
          width={1620}
          height={780}
          layout="intrinsic"
          className="object-fit w-[95%] h-auto mx-auto"
        />
      </div>

      <div className="w-full flex justify-center items-center flex-col lg:flex-row lg:justify-around space-y-8 lg:space-x-4 my-4 lg:mt-20">
        <div className="mt-10">
          <ResponsiveImage
            src="/Karya_Seni_Tanpa_Judul-12.png"
            alt="read"
            width={1620}
            height={780}
            layout="intrinsic"
            className="object-fit w-[90%] h-auto mx-auto"
          />
          {/* <Image

            alt="path"
            width={80}
            height={80}
            className="object-contain w-full h-[228px]  lg:h-[300px]"
          /> */}
        </div>
        <div className="flex flex-col items-center space-y-5">
          <Link href="#">
            <div className="w-full justify-center items-center flex my-8 lg:mt-40 text-[#0059e4] patrick text-3xl md:text-4xl lg:text-6xl">
              BECOME BROG
            </div>
          </Link>
          <Link target="_blank" href="https://t.me/brogieonbase">
            <Image
              src="/telegram.svg"
              alt="telegram"
              width={80}
              height={80}
              className="object-contain w-[80px] lg:w-[154px]"
            />
          </Link>
          <Link target="_blank" href="https://x.com/brogieonbase?s=21">
            <Image
              src="/x.svg"
              alt="x"
              width={80}
              height={80}
              className="object-contain w-[80px] lg:w-[137px]"
            />
          </Link>
        </div>
      </div>

      <div className="w-full pt-10">
        <ResponsiveImage
          src="/art background.png"
          alt="water"
          width={80}
          height={80}
          className="object-contain w-full h-[]"
        />
      </div>
    </main>
  );
}
