import { Link } from "react-router-dom";

import styles from "./ProjectTemplate.module.css";

export type ProjectTemplateProps = {
  title: string;
  image: string;
  languages: {
    language: string;
    className: string;
  }[];
  description: string;
  links: {
    gitHub: string;
    website: string;
  }[];
};

const ProjectTemplate = ({
  title,
  image,
  languages,
  description,
  links,
}: ProjectTemplateProps): JSX.Element => {
  return (
    <article className={styles.container}>
      <section className={styles["thumb-container"]}>
        <div className={styles["image-wrapper"]}>
          <img src={image} alt="Project Snapshot" className={styles.image} />
        </div>
        <div className={styles["button-container"]}>
          <ul className={styles.languages}>
            {languages.map(
              (lang: { language: string; className: string }, index) => (
                <li
                  key={index}
                  className={`${lang.className} ${styles.language}`}
                >
                  {lang.language}
                </li>
              )
            )}
          </ul>
          <section className={styles.links}>
            {links.map((link: { gitHub: string; website: string }, index) => (
              <div className={styles["links-container"]} key={index}>
                <Link target="_blank" to={link.gitHub} className={styles.link}>
                  <i className="fa-brands fa-github"></i>
                </Link>

                <Link target="_blank" to={link.website} className={styles.link}>
                  <i className="fa-solid fa-link"></i>
                </Link>
              </div>
            ))}
          </section>
        </div>
      </section>

      <section className={styles["text-container"]}>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.text}>{description}</p>
      </section>
    </article>
  );
};

export default ProjectTemplate;
