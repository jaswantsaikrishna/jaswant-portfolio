export type ProjectCategory = "Academic" | "Personal" | "Research" | "Competition";

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
  {
    slug: "sahaja-ai",
    title: "Sahaja AI — inclusive multilingual assistance",
    category: "Personal",
    year: "2026",
    summary:
      "An exploration of how voice, language switching, and guided flows can make digital services more approachable.",
    role: "UX Researcher & Interaction Designer",
    duration: "Ongoing",
    tools: ["Figma", "Miro", "Voice prototyping"],
    tags: ["Accessibility", "Conversational UX", "Inclusive design"],
    accent: "blue",
    problem:
      "Many users can speak naturally in their preferred language but still struggle with rigid forms, technical vocabulary, and unclear next steps.",
    research: [
      "Comparative review of voice interfaces",
      "Interviews around language and confidence",
      "Task analysis of form-heavy services",
    ],
    process: [
      "Defined high-friction moments",
      "Designed a hybrid voice-and-screen flow",
      "Created recovery states for misunderstood input",
      "Tested tone, pacing, and confirmation patterns",
    ],
    outcome:
      "The concept demonstrates how conversational assistance can complement—not merely duplicate—existing voice input.",
    reflection:
      "Voice becomes useful when it reduces decision effort and explains consequences, not when it only transcribes speech.",
  },
  {
    slug: "campus-navigation",
    title: "Making campus navigation less stressful",
    category: "Academic",
    year: "2026",
    summary:
      "A wayfinding experience designed around how new students actually ask for, interpret, and remember directions.",
    role: "UX Researcher & Product Designer",
    duration: "6 weeks",
    tools: ["Figma", "FigJam", "Notion"],
    tags: ["Field research", "Information architecture", "Prototyping"],
    accent: "coral",
    problem:
      "New students often depend on landmarks, informal instructions, and repeated help requests because existing campus maps do not match their mental model.",
    research: [
      "Contextual interviews with students",
      "Observation at high-confusion junctions",
      "Affinity mapping of recurring navigation failures",
    ],
    process: [
      "Mapped the end-to-end arrival journey",
      "Reframed locations around recognizable landmarks",
      "Tested low-fidelity routes before visual styling",
      "Iterated labels and directional cues after usability testing",
    ],
    outcome:
      "The final prototype reduced wrong turns in moderated tests and made route instructions easier to recall.",
    reflection:
      "The strongest solution was not adding more map detail; it was matching the language and landmarks people already use.",
  },
  {
    slug: "docpilot",
    title: "DocPilot — context-aware product guidance",
    category: "Research",
    year: "2026",
    summary:
      "A support experience that gathers only the context needed to produce accurate, version-specific guidance.",
    role: "Product Designer & Researcher",
    duration: "8 weeks",
    tools: ["Figma", "FigJam", "User flows"],
    tags: ["Enterprise UX", "Progressive disclosure", "Service design"],
    accent: "green",
    problem:
      "Generic support chatbots often provide broad answers without knowing the user's product, version, configuration, permissions, or goal.",
    research: [
      "Mapped support-agent diagnostic questions",
      "Audited product documentation structures",
      "Grouped inputs by necessity and confidence",
    ],
    process: [
      "Designed progressive context collection",
      "Separated required from optional inputs",
      "Added visible assumptions and editable context",
      "Built response states for uncertainty and escalation",
    ],
    outcome:
      "The prototype keeps the first interaction lightweight while allowing complexity to emerge only when the problem requires it.",
    reflection:
      "Good support UX is not about asking every possible question—it is about asking the next best question.",
  },
  {
    slug: "design-challenge",
    title: "Design challenge concept",
    category: "Competition",
    year: "2026",
    summary:
      "A placeholder format for a future design jam, hackathon, or competition case study.",
    role: "Product Designer",
    duration: "48 hours",
    tools: ["Figma"],
    tags: ["Rapid design", "Storytelling"],
    accent: "yellow",
    problem: "Replace this entry with a real competition brief when available.",
    research: ["Brief analysis", "Quick user validation"],
    process: ["Frame", "Sketch", "Prototype", "Present"],
    outcome: "A concise competition-ready case-study format.",
    reflection:
      "Document decisions and constraints, not only the final screens.",
  },
];
