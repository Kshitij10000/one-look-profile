// Mock users for demo authentication
export const mockUsers = [
    {
        id: 1,
        username: "applicant",
        password: "password123",
        role: "applicant"
    },
    {
        id: 2,
        username: "recruiter",
        password: "password123",
        role: "recruiter"
    },
    {
        id: 3,
        username: "admin",
        password: "admin123",
        role: "applicant"
    }
];

// Mock profiles for display
export const mockProfiles = [
    {
        id: 1,
        personalInfo: {
            fullName: "Sarah Johnson",
            title: "Full Stack Developer",
            email: "sarah.j@example.com",
            phone: "+1 (555) 234-5678",
            location: "New York, NY",
            socials: {
                linkedin: "linkedin.com/in/sarahjohnson",
                github: "github.com/sarahj",
                portfolio: "sarahjohnson.dev"
            },
            summary: "Passionate full-stack developer with 4 years of experience in building scalable web applications. Expert in React, Node.js, and cloud technologies."
        },
        skills: [
            { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
            { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
            { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Kubernetes"] }
        ],
        experience: [
            {
                id: 1,
                role: "Senior Full Stack Developer",
                company: "Tech Innovations Ltd",
                duration: "2022 - Present",
                description: "Leading development of customer-facing web applications serving 100k+ users."
            },
            {
                id: 2,
                role: "Full Stack Developer",
                company: "Digital Solutions Inc",
                duration: "2020 - 2022",
                description: "Built and maintained RESTful APIs and responsive web interfaces."
            }
        ],
        projects: [
            {
                id: 1,
                name: "Task Management SaaS",
                role: "Lead Developer",
                link: "taskmaster.io",
                description: "A collaborative project management tool for remote teams."
            },
            {
                id: 2,
                name: "E-Learning Platform",
                role: "Full Stack Developer",
                link: "learnfast.com",
                description: "Online education platform with video streaming and interactive quizzes."
            }
        ]
    },
    {
        id: 2,
        personalInfo: {
            fullName: "Michael Chen",
            title: "UI/UX Designer",
            email: "michael.c@example.com",
            phone: "+1 (555) 345-6789",
            location: "Austin, TX",
            socials: {
                linkedin: "linkedin.com/in/michaelchen",
                github: "github.com/mchen",
                portfolio: "michaelchen.design"
            },
            summary: "Award-winning UI/UX designer specializing in mobile and web applications. Focused on creating delightful user experiences through research-driven design."
        },
        skills: [
            { category: "Design Tools", items: ["Figma", "Adobe XD", "Sketch", "Principle"] },
            { category: "Skills", items: ["User Research", "Prototyping", "Design Systems", "Wireframing"] },
            { category: "Frontend", items: ["HTML/CSS", "React Basics", "Animation"] }
        ],
        experience: [
            {
                id: 1,
                role: "Lead UI/UX Designer",
                company: "Creative Studio",
                duration: "2021 - Present",
                description: "Directing design strategy for multiple high-profile client projects."
            },
            {
                id: 2,
                role: "Product Designer",
                company: "StartupHub",
                duration: "2019 - 2021",
                description: "Designed user interfaces for mobile and web applications from concept to launch."
            }
        ],
        projects: [
            {
                id: 1,
                name: "FinTech Mobile App",
                role: "Lead Designer",
                link: "finflow.app",
                description: "Modern banking app with focus on accessibility and user experience."
            },
            {
                id: 2,
                name: "Healthcare Dashboard",
                role: "UX Designer",
                link: "healthportal.io",
                description: "Patient management system for healthcare providers."
            }
        ]
    },
    {
        id: 3,
        personalInfo: {
            fullName: "Emily Rodriguez",
            title: "Data Scientist",
            email: "emily.r@example.com",
            phone: "+1 (555) 456-7890",
            location: "Seattle, WA",
            socials: {
                linkedin: "linkedin.com/in/emilyrodriguez",
                github: "github.com/erodriguez",
                portfolio: "emilyrodriguez.io"
            },
            summary: "Data scientist with expertise in machine learning and predictive analytics. Passionate about turning data into actionable insights."
        },
        skills: [
            { category: "Programming", items: ["Python", "R", "SQL", "Java"] },
            { category: "ML/AI", items: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP"] },
            { category: "Tools", items: ["Jupyter", "Tableau", "PowerBI", "Git"] }
        ],
        experience: [
            {
                id: 1,
                role: "Senior Data Scientist",
                company: "Analytics Corp",
                duration: "2022 - Present",
                description: "Building ML models for customer behavior prediction and business optimization."
            },
            {
                id: 2,
                role: "Data Scientist",
                company: "Tech Insights",
                duration: "2020 - 2022",
                description: "Developed data pipelines and predictive models for enterprise clients."
            }
        ],
        projects: [
            {
                id: 1,
                name: "Recommendation Engine",
                role: "Lead Data Scientist",
                link: "smartrec.ai",
                description: "AI-powered recommendation system for e-commerce platforms."
            },
            {
                id: 2,
                name: "Fraud Detection System",
                role: "Data Scientist",
                link: "fraudguard.io",
                description: "Real-time fraud detection using machine learning algorithms."
            }
        ]
    }
];
