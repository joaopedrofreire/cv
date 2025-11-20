import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "João Pedro Freire",
  initials: "JPF",
  location: "Rio de Janeiro, Brasil",
  locationLink: "https://www.google.com/maps/place/rio-de-janeiro",
  about: "Generalist statistician working at the intersection of research, quantitative modeling, and applied data science.",
  summary: (
    <>

    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "bartosz.jarocki@hey.com",
    tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/BartoszJarocki",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bjarocki/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Universidade Federal do Rio de Janeiro",
      degree: "Bachelor's Degree in Statistics",
      start: "2020",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Instituto Brasileiro de Geografia e Estatística",
      link: "https://www.ibge.gov.br",
      badges: [],
      title: "Statistician",
      start: "2025",
      end: null,
      description: (
        <>
          Working on internal AI agents platform allowing marketing specialists
          to create AI workflows.
        </>
      ),
    },
    {
      company: "Midway",
      link: "https://www.midway.com.br",
      badges: [],
      title: "Data Scientist",
      start: "2024",
      end: "2025",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
            Develop and monitor credit risk models for credit card and personal loan portfolios.
            </li>
            <li>
            Conduct research and performance analysis to improve existing models.
            </li>
            <li>
            Deployed models in Azure Cloud (Data Factory, Functions, Databricks) for production and monitoring.
            </li>
            <li>Deploy models to production on Databricks and design automated monitoring routines.</li>
          </ul>
        </>
      ),
    },
    {
      company: "Mongeral Aegon",
      link: "https://mag.com.br",
      badges: [],
      title: "Risk Analyst",
      start: "2023",
      end: "2024",
      description: (
        <>
        <ul className="list-inside list-disc">
          <li>
          Developed internal risk capital models covering underwriting, operational, legal, and lottery risks.
          </li>
          <li>
          Applied advanced statistical methods such as Generalized Linear Models (GLM), Bayesian inference, and Monte Carlo simulation.
          </li>
          <li>
          Deployed models in Azure Cloud (Data Factory, Functions, Databricks) for production and monitoring.
          </li>
          <li>Built automated ETL pipelines and dashboards in Power BI and R Shiny for ongoing supervision.</li>
          <li>Conducted financial risk and volatility modeling to analyze variations in technical assumptions (mortality, persistency, etc.).</li>
        </ul>
        </>
      ),
    },
    {
      company: "Proffer",
      link: "https://proffer.com.br",
      badges: [],
      title: "Data Scientist",
      start: "2023",
      end: "2023",
      description: (
        <>
          Successfully transitioned from mobile to full-stack development while
          leading distributed teams.
          <ul className="list-inside list-disc">
            <li>
              Led frontend team at Evercast, building real-time platform
              supporting 30+ users per room with HD streaming and collaboration
              tools
            </li>
            <li>
              Developed offline-first Android app for DKMS, improving donor
              registration process
            </li>
            <li>
              Led development teams across multiple successful client projects
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Mutual",
      link: "https://mutual.club",
      badges: [],
      title: "Data Science Intern",
      start: "2022",
      end: "2023",
      description: (
        <>
          First Android developer, grew and led a team of 15+ engineers while
          establishing engineering culture.
          <ul className="list-inside list-disc">
            <li>
              Developed apps for major Polish companies including LOT, Polskie
              Radio, and Agora
            </li>
            <li>Built and mentored high-performing mobile development team</li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "React/Next.js/Remix",
    "TypeScript",
    "Tailwind CSS",
    "Design Systems",
    "WebRTC",
    "WebSockets",
    "Node.js",
    "GraphQL",
    "Relay",
    "System Architecture",
    "Remote Team Leadership",
  ],
  projects: [
    {
      title: "Machine Teaching Project",
      techStack: ["Python", "Django", "PostgreSQL"],
      description:
        "Developed a personalized learning system to identify students’ difficulties and provide timely feedback in Intro to Programming classes.",
      link: {
        label: "machineteaching.tech",
        href: "https://machineteaching.tech/",
      },
    },
    {
      title: "BRT Arrival Time Estimation",
      techStack: [
        "Python",
        "R"
      ],
      description:
        "Developed statistical models to predict real-time BRT bus arrivals for the Rio de Janeiro City Hall’s public transport system.",
      link: {
        label: "mobilidade.rio",
        href: "https://mobilidade.rio/",
      },
    },
    {
      title: "Minimalist CV",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub",
      link: {
        label: "Minimalist CV",
        href: "https://github.com/BartoszJarocki/cv",
      },
    },
  ],
} as const;
