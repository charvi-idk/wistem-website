import type {
  WistemEvent,
  Opportunity,
  CommitteeMember,
  Resource,
  Milestone,
} from "../types"

// All of the site's content lives in this file. Only add details that have
// been confirmed — pages show a friendly empty state when a list is empty.

export const SU_JOIN_URL = "https://www.su.rhul.ac.uk/societies/a-z/18352/"
export const INSTAGRAM_URL = "https://www.instagram.com/rhulwistem/"
export const INSTAGRAM_HANDLE = "@rhulwistem"
export const CONTACT_EMAIL = "womeninstem@royalholloway.su"

export const CATEGORY_COLOR: Record<string, string> = {
  Academic: "var(--color-pink)",
  Careers: "var(--color-heart)",
  Social: "#E8A33D",
  Workshop: "var(--color-pink)",
  Networking: "var(--color-heart)",
  Hackathon: "#3E8C6A",
}

export const events: WistemEvent[] = []

export const opportunities: Opportunity[] = []

export const committee: CommitteeMember[] = [
  { id: "cm1", name: "Charvi Patel", role: "President", initials: "CP" },
  { id: "cm2", name: "Ella Baddeley", role: "Vice President", initials: "EB" },
]

export const resources: Resource[] = [
  { id: "r1", title: "STEM Women", group: "Careers", description: "Careers events and advice connecting women and non-binary STEM students with employers.", url: "https://www.stemwomen.com/" },
  { id: "r2", title: "Prospects", group: "Careers", description: "UK graduate jobs, plus guidance on CVs, applications, and interviews.", url: "https://www.prospects.ac.uk/" },
  { id: "r3", title: "Women's Engineering Society", group: "Careers", description: "A UK charity supporting women in engineering, science, and technology.", url: "https://www.wes.org.uk/" },
  { id: "r4", title: "BCS, The Chartered Institute for IT", group: "Careers", description: "The UK's professional body for people working in computing and IT.", url: "https://www.bcs.org/" },
  { id: "r5", title: "Code First Girls", group: "Learning", description: "Free coding courses and community for women and non-binary people.", url: "https://www.codefirstgirls.com/" },
  { id: "r6", title: "Khan Academy", group: "Learning", description: "Free lessons in maths, science, and computing.", url: "https://www.khanacademy.org/" },
  { id: "r7", title: "freeCodeCamp", group: "Learning", description: "Free, self-paced programming courses and certifications.", url: "https://www.freecodecamp.org/" },
  { id: "r8", title: "MIT OpenCourseWare", group: "Learning", description: "Free lecture notes, exams, and videos from MIT courses.", url: "https://ocw.mit.edu/" },
  { id: "r9", title: "Royal Holloway student pages", group: "University", description: "The university's hub for current students.", url: "https://www.royalholloway.ac.uk/students/" },
  { id: "r10", title: "Royal Holloway Students' Union", group: "University", description: "Societies, events, and everything else run by your SU.", url: "https://www.su.rhul.ac.uk/" },
  { id: "r11", title: "SU Advice", group: "University", description: "Advice and support from the Students' Union.", url: "https://www.su.rhul.ac.uk/advice/" },
  { id: "r12", title: "Student Minds", group: "Wellbeing", description: "The UK's student mental health charity.", url: "https://www.studentminds.org.uk/" },
  { id: "r13", title: "NHS mental health services", group: "Wellbeing", description: "How to find and access NHS mental health support.", url: "https://www.nhs.uk/nhs-services/mental-health-services/" },
  { id: "r14", title: "Samaritans", group: "Wellbeing", description: "Someone to talk to, day or night. Call 116 123 for free.", url: "https://www.samaritans.org/" },
]

export const activities = [
  { title: "Speaker series", description: "Hear from people working in STEM about their careers and how they got there." },
  { title: "Professional development", description: "Build your confidence and network with sessions aimed at life after university." },
  { title: "Skill-building", description: "Hands-on activities to help you pick up new technical and practical skills." },
  { title: "Community outreach", description: "Share STEM with young people locally through activities like building robots and learning to code." },
  { title: "Socials", description: "Time to relax and get to know each other, with activities like bracelet making." },
]

export const milestones: Milestone[] = [
  { year: "2023", title: "Building robots with local pupils", description: "We visited a local primary school with STEAMSTARS and helped pupils build Arduino robots." },
]
