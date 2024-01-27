import {
  CabFormationLogo,
} from "@/images/logos";
import { DevToIcon, GitHubIcon, LinkedInIcon, MediumIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Tom Rives",
  initials: "TR",
  location: "Paris, France, CET",
  locationLink: "https://www.google.com/maps/place/paris",
  about:
    "Full Stack Engineer",
  summary:
    "Fifth year student at EPITECH - European Institute of Technology",
  avatarUrl: "",
  personalWebsiteUrl: "https://blitzlab.ninja",
  contact: {
    email: "tom.rives@epitech.eu",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/BliTz037",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tom-rives/",
        icon: LinkedInIcon,
      },
      {
        name: "Medium",
        url: "https://medium.com/@blishikata",
        icon: MediumIcon,
      },
      {
        name: "Dev.to",
        url: "https://dev.to/blishikata",
        icon: DevToIcon,
      }
    ],
  },
  education: [
    {
      school: "Epitech Technology Paris",
      degree: "Expert in information technology",
      start: "2019",
      end: "2024",
    },
    {
      school: "Keimyung University (South Korea)",
      degree: "Student exchange program",
      start: "2022",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Withings",
      link: "https://www.withings.com/",
      badges: ["Current"],
      title: "Full Stack Developer",
      logo: null,
      start: "September 2023",
      end: "Current",
      description: ""
    },
    {
      company: "Clac Des Doigts",
      link: "https://clacdesdoigts.com/",
      badges: [],
      title: "Full Stack Developer",
      logo: null,
      start: "April 2022",
      end: "July 2022",
      description:
        "Full Stack Developer specializing in the ongoing maintenance of the company's API, developed with JavaScript and ExpressJS. Proficient in building internal tools using JavaScript/TypeScript to enhance efficiency for sales teams. Actively collaborates with external partners to implement company services.",
    },
    {
      company: "Epitech Technology Paris",
      link: "https://epitech.eu/",
      badges: [],
      title: "Assistant technical (ASTEK)",
      logo: null,
      start: "September 2021",
      end: "April 2022",
      description:
        "Teaching first & second year students the basics of programming and algorithms (C, C++, Python, Java, etc.).",
    },
    {
      company: "CAB Formations",
      link: "https://cab-formations.fr/",
      badges: [],
      title: "Web Developer",
      logo: CabFormationLogo,
      start: "July 2020",
      end: "December 2020",
      description: "Automation and reorganization of the company's CRM. Development of a chatbot with Dialogflow and Node.js hosted on Google Cloud Platform.",
    },
  ],
  skills: [
    "C",
    "C++",
    "C#",
    "Python",
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "Flutter",
    "Dart",
    "Bash",
    "Node.js",
    "Jest",
    "React.js",
    "NestJS",
    "ExpressJS",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Unity",
  ],
  projects: [
    {
      title: "Camille",
      techStack: [
        "TypeScript",
        "JavaScript",
        "NestJS",
        "ExpressJS",
        "PostgreSQL",
        "Jest",
        "React Native",
        "Docker",
        "AWS",
      ],
      description:
        "Camille is an mobile application to help people who are in depression. This project was in 2nd place at the Epitech Innovative Project 2024.",
      logo: null,
      link: {
        label: "camille.app",
        href: "https://camille.app/",
      },
    },
    {
      title: "Game Server Tracker - LametricApp",
      techStack: [
        "TypeScript",
        "JavaScript",
        "NestJS",
        "ExpressJS",
        "PostgreSQL",
      ],
      description: "A Lametric-App which shows the number of players connected on a server Minecraft / Source (Gmod, CS, CSGO) / FiveM",
      logo: null,
      link: {
        label: "apps.lametric.com",
        href: "https://apps.lametric.com/apps/game_server_tracker/12296",
      },
    },
    {
      title: "Game Server Tracker",
      techStack: [
        "TypeScript",
        "JavaScript",
        "NestJS",
        "ExpressJS",
        "PostgreSQL",
        "Grafana",
      ],
      description: `A suite of applications dedicated to monitoring online game server activity.`,
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/GameServerTracker",
      },
    },
    {
      title: "Whac a Mole VR",
      techStack: [
        "C#",
        "Unity",
        "SteamVR",
      ],
      description: `Arcade-style VR game in which the objective is to hit moles with a hammer when they pop out of holes.`,
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/BliTz037/Redditech",
      },
    },
    {
      title: "SkulkerSurvivor",
      techStack: [
        "C#",
        "Unity",
      ],
      description: `Basic 3D game survivor`,
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/BliTz037/SkulkerSurvivor",
      },
    },
    {
      title: "Redditech",
      techStack: [
        "Dart",
        "Flutter",
        "Android",
        "Reddit API"
      ],
      description: `A Reddit client for iOS and Android. That is an Epitech project school.`,
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/BliTz037/Redditech",
      },
    },
    {
      title: "WeatherForecast",
      techStack: [
        "TypeScript",
        "React.js",
        "TailwindCSS",
        "Vite.js",
        "OpenWeatherMap API"
      ],
      description: `Weather forecast website made with react`,
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/BliTz037/WeatherForecast",
      },
    },
    {
      title: "Sokoban",
      techStack: [
        "C",
        "Ncurses"
      ],
      description: `Sokoban game made with C and Ncurses`,
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/BliTz037/my_sokoban",
      },
    },
    {
      title: "my_teams",
      techStack: [
        "C"
      ],
      description: `A client-server application allowing users to create teams, add users to them and send messages between them in CLI`,
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/BliTz037/myteams",
      },
    }
  ],
} as const;
