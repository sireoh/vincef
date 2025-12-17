import * as utils from "./utils/utils"
import { data } from "./data/data";
import Image from "next/image"

export const Projects = () => {
  return (
    <section className="flex flex-col items-center gap-12 px-4 text-base-content md:px-16 lg:px-24" id="projects">
      <h1 className="text-7xl">Projects</h1>
      <div className="gif flex justify-center">
        <Image width={300} height={259} alt="LaptopProjects" src="/media/laptop.webp" />
      </div>

      {utils.generateProjects(data.projects)}

    </section>
  )
}