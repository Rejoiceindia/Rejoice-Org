import React from 'react';
import { CodeLiner, SolutionLiner, GlobeLiner } from '../components/assets/Icons';

export interface FeatureCardType {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface Contributor {
    name : string
    image : string
}

export interface ProjectDetailsType {
    id : number
    projectName : string
    description : string
    image : string
    projectRoute : string
    techStack : string[]
    contributors : Contributor[]
    links : {
        github : string
        documentation : string
    }
}


export const FeaturesData = [
    {
        icon: <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[#0D1F17]"><CodeLiner size={24} color="#00FF66" /></div>, 
        title: "Open Source Innovation",
        description: "Contribute to and benefit from our open-source ecosystem, driving collaborative innovation in real estate technology."
    },
    {
        icon: <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[#0D1F17]">
        <SolutionLiner size={24} color="#00FF66" />
      </div>, 
        title: "AI-Powered Solutions",
        description: "Leverage cutting-edge AI and LLM technologies to automate workflows and make smarter decisions."
    },
    {
        icon: <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[#0D1F17]">
        <GlobeLiner size={30} color="#00FF66" />
      </div> ,
        title: "Global Collaboration",
        description: "Join a worldwide community of developers and industry experts re-shaping the future of real estate tech."
    }
] 


export const ProjectDetails = [
    {
        id : 1,
        projectName : 'Advaiya',
        description : 'Meet Advaiya—your intelligent Real Estate AI Assistant with a custom knowledge base. Transform property management with AI-driven efficiency. Efficiently manage, run, and grow your real estate business.',
        image : '/images/advaiya.png',
        techStack : [ 'Web Assembly', 'Surreal DB', 'gRPC', 'Meta prompts', 'Fucntion calling'],
        projectRoute : '/Advaiya',
        contributors : [
            { name: "Hardik Kandpal", image: "https://github.com/HardikKandpal.png" },
            { name: "Raghavendra Shande", image: "https://github.com/raghavendrashande.png" },
            { name: "Prashant Zende", image: "https://github.com/PrashantIndia.png" },
            { name: "Roshanali Narsindani", image: "https://github.com/rex3992.png" },
            { name: "Jashmeet Panda", image: "https://github.com/JashmeetPanda.png" }
        ],
        links : {
            github : 'https://github.com/Rejoiceindia/Advaiya',
            documentation : 'xaklsdqikdqi'
        }
    },
    // {
    //     id : 2,
    //     projectName : 'Advaiya',
    //     description : 'Meet Advaiya—your intelligent Real Estate AI Assistant with a custom knowledge base. Transform property management with AI-driven efficiency. Efficiently manage, run, and grow your real estate business.',
    //     image : '/images/advaiya.png',
    //     techStack : ['Python', 'TypeScript', 'Web Assembly', 'Surreal DB', 'gRPC'],
    //     projectRoute : '/Advaiya',
    //     contributors : [
    //         { name: "Hardik Kandpal", image: "https://github.com/HardikKandpal.png" },
    //         { name: "Raghavendra Shande", image: "https://github.com/raghavendrashande.png" },
    //         { name: "Prashant Zende", image: "https://github.com/PrashantIndia.png" },
    //         { name: "Roshanali Narsindani", image: "https://github.com/rex3992.png" },
    //         { name: "Jashmeet Panda", image: "https://github.com/JashmeetPanda.png" }
    //     ],
    //     links : {
    //         github : 'https://github.com/Rejoiceindia/Advaiya',
    //         documentation : ''
    //     }
    // }
]





