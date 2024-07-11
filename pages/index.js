import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      style={{ backgroundImage: "url('/background.png')" }}
      className={`flex min-h-screen flex-col items-center bg-cover bg-center ${inter.className}`}
    >
      <div className="w-full justify-between items-center mt-1 p-2 flex flex-row">
        <div className="w-full">
          <Link href="/">
            <Image
              src="/logo.svg"
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
              src="/telegram.svg"
              alt="tele"
              width={80}
              height={80}
              className="w-[30px] lg:w-[50px]"
            />
          </Link>
          <Link target="_blank" href="https://x.com/brogieonbase?s=21">
            <Image
              src="/x.svg"
              alt="x"
              width={80}
              height={80}
              className="w-[32px] lg:w-[50px]"
            />
          </Link>
          <Link target="_blank" href="#">
            <Image
              src="/buy.svg"
              alt="buy"
              width={80}
              height={80}
              className="w-[42px] lg:w-[70px]"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-row justify-between w-full mt-2">
        <div className="w-full">
          <Image
            src="/brogpath.png"
            alt="path"
            width={80}
            height={80}
            className="w-[615px] lg:w-[550px]"
          />
        </div>
        <div className="w-full">
          <Image
            src="/file7.png"
            alt="frog"
            width={80}
            height={80}
            className="w-[600px] lg:w-[550px]"
          />
        </div>
      </div>

      <div className="w-full relative">
        <Image
          src="/leaf.png"
          alt="path"
          width={80}
          height={80}
          className="w-full h-[360px] lg:h-[50%] md:h-[500px]"
        />
        <Image
          src="/cup.svg"
          alt="path"
          width={80}
          height={80}
          className="absolute w-[180px] h-[274px] object-contain md:h-[350px] md:w-[350px] lg:w-[500px] lg:h-[700px] top-[18%] left-[28%] lg:left-[35%] md:left-[30%]"
        />
      </div>

      <div className="w-full justify-center items-center flex my-8">
        <Image
          src="/tokenomics.png"
          alt="path"
          width={80}
          height={80}
          className="object-contain w-[55%] h-[35px] md:h-[63px]"
        />
      </div>

      <div className="relative w-full justify-center items-center flex mt-2">
        <Image
          src="/file3.png"
          alt="ball"
          width={80}
          height={80}
          className="object-fit w-[150px] absolute -top-[70px] -left-[40px] lg:top-[0px] lg:w-[400px] lg:-left-[55px]"
        />
        <Image
          src="/bg.png"
          alt="path"
          width={80}
          height={80}
          className="object-fit w-[85%] h-[fit] lg:h-fit"
        />
        <Image
          src="/lookup.png"
          alt="lookup"
          width={80}
          height={80}
          className="object-fit w-[130px] absolute -bottom-[30px] -right-[0px] lg:w-[400px]"
        />
      </div>
      <div className="w-full justify-center items-center flex my-8 lg:mt-40">
        <Image
          src="/howto.png"
          alt="path"
          width={80}
          height={80}
          className="object-contain w-[55%] h-[35px] md:h-[63px]"
        />
      </div>
      <div className="w-full justify-center items-center flex-row mt-4 grid grid-cols-2 lg:grid-cols-4 mx-auto lg:mt-40">
        <Image
          src="/clip1.png"
          alt="path"
          width={80}
          height={80}
          className="object-contain w-full h-[248px] lg:h-[350px]"
        />
        <Image
          src="/clip2.png"
          alt="path"
          width={80}
          height={80}
          className="object-contain w-full h-[248px] lg:h-[350px]"
        />
        <Image
          src="/clip3.png"
          alt="path"
          width={80}
          height={80}
          className="object-contain w-full h-[248px] lg:h-[350px]"
        />
        <Image
          src="/clip4.png"
          alt="path"
          width={80}
          height={80}
          className="object-contain w-full h-[248px] lg:h-[350px]"
        />
      </div>

      <div className="w-full flex justify-center flex-col lg:flex-row lg:justify-around space-y-8 lg:space-x-4 my-4 lg:mt-20">
        <div>
          <Image
            src="/read.png"
            alt="path"
            width={80}
            height={80}
            className="object-contain w-full h-[228px]  lg:h-[300px]"
          />
        </div>
        <div className="flex flex-col items-center space-y-5">
          <Link href="#">
            <Image
              src="/brog.png"
              alt="brog"
              width={80}
              height={80}
              className="object-contain w-[174px] h-[35px]"
            />
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

      <div className="w-full">
        <Image
          src="/water.png"
          alt="water"
          width={80}
          height={80}
          className="object-contain w-full h-[]"
        />
      </div>
    </main>
  );
}
