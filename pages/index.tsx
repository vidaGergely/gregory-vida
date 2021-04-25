import Head from "next/head";
import Image from "next/image";

export default function Home() {
  if (true) {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="text-2xl animate-bounce ">
          <Image
            src="/uc.png"
            width={200}
            height={200}
            alt="Picture of under construct"
          >
          </Image>
        </div>
      </div>
    );
  }
  else
  {
    return (
      <p>itt</p>
    );
  }


}
