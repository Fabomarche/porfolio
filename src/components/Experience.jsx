import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'

import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"

const iconSizeClass = {
  "10": "w-10 h-10",
  "12": "w-12 h-12",
  "14": "w-14 h-14",
}

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name || experience.title}
          className={`${iconSizeClass[experience.iconSize] || "w-12 h-12"} object-contain rounded-full`}
        />
      </div>}
  >
    <div>
      <h3 className="text-white text-[24px]">
        {experience.title}
      </h3>
      {experience.company_name && (
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      )}
    </div>
    {experience.points?.length > 0 && (
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    )}
  </VerticalTimelineElement>
)

export const TimelineSection = ({ subText, headText, items }) => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>{subText}</p>
        <h2 className={styles.sectionHeadText}>{headText}</h2>
      </motion.div>

      <div className="mt-20 flex flex-col ">
        <VerticalTimeline>
          {items.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

const Experience = () => {
  return (
    <TimelineSection
      subText="What I have done so far"
      headText="Work Experience."
      items={experiences}
    />
  )
}

export default SectionWrapper(Experience, "work")
