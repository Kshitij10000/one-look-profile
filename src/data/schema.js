export const defaultProfile = {
    personalInfo: {
        fullName: "Alex Doe",
        title: "SaaS Product Designer",
        email: "alex.doe@example.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
        socials: {
            linkedin: "linkedin.com/in/alexdoe",
            github: "github.com/alexdoe",
            portfolio: "alexdoe.design"
        },
        summary: "Product designer with 5+ years of experience building B2B SaaS tools. Specialized in design systems, prototyping, and user research. Proven track record of increasing user engagement by 40%."
    },
    skills: [
        { category: "Design", items: ["Figma", "Sketch", "Adobe XD", "Prototyping"] },
        { category: "Frontend", items: ["HTML/CSS", "React (Basic)", "Tailwind"] },
        { category: "Soft Skills", items: ["Leadership", "Communication", "Agile"] }
    ],
    experience: [
        {
            id: 1,
            role: "Senior Product Designer",
            company: "TechFlow Inc.",
            duration: "2021 - Present",
            description: "Leading the design system initiative and managing a team of 3 designers to ship the core platform features."
        },
        {
            id: 2,
            role: "Product Designer",
            company: "StartUp Zy",
            duration: "2018 - 2021",
            description: "First designer hire. Designed the MVP from scratch and iterated based on user feedback to reach Series A."
        }
    ],
    projects: [
        {
            id: 1,
            name: "E-Commerce Dashboard",
            role: "Lead Designer",
            link: "example.com/dashboard",
            description: "A comprehensive analytics dashboard for online retailers."
        },
        {
            id: 2,
            name: "Mobile Banking App",
            role: "UI/UX Designer",
            link: "example.com/bank-app",
            description: "Redesign of a legacy banking app focusing on accessibility and speed."
        }
    ]
};
