export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "ai" | "web" | "mobile" | "testing";
  technologies: string[];
  image: string;
  images: string[];
  liveUrl: string;
  githubUrl: string;
  stats: {
    stars: number;
    forks: number;
    views: number;
  };
  features: string[];
  status: "completed" | "in-progress" | "planned";
}

export const projects: Project[] = [
  {
    id: "panzer-gpt",
    title: "Panzer GPT",
    description:
      "Advanced AI-powered conversational assistant with military-grade security and strategic analysis capabilities.",
    longDescription:
      "A sophisticated AI assistant built with cutting-edge natural language processing, featuring encrypted communications, strategic planning modules, and advanced threat analysis capabilities.",
    category: "ai",
    technologies: [
      "Python",
      "OpenAI API",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Docker",
      "Redis",
    ],
    image: "src/assets/PanzerAI.png",
    images: [
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/7565442/pexels-photo-7565442.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    liveUrl: "https://panzer-gpt-demo.com",
    githubUrl: "https://github.com/yourusername/panzer-gpt",
    stats: {
      stars: 1247,
      forks: 198,
      views: 15420,
    },
    features: [
      "Natural Language Processing",
      "Encrypted Communications",
      "Strategic Analysis",
      "Multi-model Support",
    ],
    status: "completed",
  },
  {
    id: "fit-master-pro",
    title: "Fit Master Pro",
    description:
      "Comprehensive fitness tracking application with AI-powered workout recommendations and nutrition planning.",
    longDescription:
      "A complete fitness ecosystem featuring personalized workout plans, nutrition tracking, progress analytics, and community features to help users achieve their fitness goals.",
    category: "mobile",
    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "TensorFlow",
      "Node.js",
      "MongoDB",
    ],
    image: "src/assets/FitMaster.png",
    images: [
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    liveUrl: "https://fitmaster-pro.app",
    githubUrl: "https://github.com/yourusername/fit-master-pro",
    stats: {
      stars: 892,
      forks: 156,
      views: 12800,
    },
    features: [
      "AI Workout Plans",
      "Nutrition Tracking",
      "Progress Analytics",
      "Social Features",
    ],
    status: "completed",
  },
  {
    id: "gamehub",
    title: "GameHub",
    description:
      "Modern gaming platform with real-time multiplayer capabilities, tournaments, and comprehensive game discovery.",
    longDescription:
      "A next-generation gaming platform that connects players worldwide with advanced matchmaking, tournament systems, game reviews, and social features.",
    category: "web",
    technologies: [
      "Next.js",
      "WebSocket",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
    image: "src/assets/Gamehub.png",
    images: [
      "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    liveUrl: "https://gamehub-platform.com",
    githubUrl: "https://github.com/yourusername/gamehub",
    stats: {
      stars: 2156,
      forks: 387,
      views: 28900,
    },
    features: [
      "Real-time Multiplayer",
      "Tournament System",
      "Game Discovery",
      "Social Features",
    ],
    status: "completed",
  },
  {
    id: "ai-code-tester",
    title: "Automated AI Code Tester",
    description:
      "Intelligent code testing platform that automatically generates and executes comprehensive test suites using AI.",
    longDescription:
      "An advanced testing framework powered by machine learning that analyzes code patterns, generates intelligent test cases, and provides comprehensive coverage reports.",
    category: "testing",
    technologies: [
      "Python",
      "TensorFlow",
      "Jest",
      "Selenium",
      "Docker",
      "GitHub Actions",
      "AWS",
    ],
    image: "src/assets/CodeReview.png",
    images: [
      "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    liveUrl: "https://ai-code-tester.dev",
    githubUrl: "https://github.com/yourusername/ai-code-tester",
    stats: {
      stars: 1834,
      forks: 294,
      views: 21500,
    },
    features: [
      "AI Test Generation",
      "Coverage Analysis",
      "CI/CD Integration",
      "Performance Testing",
    ],
    status: "completed",
  },
  {
    id: "energy-app",
    title: "Energy",
    description:
      "A visually stunning app to compare programming languages by energy consumption, speed, and memory usage.",
    longDescription:
      "Energy is an interactive web application that visualizes and compares the energy efficiency, execution time, and memory usage of popular programming languages. It features beautiful neon-inspired design, real-time comparisons, and educational insights to help developers make greener tech choices.",
    category: "web",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Chart.js",
      "JavaScript",
      "Netlify",
    ],
    image: "src/assets/Energy.png",
    images: [
      "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    liveUrl: "https://energy-app-demo.com",
    githubUrl: "https://github.com/yourusername/energy-app",
    stats: {
      stars: 1200,
      forks: 210,
      views: 18500,
    },
    features: [
      "Language Efficiency Comparison",
      "Interactive Charts",
      "Neon Dark Mode UI",
      "Live Filtering & Sorting",
      "Educational Insights",
    ],
    status: "active",
  },
];
