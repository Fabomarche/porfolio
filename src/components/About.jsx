import { motion } from 'framer-motion'

import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Full Stack Developer with 5+ years of experience, specialized in React, React Native and TypeScript. I build production mobile apps for iOS, Android and dedicated tablets, with offline mode, Bluetooth LE (FTMS) and ANT+ sensors through native Kotlin modules, and in-app subscriptions. Backend experience with Node.js, Express, NestJS and Django, and AI-assisted development with Cursor, Claude, Codex and MCP.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")
