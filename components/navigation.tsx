import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default function Navigation() {

  return (

    <div className="
    justify-center
    flex

    items-center
    align-middle

    md:justify-end
    md:h-screen


    lg:justify-end
    lg:h-screen

    xl:justify-end
    xl:h-screen

    fixed
    z-30
    min-w-full
    ">
      <div className="
      inline-grid

      lg:grid-cols-1
      lg:gap-y-20
      lg:mr-4


      md:grid-cols-1
      md:gap-y-20
      md:mr-4

      sm:grid-cols-3
      sm:gap-x-20


      grid-cols-3
      gap-x-20

      rounded-full
      border-2
      my-4
      p-4
      bg-black
      bg-opacity-40
      ">
        <a href="#first">
          <FontAwesomeIcon
            className="transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-125"
            icon={["fas", "home"]} color={"white"} size={"2x"} />
        </a>
        <a href="#second">
          <FontAwesomeIcon
            className="transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-125"
            icon={["fas", "project-diagram"]} color={"white"} size={"2x"} />
        </a>
        <a href="#third">
          <FontAwesomeIcon
            className="transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-125"
            icon={["fas", "address-card"]} color={"white"} size={"2x"} />
        </a>
      </div>
    </div>

  );
}
