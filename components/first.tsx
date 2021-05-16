import Image from "next/image";

export default function First() {

    return (
      <div id="first" className="flex h-screen justify-center items-center z-0">
        <Image
          src="/first.jpg"
          layout={"fill"}
          alt="Picture of under construct"
        >
        </Image>
      </div>
    );
}
