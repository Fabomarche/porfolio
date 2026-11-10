import { education } from "../constants"
import { SectionWrapper } from "../hoc"
import { TimelineSection } from "./Experience"

const Education = () => {
  return (
    <TimelineSection
      subText="What I have studied"
      headText="Education."
      items={education}
    />
  )
}

export default SectionWrapper(Education, "education")
