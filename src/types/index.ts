// Shared domain types for the WiSTEM site.
// Mock data in src/data/mock.ts is shaped to these — swap the data
// source for real API calls later without touching component code.

export type EventCategory =
  | "Academic"
  | "Careers"
  | "Social"
  | "Workshop"
  | "Networking"
  | "Hackathon"

export interface WistemEvent {
  id: string
  title: string
  date: string // ISO date, e.g. "2026-09-16"
  time: string // e.g. "6:00 PM – 8:00 PM"
  location: string
  category: EventCategory
  description: string
  longDescription: string
  organiser: string
  capacity: number
  rsvpCount: number
  color: string // css var name for the category accent
}

export type OpportunityCategory =
  | "Internship"
  | "Graduate Scheme"
  | "Spring Week"
  | "Scholarship"
  | "Competition"
  | "Hackathon"
  | "Mentoring"

export interface Opportunity {
  id: string
  organisation: string
  title: string
  location: string
  deadline: string // ISO date
  category: OpportunityCategory
  description: string
  applyUrl: string
}

export type CommitteeSection =
  | "President"
  | "Vice President"
  | "Treasurer"
  | "Secretary"
  | "Social Media"
  | "Events"

export interface CommitteeMember {
  id: string
  name: string
  role: CommitteeSection
  subject: string
  bio: string
  funFact: string
  linkedin?: string
  instagram?: string
  initials: string
}

export type ResourceGroup = "Careers" | "Learning" | "University" | "Wellbeing"

export interface Resource {
  id: string
  title: string
  group: ResourceGroup
  description: string
  url: string
}

export interface Milestone {
  year: string
  title: string
  description: string
}

export interface FormSubmission {
  name: string
  email: string
  subject: string
  message: string
}

export interface MembershipForm {
  fullName: string
  email: string
  course: string
  yearOfStudy: string
  interests: string[]
  socialHandle?: string
}

export interface EventSuggestion {
  ideaTitle: string
  eventType: string
  reason: string
  suggestedSpeaker?: string
}

export interface OpportunitySubmission {
  title: string
  organisation: string
  category: OpportunityCategory
  deadline: string
  description: string
  applyUrl: string
}
