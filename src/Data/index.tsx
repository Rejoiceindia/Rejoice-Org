import { ReactNode } from "react";
import { Devices, Globe, Plug, Tools } from "../components/assets/Icons";
import { MdEmail } from "react-icons/md";
import { BiKey } from "react-icons/bi";

export const projectData = {
  projectName: "Advaiya",
  projectDescription:
    "Your Real Estate Al Assistant with a custom knowledge base. She can run, manage, automate, and streamline repetitive and routine business operations with minimal to no human intervention, allowing you to focus on property visits and conversions-your core revenue-generating activities within any real estate business operations.",
  projectGithubLink: "https://github.com/Rejoiceindia/Advaiya",
  projectDetailsText: [
    "Advaiya is an advanced Real Estate AI Assistant designed to transform how you manage your business. With a custom knowledge base tailored specifically to your needs, she can seamlessly handle, automate, and streamline the repetitive and time-consuming tasks that come with running a real estate business. From property listings and client communications to transaction management and data analysis, Advaiya is built to operate with minimal human input, maximizing efficiency and reducing operational costs.",
    "By leveraging AI-driven insights and automation, Advaiya enhances productivity, allowing you to focus on strategic growth and client relationships. Whether you're managing multiple properties, analyzing market trends, or keeping track of ongoing tasks, Advaiya ensures smooth, error-free operations—so you can stay ahead in the competitive real estate market.",
  ],
  projectDetalsImage: "../assets/images/ai-assistant-demo.png",
  projectTimelineData: [
    {
      phase: "Phase 1",
      title: "Design & Architecture",
      period: "Q1 2024 - Q2 2024",
      description:
        "The project is in the architectural design phase, focusing on creating building layouts, refining design concepts, and ensuring functionality and compliance with regulations.",
    },

    {
      phase: "Phase 2",
      title: "Development & Prototyping",
      period: "Q3 2024 - Q4 2024",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, porro ducimus sed, reprehenderit eligendi perferendis fugit totam blanditiis non laudantium iste veritatis dolore, eaque minima? Ea, magnam! Possimus, unde modi.",
    },
    {
      phase: "Phase 3",
      title: "Conceptualization & Research",
      period: "Q1 2025",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, porro ducimus sed, reprehenderit eligendi perferendis fugit totam blanditiis non laudantium iste veritatis dolore, eaque minima? Ea, magnam! Possimus, unde modi.",
    },
    // {
    //   phase: "Phase 4",
    //   title: "Conceptualization & Research",
    //   period: "Q3 2024 - Q4 2024",
    //   description:
    //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, porro ducimus sed, reprehenderit eligendi perferendis fugit totam blanditiis non laudantium iste veritatis dolore, eaque minima? Ea, magnam! Possimus, unde modi.",
    // },
  ],
};

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
  gradient: string;
}

export const featureList: Feature[] = [
  {
    title: "Decentralized Language Independent Architecture",
    description:
      "Harness the power of a decentralized system, ensuring seamless operation across all languages without dependence on a centralized platform.",
    icon: <Globe />,
    gradient: "bg-gradient-to-br from-[#BB7308] to-[#F1A800]",
  },
  {
    title: "Cross-Platform & Device Agnostic",
    description:
      "A versatile solution that works effortlessly across multiple platforms and devices, offering true interoperability for your real estate operations.",
    icon: <Devices />,
    gradient: "bg-gradient-to-br from-[#4B688E] to-[#6A96D1]",
  },
  {
    title: "Fully Open Source",
    description:
      "Advaiya is fully open-source, ensuring transparency and allowing you to customize it to meet your specific business needs—forever free and accessible.",
    icon: <Tools />,
    gradient: "bg-gradient-to-br from-[#277056] to-[#3CD9A2]",
  },
  {
    title: "Flexible API & LLM/SLM/VLM Support",
    description:
      "Easily add your own API and integrate Local Large Language Models (LLM), Small Language Models (SLM), or Vision Language Models (VLM) to tailor the assistant’s capabilities.",
    icon: <Plug />,
    gradient: "bg-gradient-to-br from-[#D14B60] to-[#9C27B0]",
  },
  {
    title: "Email-First Interaction: Your Inbox, Your Command Center",
    description:
      "Advaiya transforms your email into a dynamic user interface. Interact, command, and manage tasks directly from your inbox, eliminating app fatigue and streamlining workflows",
    icon: <MdEmail size={40} />,
    gradient: "bg-gradient-to-br from-[#D14B60] to-[#9C27B0]",
  },
  {
    title: "One-Time Identity: Secure, Lifelong Access",
    description:
      "Thanks to Email-First Interaction, once your email is added to the system you gain lifetime access to Advaiya, freeing you from cumbersome logins and passwords.",
    icon: <BiKey size={40} />,
    gradient: "bg-gradient-to-br from-[#D14B60] to-[#9C27B0]",
  },
];

export interface Contributor {
  name: string;
  role: string;
  socialLinks: {
    github: string;
    linkedin: string;
  };
}

export const contributorList: Contributor[] = [
  {
    name: "Kamal Raj",
    role: "Project Tech Advisor",
    socialLinks: {
      github: "https://github.com/insightbuilder",
      linkedin: "#",
    },
  },
  {
    name: "Prashanth Zende",
    role: "Project Coordinator",
    socialLinks: {
      github: "https://github.com/PrashantIndia",
      linkedin: "#",
    },
  },
  {
    name: "Roshanali Narsindani",
    role: "Project Coordinator",
    socialLinks: {
      github: "raghavendrashande",
      linkedin: "https://www.linkedin.com/in/roshanalinarsindani",
    },
  },
  {
    name: "Raghavendra S H",
    role: "Systems engineer",
    socialLinks: {
      github: "raghavendrashande",
      linkedin: "raghavendrahande",
    },
  },
  {
    name: "Hardik Kandpal",
    role: "AI Engineer",
    socialLinks: {
      github: "https://github.com/HardikKandpal",
      linkedin: "",
    },
  },
  {
    name: "Jashmeet Panda",
    role: "Business Intelligence Engineer",
    socialLinks: {
      github: "https://github.com/JashmeetPanda",
      linkedin: "helloaneesh",
    },
  },
  {
    name: "Aneesh Sharma",
    role: "Business Intelligence Engineer",
    socialLinks: {
      github: "aneeshsharma72067",
      linkedin: "helloaneesh",
    },
  },
  {
    name: "Basita Tashfeen",
    role: "Business Intelligence Engineer",
    socialLinks: {
      github: "https://github.com/basita512",
      linkedin: "#",
    },
  },
];

export const sponsorList = [];
