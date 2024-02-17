import { ProjectTemplateProps } from "./components/Projects/ProjectTemplate";

import recipeBlogImg from "./Images/showcase.jpg";
import ecommerceSiteImg from "./Images/cozy.png";
import weatherForecastImg from "./Images/weather.png";
import toDoListImg from "./Images/todolist.png";
import tipCalculatorImg from "./Images/tipcalculator.png";
import gymWebDesignImg from "./Images/femgym.png";
import igDesignTempImg from "./Images/instagram.png";
import calculatorImg from "./Images/calculator.png";
import triviaImg from "./Images/trivia.png";

// Recipe Blog
export const recipeBlog: ProjectTemplateProps = {
  title: "Recipe Blog",
  image: recipeBlogImg,
  languages: [
    {
      language: "TypeScript",
      className: "typescript",
    },
    {
      language: "React",
      className: "react",
    },
    {
      language: "CSS",
      className: "css",
    },
    {
      language: "HTML",
      className: "html",
    },
  ],
  description:
    "I am pleased to present my latest project, a sophisticated recipe blog site designed to emulate a social media platform. The platform includes robust user authentication features implemented through Firebase, providing a secure and seamless experience for users. In an ongoing effort to enhance the quality of my projects, I have not only integrated TypeScript into this endeavor but have also ensured that previously conceptualized features are now fully functional. Realizing the importance of user authentication, I leveraged the Firebase API to implement authentication processes that enable content and feature accessibility based on user permissions, thereby ensuring a secure and personalized experience. To streamline the management of state across the application, I employed the context API, centralizing state management for improved code readability and maintainability.This project distinguishes itself by utilizing data fetched from an API, creating a more authentic user experience with diverse content to explore. Users can seamlessly post recipes, manage them through their personalized account pages, and bookmark recipes discovered on the explore page. All data is efficiently saved and retrieved from local storage, contributing to a seamless and responsive user interface.",
  links: [
    {
      gitHub: "https://github.com/neelamkhan123/food-blog",
      website: "https://github.com/neelamkhan123/food-blog",
    },
  ],
};

// Ecommerce Site
export const ecommerceSite: ProjectTemplateProps = {
  title: "Ecommerce Site",
  image: ecommerceSiteImg,
  languages: [
    {
      language: "JavaScript",
      className: "javascript",
    },
    {
      language: "React",
      className: "react",
    },
    {
      language: "CSS",
      className: "css",
    },
    {
      language: "HTML",
      className: "html",
    },
  ],
  description:
    "This project was conceived with the objective of emulating an e-commerce website specializing in the sale of 'green furniture' products. It offers users the capability to seamlessly manage their wishlists and shopping carts, in addition to exploring the available product range. Initially developed using Vanilla JS, the project faced challenges that resulted in it functioning more as a design template rather than a fully operational website. Driven by a commitment to refining my JavaScript skills and inspired by a newfound proficiency in React, I embarked on a comprehensive re-creation of the project from scratch. This effort aimed to address past issues and enhance the overall efficiency of the codebase. The adoption of React facilitated the decomposition of the code into modular components, promoting a more organized structure and the creation of reusable elements. This architectural improvement significantly enhanced code readability and maintainability. Moreover, revisiting the project with an enhanced understanding of JavaScript concepts, such as the implementation of the `createSlice()` method for creating actions, proved instrumental in developing a more robust codebase. Leveraging cleaner methods for state management and data storage, I successfully overcame previous challenges. React's expansive feature set further empowered me to address and resolve previous issues, contributing to the overall advancement of the project.",
  links: [
    {
      gitHub: "https://github.com/neelamkhan123/cozy-ecommerce-site-react",
      website: "https://cozy-react-neelam.netlify.app/",
    },
  ],
};

// Weather Forecast
export const weatherForecast: ProjectTemplateProps = {
  title: "Weather Forecast",
  image: weatherForecastImg,
  languages: [
    {
      language: "JavaScript",
      className: "javascript",
    },
    {
      language: "CSS",
      className: "css",
    },
    {
      language: "SASS/SCSS",
      className: "sass",
    },
    {
      language: "HTML",
      className: "html",
    },
  ],
  description:
    " This project serves the purpose of enabling users to seamlessly search for their desired locations and obtain real-time weather forecasts. The associated API offers an extensive array of locations for users to choose from. Upon selection, the application provides pertinent information including the city's current time, country or region, present temperature, upcoming weather conditions for the next few days, and hourly updates spanning 24 hours from the time of the search. Additionally, the website dynamically adjusts its primary background color based on the local time in the selected city or country, incorporating appropriate greetings to enhance the user's experience with a sense of personalization. I used Vanilla JS for this project, my first time using an API was difficult due to not being able to find an API that had all the features I was looking for and still being free, so I had to really use my JavaScript to work around the issues.",
  links: [
    {
      gitHub: "https://github.com/neelamkhan123/weather-webapp",
      website: "https://weather-webapp-neelam.netlify.app/",
    },
  ],
};

// To-Do List
export const toDoList: ProjectTemplateProps = {
  title: "To Do List",
  image: toDoListImg,
  languages: [
    {
      language: "JavaScript",
      className: "javascript",
    },
    {
      language: "React",
      className: "react",
    },
    {
      language: "CSS",
      className: "css",
    },
    {
      language: "HTML",
      className: "html",
    },
  ],
  description:
    "I revamped this project by adopting React instead of relying solely on Vanilla JS, resulting in enhancements to both its UI design and, more significantly, the underlying code structure. From a visual perspective, this iteration surpasses its predecessor (https://to-do-list-neelam.netlify.app/), showcasing a more aesthetically pleasing interface characterized by vibrant colors, engaging background animations, and an improved utilization of font shading. In transitioning to React for my inaugural project with the framework, my primary objective was to leverage its component structure to elevate the overall organization of my code. I meticulously partitioned the requisite sections into distinct components, ensuring each component avoided excessive code, thus enhancing readability and maintainability— a departure from the bulkiness observed in my previous projects. Functionality-wise, users can seamlessly add new tasks by clicking the plus button, inputting task details along with a deadline, and witnessing their tasks neatly listed in the original notepad format. Task entries prominently display their respective deadlines, and users have the capability to delete or mark tasks as completed by checking them off, observing the task disappear accordingly.    ",
  links: [
    {
      gitHub: "https://github.com/neelamkhan123/react-to-do-list",
      website: "https://to-do-list-react-neelam.netlify.app/",
    },
  ],
};

// Tip Calculator
export const tipCalculator: ProjectTemplateProps = {
  title: "Tip Calculator",
  image: tipCalculatorImg,
  languages: [
    {
      language: "JavaScript",
      className: "javascript",
    },
    {
      language: "CSS",
      className: "css",
    },
    {
      language: "SASS/SCSS",
      className: "sass",
    },
    {
      language: "HTML",
      className: "html",
    },
  ],
  description:
    "This application serves as a straightforward tip calculator, enabling users to input their total bill and determine the tip based on their specified percentage. Additionally, the application facilitates the distribution of costs among multiple individuals, presenting the tip amount and total cost, inclusive of tip, for each selected number of people. Constructed using JavaScript, this project was conceived as a means to assess and showcase both algorithmic and design proficiencies. The algorithmic aspect involves the accurate computation of tip amounts and total costs through the utilization of native JavaScript methods. In terms of design, a deliberate choice was made to adopt a simplistic aesthetic, resembling an American yellow notepad, with font selections aimed at achieving an unadorned appearance.",
  links: [
    {
      gitHub: "https://github.com/neelamkhan123/tip-calculator",
      website: "https://tip-calculator-neelam.netlify.app/",
    },
  ],
};

// Gym Web Design Template
export const gymWebDesign: ProjectTemplateProps = {
  title: "Landing Page",
  image: gymWebDesignImg,
  languages: [
    {
      language: "JavaScript",
      className: "javascript",
    },
    {
      language: "CSS",
      className: "css",
    },
    {
      language: "SASS/SCSS",
      className: "sass",
    },
    {
      language: "HTML",
      className: "html",
    },
  ],
  description:
    "This landing page represents my inaugural independent project, drawing inspiration from the PureGym website and adapting it to conceptualize a female-only gym. The project encompasses three distinct pages: a landing page, a memberships page, and a login page. Primarily undertaken as an exercise to assess and refine my HTML and CSS/SASS competencies, the site lacks functional features but places a strong emphasis on design, reflecting my evolving skills.Despite the absence of functional elements, the design aspect is entirely crafted by me, reflecting an improvement in my skills over time. Noteworthy features include a functional sticky navigation bar and footer, pivotal components for any website. The landing page strategically positions a search bar at the center of the hero section, a common practice in gym websites. As users scroll, they encounter an image gallery, an additional benefits section, and the sole incorporation of JavaScript in the testimonials section, featuring a functioning slider. All imagery has been meticulously selected by me from Google, emphasizing my discerning eye for aesthetics and a nuanced understanding of the target audience. The second page showcases various membership packages, inspired by PureGym, serving as an excellent exercise for honing CSS skills, necessitating intricate positioning and utility classes to maintain the site's consistent aesthetic. Finally, the login page, while non-functional, provides an additional avenue for CSS practice. Despite being my initial project, I am content with the outcome, recognizing the growth and refinement in my abilities.",
  links: [
    {
      gitHub: "https://github.com/neelamkhan123/gym-website",
      website: "https://fem-gym-neelam.netlify.app/",
    },
  ],
};

// Instagram Design Template
export const igDesignTemplate: ProjectTemplateProps = {
  title: "Instagram Design Template",
  image: igDesignTempImg,
  languages: [
    {
      language: "JavaScript",
      className: "javascript",
    },
    {
      language: "CSS",
      className: "css",
    },
    {
      language: "SASS/SCSS",
      className: "sass",
    },
    {
      language: "HTML",
      className: "html",
    },
  ],
  description:
    "I developed this project some time ago with the intention of showcasing my ability to create applications based on employer-provided designs, typically originating from Figma or similar platforms. This Instagram clone comprises various pages meticulously designed to replicate the interface of Instagram as it existed during the project's inception. The user journey begins with a login page, offering access to the entirety of the site upon clicking the 'log in' button, subsequently leading to the feed page. This page encompasses a stories section, posts section, and a recommended contacts section, all anchored by a consistent sticky navbar that persists across the entire site. It is noteworthy that, due to the project's early nature, actual images from an API were not utilized; a practice I would refrain from now. Nevertheless, the primary objective was to refine my design accuracy. The subsequent pages include a messaging page, featuring a rudimentary template reflective of Instagram's direct messaging layout at the time, an explore page, and an accounts page. Emphasizing its purpose as a design exercise, the project lacks functional aspects. However, I took great care in accurately replicating each page to align with Instagram's desktop layout. Notably, I incorporated responsive design elements, acknowledging the prevalent use of Instagram on mobile devices. In retrospect, this project underscores my commitment to honing design skills and adapting to contemporary design trends.",
  links: [
    {
      gitHub: "https://github.com/neelamkhan123/basic-instagram-design-clone",
      website: "https://fake-instagram-design-template.netlify.app/",
    },
  ],
};

// Trivia!
export const trivia: ProjectTemplateProps = {
  title: "Trivia!",
  image: triviaImg,
  languages: [
    {
      language: "JavaScript",
      className: "javascript",
    },
    {
      language: "CSS",
      className: "css",
    },
    {
      language: "SASS/SCSS",
      className: "sass",
    },
    {
      language: "HTML",
      className: "html",
    },
  ],
  description:
    "This project constitutes a straightforward trivia quiz application, allowing users to select both a category of topics and a difficulty level. The application subsequently initiates a quiz comprising five questions, concluding with a final score accompanied by pertinent messages and actions based on the user's performance. Notably, the implementation includes smart scrolling, enhancing the overall user interface experience by facilitating seamless navigation between questions. The design approach adopted for this project is intentionally basic, with a primary emphasis on ensuring the correct utilization of the API. In hindsight, I acknowledge the potential enhancement of incorporating a randomization function for positioning both incorrect and correct answers, a strategy I would employ today as opposed to the prior method of hard-coding a pattern. Despite recognizing areas for improvement in alignment with my current skill level, I consider this project a commendable attempt given the context of my skills at the time of its creation.",
  links: [
    {
      gitHub: "https://github.com/neelamkhan123/trivia-app",
      website: "https://trivia-app-neelam.netlify.app/",
    },
  ],
};

// Calculator
export const calculator: ProjectTemplateProps = {
  title: "Calculator",
  image: calculatorImg,
  languages: [
    {
      language: "JavaScript",
      className: "javascript",
    },
    {
      language: "CSS",
      className: "css",
    },
    {
      language: "SASS/SCSS",
      className: "sass",
    },
    {
      language: "HTML",
      className: "html",
    },
  ],
  description:
    "This project constitutes a straightforward calculator application. Its development stemmed from my initial exploration of JavaScript frameworks, wherein I encountered jQuery as a widely utilized tool. Subsequently, my preferences have shifted towards more contemporary frameworks such as React and Vue. However, recognizing jQuery's enduring prevalence, I acknowledge its significance as a valuable skill in the present landscape. In the course of building this application, I gained insights into the advantages of leveraging shortcuts within JavaScript to achieve a more streamlined and cleaner codebase. The utilization of jQuery's built-in features played a pivotal role in refining my coding practices. Specifically, I employed the jQuery UI feature to design the application, highlighting its utility for small-scale applications prioritizing functionality over intricate design while still aspiring for a modern aesthetic. This experience underscored the practicality of such features in achieving a balance between functionality and design sophistication.",
  links: [
    {
      gitHub: "https://github.com/neelamkhan123/calculator",
      website: "https://calculator-neelam.netlify.app/",
    },
  ],
};
