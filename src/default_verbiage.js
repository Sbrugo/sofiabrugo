export const technologies = [
  {
    number: "01",
    title: "NESTJS CRUD Project.",
    highlight: "NestJs, MongoDB, Validations",
    description_text: `For a technical interview I built a backend on Nest.js. I focused on properly separating the logic and keeping the code as clean as possible. I applied validations, MongoDB, and concepts from MVC pattern.`,
    url: "https://github.com/Sbrugo/nestjs-backend-lean",
    link_text: "code",
    project: {
      title: "Investify API",
      description:
        "A backend service built with NestJS that provides investment simulation tools like compound interest calculations, investment goal estimations, and strategy simulations.",
      techStack: [
        "NestJS",
        "TypeScript",
        "MongoDB",
        "Docker",
        "Jest",
        "Swagger",
      ],
      problem:
        "Beginner investors often struggle to understand how small changes in interest rate, time, or frequency impact long-term savings. This API provides a foundation for building financial tools that help visualize those effects.",
      planning:
        "- Modular structure using NestJS services and controllers\n- DTOs and validation pipes for user input\n- Swagger for API documentation\n- Separate business logic from HTTP layer for testability",
      features: [
        {
          title: "Compound Interest Endpoint",
          description:
            "Calculates final capital given initial investment, rate, time, and frequency.",
          codeSnippet:
            "finalAmount = principal * Math.pow(1 + rate / frequency, frequency * time);",
        },
        {
          title: "Investment Goal Estimator",
          description:
            "Returns the time needed to reach a target amount based on periodic contributions.",
        },
        {
          title: "Simulation Engine",
          description:
            "Generates year-by-year projections based on different scenarios and visualizes growth curves.",
        },
      ],
      deployment:
        "- Deployed on Railway\n- Uses Docker for local and cloud environments\n- Unit tested with Jest and E2E tests with Supertest\n- API docs available via Swagger",
      lessons:
        "I learned how to organize backend logic in a scalable way using NestJS. Using DTOs, services, and testing allowed me to build a clean and reusable API that could be integrated into a full stack app later on.",
      githubUrl: "https://github.com/sofiabrugo/investify-api",
      liveDemoUrl: "https://investify-api-production.up.railway.app/docs",
    },
  },
  {
    number: "02",
    title: "Frontend Dev.",
    highlight: "React, styled-components, Git, Redux",
    description_text: `For 3 months we built the user interface of a credit eligibility platform used by agents of a US-based financial company to input and manage client data. The tool helped assess client eligibility for credit in real time. Worked with a team following coding standards, using React, styled-components, and Redux.`,
    project: {
      title: "Investify API",
      description:
        "A backend service built with NestJS that provides investment simulation tools like compound interest calculations, investment goal estimations, and strategy simulations.",
      techStack: [
        "NestJS",
        "TypeScript",
        "MongoDB",
        "Docker",
        "Jest",
        "Swagger",
      ],
      problem:
        "Beginner investors often struggle to understand how small changes in interest rate, time, or frequency impact long-term savings. This API provides a foundation for building financial tools that help visualize those effects.",
      planning:
        "- Modular structure using NestJS services and controllers\n- DTOs and validation pipes for user input\n- Swagger for API documentation\n- Separate business logic from HTTP layer for testability",
      features: [
        {
          title: "Compound Interest Endpoint",
          description:
            "Calculates final capital given initial investment, rate, time, and frequency.",
          codeSnippet:
            "finalAmount = principal * Math.pow(1 + rate / frequency, frequency * time);",
        },
        {
          title: "Investment Goal Estimator",
          description:
            "Returns the time needed to reach a target amount based on periodic contributions.",
        },
        {
          title: "Simulation Engine",
          description:
            "Generates year-by-year projections based on different scenarios and visualizes growth curves.",
        },
      ],
      deployment:
        "- Deployed on Railway\n- Uses Docker for local and cloud environments\n- Unit tested with Jest and E2E tests with Supertest\n- API docs available via Swagger",
      lessons:
        "I learned how to organize backend logic in a scalable way using NestJS. Using DTOs, services, and testing allowed me to build a clean and reusable API that could be integrated into a full stack app later on.",
      githubUrl: "https://github.com/sofiabrugo/investify-api",
      liveDemoUrl: "https://investify-api-production.up.railway.app/docs",
    },
  },
  {
    number: "03",
    title: "NEXTJS Joblisting Website",
    highlight: "NextJs, Tailwind CSS",
    description_text: `To move from google forms to a more professional view we decided to develop an app in Next creating a clean, accessible, and fast design. The result was a platform where the owner can edit the view without writing any code and share to contact people.`,
    project: {
      title: "Investify API",
      description:
        "A backend service built with NestJS that provides investment simulation tools like compound interest calculations, investment goal estimations, and strategy simulations.",
      techStack: [
        "NestJS",
        "TypeScript",
        "MongoDB",
        "Docker",
        "Jest",
        "Swagger",
      ],
      problem:
        "Beginner investors often struggle to understand how small changes in interest rate, time, or frequency impact long-term savings. This API provides a foundation for building financial tools that help visualize those effects.",
      planning:
        "- Modular structure using NestJS services and controllers\n- DTOs and validation pipes for user input\n- Swagger for API documentation\n- Separate business logic from HTTP layer for testability",
      features: [
        {
          title: "Compound Interest Endpoint",
          description:
            "Calculates final capital given initial investment, rate, time, and frequency.",
          codeSnippet:
            "finalAmount = principal * Math.pow(1 + rate / frequency, frequency * time);",
        },
        {
          title: "Investment Goal Estimator",
          description:
            "Returns the time needed to reach a target amount based on periodic contributions.",
        },
        {
          title: "Simulation Engine",
          description:
            "Generates year-by-year projections based on different scenarios and visualizes growth curves.",
        },
      ],
      deployment:
        "- Deployed on Railway\n- Uses Docker for local and cloud environments\n- Unit tested with Jest and E2E tests with Supertest\n- API docs available via Swagger",
      lessons:
        "I learned how to organize backend logic in a scalable way using NestJS. Using DTOs, services, and testing allowed me to build a clean and reusable API that could be integrated into a full stack app later on.",
      githubUrl: "https://github.com/sofiabrugo/investify-api",
      liveDemoUrl: "https://investify-api-production.up.railway.app/docs",
    },
  },
];

export const stack = [
  { name: "HTML", url: "/html.png" },
  { name: "CSS", url: "/css.png" },
  { name: "Javascript", url: "/javascript.png" },
  { name: "React", url: "/react.png" },
  { name: "Next.js", url: "/nextjs.png" },
  { name: "NestJS", url: "/nestjs.png" },
  { name: "Java", url: "/java.png" },
  { name: "MongoDb", url: "/mongo.png" },
  { name: "Git", url: "/git.png" },
  { name: "Jira", url: "/jira.png" },
];

export const books = [
  {
    title: "The Hidden Language of Computer Science and Software",
    description_text:
      "If you're trying to understand how programming really works and feel that seeing the bigger picture of how computers function might help you become a better coder, this book did that for me — and I genuinely hope it does the same for you.",
    url: "https://bobcarp.wordpress.com/wp-content/uploads/2014/07/code-charles-petzold.pdf",
    link_text: "link url",
  },
];
