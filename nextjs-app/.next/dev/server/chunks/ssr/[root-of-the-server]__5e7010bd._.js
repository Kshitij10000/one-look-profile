module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/nextjs-app/lib/mockData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Mock users for demo authentication
__turbopack_context__.s([
    "mockProfiles",
    ()=>mockProfiles,
    "mockUsers",
    ()=>mockUsers
]);
const mockUsers = [
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
const mockProfiles = [
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
            {
                category: "Frontend",
                items: [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS"
                ]
            },
            {
                category: "Backend",
                items: [
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "PostgreSQL"
                ]
            },
            {
                category: "DevOps",
                items: [
                    "Docker",
                    "AWS",
                    "CI/CD",
                    "Kubernetes"
                ]
            }
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
            {
                category: "Design Tools",
                items: [
                    "Figma",
                    "Adobe XD",
                    "Sketch",
                    "Principle"
                ]
            },
            {
                category: "Skills",
                items: [
                    "User Research",
                    "Prototyping",
                    "Design Systems",
                    "Wireframing"
                ]
            },
            {
                category: "Frontend",
                items: [
                    "HTML/CSS",
                    "React Basics",
                    "Animation"
                ]
            }
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
            {
                category: "Programming",
                items: [
                    "Python",
                    "R",
                    "SQL",
                    "Java"
                ]
            },
            {
                category: "ML/AI",
                items: [
                    "TensorFlow",
                    "PyTorch",
                    "Scikit-learn",
                    "NLP"
                ]
            },
            {
                category: "Tools",
                items: [
                    "Jupyter",
                    "Tableau",
                    "PowerBI",
                    "Git"
                ]
            }
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
}),
"[project]/nextjs-app/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs-app/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs-app/context/AuthContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Navbar({ searchQuery, onSearchChange }) {
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // Clear search when user logs out or when on login/register pages
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!user || pathname === '/login' || pathname === '/register') {
            onSearchChange('');
        }
    }, [
        user,
        pathname,
        onSearchChange
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `top-bar ${pathname === '/create' ? 'blue-nav' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "logo",
                onClick: ()=>router.push('/'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: '1.8rem'
                        },
                        children: "✨"
                    }, void 0, false, {
                        fileName: "[project]/nextjs-app/components/Navbar.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this),
                    " One-Look Profile"
                ]
            }, void 0, true, {
                fileName: "[project]/nextjs-app/components/Navbar.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            user && pathname !== '/login' && pathname !== '/register' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "search-wrapper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: "search-input",
                    placeholder: "Search profiles, titles, skills...",
                    value: searchQuery,
                    onChange: (e)=>onSearchChange(e.target.value)
                }, void 0, false, {
                    fileName: "[project]/nextjs-app/components/Navbar.tsx",
                    lineNumber: 31,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/nextjs-app/components/Navbar.tsx",
                lineNumber: 30,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "controls",
                children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "user-profile-section",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "user-name",
                            style: {
                                color: pathname === '/create' ? '#fff' : 'var(--accent-color)',
                                fontWeight: 'bold'
                            },
                            children: [
                                user.username,
                                pathname !== '/create' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "user-role",
                                    children: user.role
                                }, void 0, false, {
                                    fileName: "[project]/nextjs-app/components/Navbar.tsx",
                                    lineNumber: 44,
                                    columnNumber: 56
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/nextjs-app/components/Navbar.tsx",
                            lineNumber: 42,
                            columnNumber: 25
                        }, this),
                        user.role === 'applicant' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-primary btn-icon",
                            style: {
                                padding: '0.5rem 1rem',
                                fontSize: '0.9rem'
                            },
                            onClick: ()=>router.push('/create'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "✎"
                                }, void 0, false, {
                                    fileName: "[project]/nextjs-app/components/Navbar.tsx",
                                    lineNumber: 49,
                                    columnNumber: 33
                                }, this),
                                " Edit"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/nextjs-app/components/Navbar.tsx",
                            lineNumber: 48,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-logout",
                            onClick: ()=>{
                                logout();
                                router.push('/login');
                            },
                            children: "Logout"
                        }, void 0, false, {
                            fileName: "[project]/nextjs-app/components/Navbar.tsx",
                            lineNumber: 52,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/nextjs-app/components/Navbar.tsx",
                    lineNumber: 41,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        gap: 20,
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "nav-link",
                            onClick: ()=>router.push('/help'),
                            children: "Help"
                        }, void 0, false, {
                            fileName: "[project]/nextjs-app/components/Navbar.tsx",
                            lineNumber: 58,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "nav-link",
                            onClick: ()=>router.push('/contact'),
                            children: "Contact Us"
                        }, void 0, false, {
                            fileName: "[project]/nextjs-app/components/Navbar.tsx",
                            lineNumber: 59,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/nextjs-app/components/Navbar.tsx",
                    lineNumber: 57,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/nextjs-app/components/Navbar.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/nextjs-app/components/Navbar.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
}),
"[project]/nextjs-app/components/AppShell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs-app/components/Navbar.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function AppShell({ children }) {
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "app-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                searchQuery: searchQuery,
                onSearchChange: setSearchQuery
            }, void 0, false, {
                fileName: "[project]/nextjs-app/components/AppShell.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "main-layout",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.map(children, (child)=>{
                    if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(child)) {
                        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(child, {
                            searchQuery
                        });
                    }
                    return child;
                })
            }, void 0, false, {
                fileName: "[project]/nextjs-app/components/AppShell.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/nextjs-app/components/AppShell.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
}),
"[project]/nextjs-app/app/login/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Login
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs-app/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs-app/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs-app/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs-app/lib/mockData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$components$2f$AppShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs-app/components/AppShell.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function Login() {
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { login } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('');
        setIsLoading(true);
        try {
            // Mock authentication - check against hardcoded users
            // Trim whitespace from inputs
            const trimmedUsername = username.trim();
            const trimmedPassword = password.trim();
            console.log('Login attempt:', {
                trimmedUsername,
                trimmedPassword
            });
            console.log('Available users:', __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockUsers"]);
            const user = __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockUsers"].find((u)=>u.username === trimmedUsername && u.password === trimmedPassword);
            console.log('Found user:', user);
            if (!user) {
                throw new Error('Invalid username or password');
            }
            // Simulate API delay
            await new Promise((resolve)=>setTimeout(resolve, 500));
            // Mock token
            const token = 'mock-jwt-token-' + Date.now();
            login({
                id: user.id,
                username: user.username,
                role: user.role
            }, token);
            router.push('/');
        } catch (err) {
            setError(err.message);
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$components$2f$AppShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "auth-wrapper",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "auth-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "auth-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Welcome Back"
                            }, void 0, false, {
                                fileName: "[project]/nextjs-app/app/login/page.tsx",
                                lineNumber: 67,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Sign in to continue to One-Look Profile"
                            }, void 0, false, {
                                fileName: "[project]/nextjs-app/app/login/page.tsx",
                                lineNumber: 68,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nextjs-app/app/login/page.tsx",
                        lineNumber: 66,
                        columnNumber: 21
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "error-message",
                        children: [
                            "⚠️ ",
                            error
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nextjs-app/app/login/page.tsx",
                        lineNumber: 72,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'rgba(100, 108, 255, 0.1)',
                            padding: '1rem',
                            borderRadius: '8px',
                            marginBottom: '1rem',
                            fontSize: '0.85rem',
                            border: '1px solid rgba(100, 108, 255, 0.2)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Demo Credentials:"
                            }, void 0, false, {
                                fileName: "[project]/nextjs-app/app/login/page.tsx",
                                lineNumber: 85,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/nextjs-app/app/login/page.tsx",
                                lineNumber: 85,
                                columnNumber: 59
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: '0.5rem',
                                    display: 'flex',
                                    gap: '0.5rem',
                                    flexWrap: 'wrap'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setUsername('applicant');
                                            setPassword('password123');
                                        },
                                        style: {
                                            padding: '0.3rem 0.8rem',
                                            background: 'rgba(100, 108, 255, 0.2)',
                                            border: '1px solid rgba(100, 108, 255, 0.3)',
                                            borderRadius: '6px',
                                            color: '#fff',
                                            fontSize: '0.8rem',
                                            cursor: 'pointer'
                                        },
                                        children: "Use Applicant"
                                    }, void 0, false, {
                                        fileName: "[project]/nextjs-app/app/login/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setUsername('recruiter');
                                            setPassword('password123');
                                        },
                                        style: {
                                            padding: '0.3rem 0.8rem',
                                            background: 'rgba(100, 108, 255, 0.2)',
                                            border: '1px solid rgba(100, 108, 255, 0.3)',
                                            borderRadius: '6px',
                                            color: '#fff',
                                            fontSize: '0.8rem',
                                            cursor: 'pointer'
                                        },
                                        children: "Use Recruiter"
                                    }, void 0, false, {
                                        fileName: "[project]/nextjs-app/app/login/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/nextjs-app/app/login/page.tsx",
                                lineNumber: 86,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: '0.5rem',
                                    fontSize: '0.75rem',
                                    opacity: 0.8
                                },
                                children: [
                                    "Or manually enter - Applicant: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: "applicant"
                                    }, void 0, false, {
                                        fileName: "[project]/nextjs-app/app/login/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 60
                                    }, this),
                                    " / ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: "password123"
                                    }, void 0, false, {
                                        fileName: "[project]/nextjs-app/app/login/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 85
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/nextjs-app/app/login/page.tsx",
                                lineNumber: 118,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nextjs-app/app/login/page.tsx",
                        lineNumber: 77,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "auth-form",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: "Username"
                                    }, void 0, false, {
                                        fileName: "[project]/nextjs-app/app/login/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: username,
                                        onChange: (e)=>setUsername(e.target.value),
                                        required: true,
                                        className: "form-input",
                                        placeholder: "Enter your username"
                                    }, void 0, false, {
                                        fileName: "[project]/nextjs-app/app/login/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/nextjs-app/app/login/page.tsx",
                                lineNumber: 124,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: "Password"
                                    }, void 0, false, {
                                        fileName: "[project]/nextjs-app/app/login/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "password",
                                        value: password,
                                        onChange: (e)=>setPassword(e.target.value),
                                        required: true,
                                        className: "form-input",
                                        placeholder: "Enter your password"
                                    }, void 0, false, {
                                        fileName: "[project]/nextjs-app/app/login/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/nextjs-app/app/login/page.tsx",
                                lineNumber: 135,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "btn-auth",
                                disabled: isLoading,
                                children: isLoading ? 'Signing in...' : 'Sign In'
                            }, void 0, false, {
                                fileName: "[project]/nextjs-app/app/login/page.tsx",
                                lineNumber: 146,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nextjs-app/app/login/page.tsx",
                        lineNumber: 123,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "auth-footer",
                        children: [
                            "Don't have an account?",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/register",
                                className: "auth-link",
                                children: "Get Started"
                            }, void 0, false, {
                                fileName: "[project]/nextjs-app/app/login/page.tsx",
                                lineNumber: 153,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nextjs-app/app/login/page.tsx",
                        lineNumber: 151,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nextjs-app/app/login/page.tsx",
                lineNumber: 65,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/nextjs-app/app/login/page.tsx",
            lineNumber: 64,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/nextjs-app/app/login/page.tsx",
        lineNumber: 63,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5e7010bd._.js.map