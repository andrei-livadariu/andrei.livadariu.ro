export default {
    statement: `With over 15 years IT experience as a full-stack developer, I've delivered numerous sites, online shops, cross-platform apps, and custom solutions. I have also run my own company, which allowed me to delve into the business, management and leadership side of tech. 

What I enjoy the most about this work is to study each business and to proactively identify the areas where I can make the biggest impact. This could mean delivering profitable solutions, reducing costs or helping my co-workers work more efficiently.

This is what I strive to achieve as an IT specialist.`,

    experience: {
        title: "Professional Experience",
        entries: [
            {
                title: "Senior web developer",
                company: "Web Lab Space SRL, Romania",
                duration: "2019 - 2025",
                description: `The projects were high-traffic websites built on top of a microservices architecture.
                My chief contribution was in cutting costs by using our resources more efficiently.
                The work also involved cloud storage, video encoding, server management and DevOps.
                Technologies: Laravel, Yii, NodeJS, VueJS, Redis, Backpack`
            },
            {
                title: "CEO / Tech Lead",
                company: "Modern Web SRL, Romania",
                duration: "2014 - 2019",
                description: `We made online shops, presentation websites and cross-platform apps.
                I handled some of everything: team management, client relations, programming, sales.
                Technologies: Magento, Joomla, Yii, Bootstrap, React Native, Unity`
            },
            {
                title: "Web developer",
                company: "e-reactor ApS, Denmark",
                duration: "2012 - 2014",
                description: `I worked on a vast portfolio of presentation websites and online shops.
                I took part in many sales calls and handled clients directly as a technical advisor.
                Technologies: Magento, Joomla, Bootstrap`,
            },
            {
                title: "Teaching assistant",
                company: "IT University of Copenhagen, Denmark",
                duration: "Feb. 2013 - May 2013",
                description: `The courses that I taught in were "Intelligent Systems Programming" and "Game Development".
                The day-to-day work was about helping students with their course material.
                I also took part in grading assignments and projects.`,
            },
            {
                title: "Virus analyst",
                company: "BitDefender SRL, Romania",
                duration: "2009 - 2011",
                description: `The bulk of the work was analyzing malware samples through reverse engineering to deliver detection and removal solutions.
                I also researched and implemented machine-learning approaches for malware detection.
                This was a full-time position during my bachelor degree years.`,
            },
        ],
    },

    volunteering: {
        title: "Volunteering",
        entries: [
            {
                title: "Computer Science Teacher",
                company: "Coder Dojo Bucharest",
                duration: "2019 - ongoing",
                description: `As part of this volunteer organization, I teach computer science to children.
                We provide classes on a wide variety of learning-friendly technologies such as Scratch.
                My focus is on hardware-related classes, on the Microbit and Arduino platforms.`,
            }
        ],
    },

    education: {
        title: "Education",
        entries: [
            {
                title: "Master of Science in Games, Technology track",
                institution: "IT University of Copenhagen, Denmark",
                duration: "2011 - 2013",
                description: "Master thesis: \"Methods for collecting and analyzing gameplay data to create replay footage\"",
            },
            {
                title: "Bachelor in Computer Science",
                institution: "\"Alexandru Ioan Cuza\" University, Iași, Romania",
                duration: "2008 - 2011",
                description: "Bachelor thesis: \"Emulation and virtualization system for Intel x86\"",
            },
            {
                title: "Mathematics - IT Track",
                institution: "\"Sf. Sava\" high school, Bucharest, Romania",
                duration: "2004 - 2008",
            },
        ],
    },

    skills: {
        title: "Skills",
        entries: [
            {
                title: "Web Development",
                items: [
                    "HTML",
                    "CSS",
                    "Javascript",
                    "PHP",
                    "SQL",
                    "Server management",
                    "SEO",
                ],
            },
            {
                title: "PHP Ecosystem",
                items: [
                    "Laravel",
                    "Yii framework",
                    "Magento",
                    "Joomla",
                    "Wordpress",
                ],
            },
            {
                title: "Javascript Ecosystem",
                items: [
                    "React",
                    "NodeJS",
                    "Svelte",
                    "Vue",
                    "Next.js",
                    "TypeScript",
                    "Firebase",
                    "React Native",
                    "jQuery",
                ],
            },
            {
                title: "CSS Ecosystem",
                items: [
                    "Tailwind",
                    "Bootstrap",
                    "SASS",
                    "Mobile-first design",
                ],
            },
            {
                title: "Data Storage Solutions",
                items: [
                    "MySQL / MariaDB",
                    "PostgreSQL",
                    "Solr",
                    "Elasticsearch",
                    "Redis",
                ],
            },
            {
                title: "General Programming",
                items: [
                    "C#",
                    "Go",
                    "Python",
                    "Java",
                    "C / C++",
                ],
            },
            {
                title: "Game Engines",
                items: [
                    "Unity",
                    "Phaser",
                ],
            },
            {
                title: "Graphics Software",
                items: [
                    "Adobe Photoshop",
                    "3D Studio Max",
                ],
            },
            {
                title: "Organizational",
                items: [
                    "Leading a team",
                    "Project management",
                    "Client relations",
                    "Training / mentoring",
                    "Research and planning",
                ],
            },
            {
                title: "Other Skills",
                items: [
                    "Git",
                    "Jenkins",
                    "Linux",
                    "Arduino",
                    "Gamification",
                ],
            }
        ],
    },

    languages: {
        title: "Languages",
        entries: [
            {
                language: "Romanian",
                level: "Native speaker",
                europeanLevel: "C2",
            },
            {
                language: "English",
                level: "Advanced",
                europeanLevel: "C2",
                score: "TOEFL iBT score: 117/120",
            },
            {
                language: "Japanese",
                level: "Intermediate",
                europeanLevel: "B1",
                score: "Nihongo Noryoku Shiken level 3",
            },
            {
                language: "French",
                level: "Intermediate",
                europeanLevel: "B1",
            },
        ],
    },

    interests: {
        title: "Other interests",
        items: [
            "Piano",
            "Dancing",
            "Juggling",
            "Miniature painting",
            "Board games",
            "Geocaching",
            "Lego",
            "Game design",
        ],
    },

    pdfPath: '/cv/CV-Andrei-Livadariu-English.pdf',
} as const;