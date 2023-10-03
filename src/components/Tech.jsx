import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import TechItem from "./TechItem"

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-2">
      {technologies.map(technology => (
        <div className="w-28 h-28 text-center flex flex-col items-center " key={technology.name}>
          {/* <BallCanvas icon={technology.icon} /> */}
          <TechItem icon={technology.icon} />
          <span>{technology.name}</span>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "") 