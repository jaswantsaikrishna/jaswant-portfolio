export type ProjectCategory = "Academic" | "Research" | "Competition";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  summary: string;
  role: string;
  duration: string;
  tools: string[];
  tags: string[];
  accent: string;
  problem: string;
  research: string[];
  process: string[];
  outcome: string;
  reflection: string;
  collaborative?: boolean;
  teamContext?: string;
  coverImage?: string;
  presentationImage?: string;
  externalLinks?: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "bmtc-accessibility-audit",
    title: "BMTC Accessibility & Inclusivity Audit",
    category: "Academic",
    year: "May 2026",
    summary:
      "A Foundation Studio 2 group project examining how BMTC's physical and digital services could become safer, clearer and more inclusive for Bengaluru commuters.",
    role: "UX research & design team member",
    duration: "Semester 2 academic project",
    tools: ["Figma", "Interviews", "Surveys", "Field observation", "Affinity mapping"],
    tags: ["Public transport", "Accessibility", "Service design", "Team project"],
    accent: "coral",
    collaborative: true,
    teamContext:
      "Completed by a four-member academic team. This case study presents the group's shared research and design process without assigning unverified individual contributions.",
    coverImage: "/projects/bmtc-audit-cover.png",
    presentationImage: "/projects/bmtc-jury-board.jpg",
    externalLinks: [
      {
        label: "Open Figma prototype",
        href: "https://www.figma.com/design/otMtVaMKoDywZW0MiOI22m/Group-7_Semi-working-Prototype_For-a-Specific-Instance?node-id=0-1",
      },
      {
        label: "View jury presentation board",
        href: "/projects/bmtc-jury-board.jpg",
      },
    ],
    problem:
      "BMTC users can face unsafe, rushed and inaccessible journeys because of unreliable timings, overcrowding, unclear information, time-pressured travel conditions and gaps in inclusive design.",
    research: [
      "Conducted interviews, surveys and observations to understand commuter behaviour, needs and frustrations.",
      "Used field visits, context-of-use analysis and emotional mapping to study crowding, signage, noise, weather and user state.",
      "Synthesised findings through affinity mapping and cognitive-load analysis.",
      "Created personas, empathy maps and journey maps for commuters with different ages, abilities and levels of digital confidence.",
    ],
    process: [
      "Define — identified recurring problems such as overcrowding, unreliable timings and accessibility barriers.",
      "Discover — gathered behavioural evidence through interviews, surveys, observation and field research.",
      "Dream — generated ideas to improve navigation, safety, usability and commuter confidence.",
      "Design — developed personas, journey maps, storyboards and low-fidelity wireframes.",
      "Develop — refined concepts against user needs, feasibility and accessibility considerations.",
      "Deliver — presented research findings and proposed improvements to the commuter experience.",
    ],
    outcome:
      "The team proposed a clearer mobile information structure, dedicated real-time bus tracking, easier access to route and bus-stop information, location-based facility search, larger text, reduced visual clutter, crowd indicators and reporting tools.",
    reflection:
      "The project showed that public-transport UX is not only an app problem. Information, physical environments, staff interactions, safety and accessibility all shape the commuter experience.",
  },
];
