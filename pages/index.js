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
              className="w-[70px] md:w-[100px]"
            />
          </Link>
        </div>

        <div className="w-full flex flex-row items-center justify-end">
          <Link target="_blank" href="https://t.me/">
            <Image
              src="/telegram.svg"
              alt="tele"
              width={80}
              height={80}
              className="w-[30px] md:w-[50px]"
            />
          </Link>
          <Link target="_blank" href="https://x.com/">
            <Image
              src="/x.svg"
              alt="x"
              width={80}
              height={80}
              className="w-[32px] md:w-[50px]"
            />
          </Link>
          <Link target="_blank" href="https://solana.com/">
            <Image
              src="/buy.svg"
              alt="buy"
              width={80}
              height={80}
              className="w-[42px] md:w-[70px]"
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
            className="w-[615px] md:w-[550px]"
          />
        </div>
        <div className="w-full">
          <Image
            src="/file1.png"
            alt="frog"
            width={80}
            height={80}
            className="w-[600px] md:w-[550px]"
          />
        </div>
      </div>

      <div className="w-full relative">
        <Image
          src="/leaf.png"
          alt="path"
          width={80}
          height={80}
          className="w-full h-[360px] md:h-[50%]"
        />
        <Image
          src="/cup.svg"
          alt="path"
          width={80}
          height={80}
          className="absolute w-[180px] h-[274px] object-contain md:w-[800px] md:h-[full] top-[18%] left-[28%]"
        />
      </div>

      <div className="w-full justify-center items-center flex mt-3">
        <Image
          src="/tokenomics.png"
          alt="path"
          width={80}
          height={80}
          className="object-contain w-[55%] h-[63px]"
        />
      </div>

      <div className="relative w-full justify-center items-center flex mt-2">
        <Image
          src="/ball.png"
          alt="ball"
          width={80}
          height={80}
          className="object-fit w-[150px] absolute -top-[70px] -left-[40px]"
        />
        <Image
          src="/bg.png"
          alt="path"
          width={80}
          height={80}
          className="object-fit w-[85%] h-[200px]"
        />
        <Image
          src="/lookup.png"
          alt="lookup"
          width={80}
          height={80}
          className="object-fit w-[130px] absolute -bottom-[30px] -right-[0px]"
        />
      </div>
      <div className="w-full justify-center items-center flex mt-8">
        <Image
          src="/howto.png"
          alt="path"
          width={80}
          height={80}
          className="object-contain w-[55%] h-[35px]"
        />
      </div>
      <div className="w-full justify-center items-center flex-row mt-4 grid grid-cols-2 md:grid-cols-4 mx-auto">
        <Image
          src="/clip1.png"
          alt="path"
          width={80}
          height={80}
          className="object-contain w-full h-[248px]"
        />
        <Image
          src="/clip2.png"
          alt="path"
          width={80}
          height={80}
          className="object-contain w-full h-[248px]"
        />
        <Image
          src="/clip3.png"
          alt="path"
          width={80}
          height={80}
          className="object-contain w-full h-[248px]"
        />
        <Image
          src="/clip4.png"
          alt="path"
          width={80}
          height={80}
          className="object-contain w-full h-[248px]"
        />
      </div>

      <div className="w-full justify-center flex-col md:flex-row space-y-8 md:space-x-4">
        <div>
          <Image
            src="/read.png"
            alt="path"
            width={80}
            height={80}
            className="object-contain w-full h-[228px]"
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
          <Link href="">
            <Image
              src="/telegram.svg"
              alt="telegram"
              width={80}
              height={80}
              className="object-contain w-[80px] md:w-[154px]"
            />
          </Link>
          <Link href="">
            {" "}
            <Image
              src="/x.svg"
              alt="x"
              width={80}
              height={80}
              className="object-contain w-[80px] md:w-[137px]"
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
