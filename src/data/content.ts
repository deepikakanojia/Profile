export const profile = {
  name: 'Deepika Kanojia',
  tagline: 'R&D Engineer · Instructional Designer · Learning Technologist',
  location: 'India',
  bio: "I design and research technology that makes learning work better — from eye-tracking studies on learner emotion to VR training tools and adaptive tutoring systems. M.Tech in Educational Technology from IIT Bombay, with hands-on experience building SCORM courses, educational games, and intelligent tutoring systems used by thousands of learners.",
  email: 'deepikak.sea@gmail.com',
  phone: '+91-7355487420',
  social: {
    linkedin: 'https://www.linkedin.com/in/deepika-kanojia-b23563199',
    facebook: 'https://www.facebook.com/deepika.kanojia.777/',
  },
}

export const stats = [
  { label: 'Employees Supported', value: '3,500+' },
  { label: 'Students Trained', value: '5,000+' },
  { label: 'Research Projects', value: '10+' },
  { label: 'Onboarding Time Cut', value: '30%' },
]

export const skills = {
  technical: [
    'Eye-Tracking Research',
    'EEG & Cognitive Science',
    'Learning Analytics',
    'Intelligent Tutoring Systems',
    'Technology-Enhanced Learning (TEL)',
    'Educational Game Design',
    'Unity & C#',
    'SCORM Development',
    'LMS Administration',
  ],
  soft: [
    'Problem-Solving',
    'Analytical & Quantitative Reasoning',
    'Flexibility & Adaptability',
    'Interpersonal Communication',
    'Cross-Functional Team Management',
  ],
}

export type Experience = {
  role: string
  org: string
  location?: string
  period?: string
  points: string[]
}

export const experience: Experience[] = [
  {
    role: 'Assistant Manager — Instructional Designer (L&D)',
    org: 'Learning & Development',
    points: [
      'Led a VILT (Virtual Instructor-Led Training) project, delivering a $120K program two months early and earning a Certificate of Excellence',
      'Revamped SCORM-compliant training across POSH, DE&I, EMS, Code of Conduct, GDPR, and Cybersecurity',
      'Reduced onboarding time by 30% and increased learner engagement by 40%',
      'Supported 3,500+ employees across multiple training modules and managed LMS operations',
    ],
  },
  {
    role: 'R&D Project Executive Engineer',
    org: 'Singapore Education Academy (Asia Pacific) Pte Ltd',
    location: 'Singapore',
    points: [
      'Researched human-centered development and evaluated learning products',
      'Created learning content and developed educational game prototypes using Unity and C#',
    ],
  },
  {
    role: 'Curriculum Executive (Mathematics)',
    org: 'Singapore Education Academy (Asia Pacific) Pte Ltd',
    location: 'Singapore',
    points: [
      'Managed mathematics curriculum development for Primary 1–6',
      'Applied pedagogies and instructional design methods tailored to young learners',
    ],
  },
  {
    role: 'Intern',
    org: 'Educational Initiatives',
    points: [
      'Developed a prototype game to strengthen working memory for children aged 6–8, using Unity',
    ],
  },
]

export type Research = {
  title: string
  venue?: string
  role?: string
  points: string[]
}

export const research: Research[] = [
  {
    title: "An eye-tracking study to facilitate learning by automatically investigating negative emotions and informing instructional strategies based on predicted learning outcomes",
    venue: "Master's Thesis, IIT Bombay · Advisor: Prof. Ritayan Mitra",
    points: [
      'Refined a phenomenological base model using discontinuous fixation ranges',
      'Investigated relationships between eye-gaze data and learner emotions',
      'Analyzed learner cognition and affect during tasks, correlating media type with emotional response',
    ],
  },
  {
    title: 'Co-Designing Nudges for Self-Directed Learning within GOAL System',
    venue: 'ICALT (International Conference on Advanced Learning Technologies), USA, 2023 · IEEE Xplore',
    points: [
      'Conference paper on designing behavioral nudges within a self-directed learning system',
    ],
  },
  {
    title: 'Sleep Detection Framework for Self-Directed Learners',
    points: [
      'Built a framework for identifying sleep patterns in self-directed learners using simple classifier approaches',
      'Delivered a multimodal learning data analysis report',
    ],
  },
  {
    title: 'Cognitive Domains and Well-Being',
    venue: 'Singapore Education Academy Asia Pacific Pte Ltd',
    points: [
      'Researched working memory, episodic memory, executive function, attention, and processing speed',
      'Explored lifelong learning skills: critical thinking, problem-solving, mental mathematics, and creativity',
    ],
  },
]

export type Project = {
  title: string
  meta?: string
  description: string
  link?: string
}

export const projects: Project[] = [
  {
    title: 'Speakup++',
    meta: 'Virtual Reality Application · Instructor: Prof. Sahana Murthy',
    description: 'VR-based application for building public speaking confidence through personalized, scenario-based learning — variable audience settings, realistic environments, and guided self-reflection.',
  },
  {
    title: 'Workforce Engagement Analyser',
    meta: 'HCI Course · Instructor: Prof. Chandan Das Gupta',
    description: 'Web-based prototype supporting succession training and employee engagement, analyzing break frequency and work habits via interviews and surveys to identify skill gaps.',
  },
  {
    title: 'Domain Model: Quadratic Equation',
    meta: 'Adaptive Tutoring System · Instructor: Prof. Ramkumar Rajendran',
    description: 'Learner-modeling system for eighth-grade students addressing preferences, knowledge, and misconceptions, with differentiated question levels and adaptive hints.',
  },
  {
    title: 'Kid-English',
    meta: 'Educational Game Design · Instructor: Prof. Shashi Kumar',
    description: "Research-based role-play strategy game teaching English to children with ADHD, incorporating gamification aligned with Maslow's hierarchy and the Zone of Proximal Development.",
  },
  {
    title: 'Video Analytics in Education',
    meta: 'Seminar · Guide: Prof. Ramkumar Rajendran',
    description: 'Investigated correlations between learner video-watching behavior (from log data) and academic performance, identifying best practices for video-based instruction.',
  },
  {
    title: 'Lego Mindstorm: Projectile Launcher',
    meta: 'Instructor: Prof. Sridhar Iyer',
    description: 'Hands-on activity helping students explore mathematical functions and projectile motion by building an EV3 launcher and analyzing motor power vs. shooting distance.',
    link: 'https://docs.google.com/presentation/d/1gY4cXGj2_O-zH7LweeLOB6Z3r4QaF16ysnFNhYsbUY8/edit?usp=sharing',
  },
  {
    title: 'Embedded & Robotics Projects',
    meta: 'Undergraduate Work',
    description: 'Obstacle Avoider & Line Follower robots, a DTMF-controlled system, a traffic control teaching system, LDR-based automatic street lights and doors, and the Militant-AutoBot prototype.',
  },
]

export type ListItem = {
  title: string
  org?: string
  period?: string
  description?: string
}

export const positions: ListItem[] = [
  { title: 'Master Trainer', org: 'Students Solar Ambassador Workshop, IIT Bombay', period: 'October', description: 'Instructed 5,000+ students (classes 5–8) from 100 schools on assembling solar study lamps and electricity conservation.' },
  { title: 'Work Visit Secretary', org: 'IDP in Educational Technology, IIT Bombay', description: 'Managed administrative duties related to work visits.' },
  { title: 'Friday Meeting Secretary', org: 'IDP in Educational Technology, IIT Bombay', description: 'Coordinated departmental Friday meetings.' },
  { title: 'Tech-Connect Coordinator', org: 'Educational Technology Department, IIT Bombay', description: 'Represented the department at technology showcase events.' },
  { title: 'Cultural Secretary', org: 'Hostel 15, IIT Bombay', description: 'Organized cultural activities for hostel residents.' },
  { title: 'Project Exhibitor — SpeakUP++', org: 'Tech Connect, IIT Bombay' },
  { title: 'Robotics Project Exhibitor', org: 'BBD Group of Institutions' },
]

export const workshops: ListItem[] = [
  { title: '10th T4E International Conference', org: 'Goa', period: 'December 9–11, 2019', description: 'Conference on promoting learning and teaching through ICT, covering educational technology and pedagogy.' },
  { title: 'Continuing Education Programme (CEP)', org: 'IIT Bombay', description: 'Volunteered assisting with training delivery on technology and management, meeting industry manpower training needs.' },
]

export const education = [
  { degree: 'M.Tech, Educational Technology', school: 'Indian Institute of Technology Bombay' },
]

export const recognition: ListItem[] = [
  { title: 'Educational Data Mining Competition (NAEP-2019)', description: 'Ranked 22nd internationally.' },
]

export const hobbies = [
  { title: 'Singing & Guitar', description: 'I play guitar and sing — it always soothes me.' },
  { title: 'Song Composing', description: "Songs express what's running through your mind — the art of reflecting emotion in rhythm." },
  { title: 'Sketching', description: 'A gift is a good way to show you care — especially with a hand-drawn sketch.' },
  { title: 'Community Volunteering', description: 'Encouraging girls to participate in education, sports, painting, dancing, and singing.' },
  { title: 'Dancing, Painting & Cooking', description: 'Always up for new and exciting creative challenges.' },
  { title: 'Gardening', description: 'My friends call me a "plant mommy."' },
]

export const nav = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/portfolio-and-work-experience', label: 'Portfolio and Work Experience' },
  { path: '/research', label: 'Research' },
  { path: '/position-of-responsibility', label: 'Position Of Responsibility' },
  { path: '/workshop-and-conferences', label: 'Workshop and Conferences' },
  { path: '/hobbies', label: 'Hobbies' },
  { path: '/contact-me', label: 'Contact me' },
  { path: '/queries-about-m-tech-programme', label: 'Queries about M.Tech Programme' },
]
