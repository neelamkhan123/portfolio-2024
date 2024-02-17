import ProjectTemplate from "./ProjectTemplate";

import { recipeBlog } from "../../project-data";
import { ecommerceSite } from "../../project-data";
import { weatherForecast } from "../../project-data";
import { toDoList } from "../../project-data";
import { tipCalculator } from "../../project-data";
import { gymWebDesign } from "../../project-data";
import { igDesignTemplate } from "../../project-data";
import { trivia } from "../../project-data";
import { calculator } from "../../project-data";

import { MutableRefObject } from "react";

type ProjectProps = {
  scrollToProjects: MutableRefObject<null | HTMLElement>;
};

const Projects = ({ scrollToProjects }: ProjectProps): JSX.Element => {
  return (
    <article ref={scrollToProjects}>
      <h1 className="heading">Projects</h1>
      <ProjectTemplate
        title={recipeBlog.title}
        image={recipeBlog.image}
        languages={recipeBlog.languages}
        description={recipeBlog.description}
        links={recipeBlog.links}
      />
      <ProjectTemplate
        title={ecommerceSite.title}
        image={ecommerceSite.image}
        languages={ecommerceSite.languages}
        description={ecommerceSite.description}
        links={ecommerceSite.links}
      />
      <ProjectTemplate
        title={weatherForecast.title}
        image={weatherForecast.image}
        languages={weatherForecast.languages}
        description={weatherForecast.description}
        links={weatherForecast.links}
      />
      <ProjectTemplate
        title={toDoList.title}
        image={toDoList.image}
        languages={toDoList.languages}
        description={toDoList.description}
        links={toDoList.links}
      />
      <ProjectTemplate
        title={tipCalculator.title}
        image={tipCalculator.image}
        languages={tipCalculator.languages}
        description={tipCalculator.description}
        links={tipCalculator.links}
      />
      <ProjectTemplate
        title={gymWebDesign.title}
        image={gymWebDesign.image}
        languages={gymWebDesign.languages}
        description={gymWebDesign.description}
        links={gymWebDesign.links}
      />
      <ProjectTemplate
        title={igDesignTemplate.title}
        image={igDesignTemplate.image}
        languages={igDesignTemplate.languages}
        description={igDesignTemplate.description}
        links={igDesignTemplate.links}
      />
      <ProjectTemplate
        title={trivia.title}
        image={trivia.image}
        languages={trivia.languages}
        description={trivia.description}
        links={trivia.links}
      />
      <ProjectTemplate
        title={calculator.title}
        image={calculator.image}
        languages={calculator.languages}
        description={calculator.description}
        links={calculator.links}
      />
    </article>
  );
};

export default Projects;
