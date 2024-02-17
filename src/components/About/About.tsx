import { MutableRefObject } from "react";

import styles from "./About.module.css";

type AboutProps = {
  scrollToAbout: MutableRefObject<null | HTMLElement>;
};

const About = ({ scrollToAbout }: AboutProps): JSX.Element => {
  return (
    <article className={styles.container} ref={scrollToAbout}>
      <h1 className="heading">About me</h1>
      <p className={styles.text}>
        Hey there👋 I'm Neelam, a self-taught developer with a passion for
        front-end development. My coding journey took an unexpected turn during
        university when I realized my degree wasn't aligning with my career
        goals. Seeking a new path, a friend suggested exploring programming,
        opening up a world of opportunities in the tech field.
      </p>
      <p className={styles.text}>
        Given my background in the arts and my love for painting and drawing,
        front-end development appealed to me. Designing visually appealing and
        user-friendly interfaces provided a platform to express my creativity,
        inspire innovation, and engage in diverse projects that challenged me to
        solve complex problems.
      </p>
      <p className={styles.text}>
        Starting with HTML and CSS, I quickly delved into JavaScript and
        discovered the challenges and joys it brought. Despite the initial
        hurdles, I found immense satisfaction in problem-solving, crafting
        creative solutions, and continually learning new technologies. This
        journey not only strengthened my work ethic and self-confidence, but it
        also helped keep me motivated during my degree, graduating with a 2:1
        and specialized knowledge in front-end development, boasting a robust
        tech stack and an ongoing commitment to expanding my skill set. I am
        enthusiastic about taking on new challenges and staying at the forefront
        of technological advancements.
      </p>
    </article>
  );
};

export default About;
