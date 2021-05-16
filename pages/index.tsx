import Image from "next/image";
import First from "../components/first";
import Second from "../components/second";
import Third from "../components/third";
import Navigation from "../components/navigation";

export default function Index({ underConstruction }) {
  if (underConstruction == true) {
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

  return (
    <div>
      <Navigation />
      <First />
      <Second />
      <Third />
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      underConstruction: process.env.IN_PROGRESS,
    },
  };
};
