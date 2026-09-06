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
  {
    slug: "smart-inventory-restaurants",
    title: "Smart Inventory Management System for Restaurants",
    category: "Academic",
    year: "August 2026",
    summary:
      "A Design Methods team project exploring how restaurant managers and staff could reduce repetitive stock checks while making low-stock, expiry and delivery information easier to act on.",
    role: "Academic design team member",
    duration: "Design Methods academic project",
    tools: ["Figma", "Interviews", "Field observation", "Affinity mapping", "SCAMPER", "Crazy 8s", "User testing"],
    tags: ["Restaurant operations", "Inventory management", "UX research", "Team project"],
    accent: "green",
    collaborative: true,
    teamContext:
      "Completed by Amrutha, Jaswant, Sindhuja and Swarup. This case study presents the team's shared research and design process without assigning unverified individual contributions.",
    coverImage: "/projects/smart-inventory-cover.svg",
    externalLinks: [
      {
        label: "Open Figma prototype",
        href: "https://www.figma.com/proto/f2Pr89Z5xmqmVrocRcJGGW/CIE-5---Design-Methods---Semi-Working-Prototype?node-id=204-1027&t=gWKl79Kvm849Gcmg-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=74%3A2178",
      },
    ],
    problem:
      "Restaurant staff repeatedly check stock levels, expiry dates, quality and deliveries by hand. The team's fieldwork found that inventory checks can take roughly 30 to 90 minutes and remain partly manual even where restaurants use digital operating systems.",
    research: [
      "Approached 15 restaurants across two days and recorded 12 interviews with owners, managers and staff.",
      "Observed restaurant work during busy and semi-busy periods, including inventory and restocking walkthroughs.",
      "Synthesised evidence using coding, affinity mapping, empathy mapping and an ecosystem map.",
      "Identified recurring needs around low-stock visibility, expiry urgency, quality checks, delivery tracking and reduced duplicate recording.",
    ],
    process: [
      "Framed the opportunity: make day-to-day inventory management more efficient while reducing staff effort.",
      "Generated concepts using SCAMPER and Crazy 8s, including automatic tracking, stock prediction and attention-based alerts.",
      "Selected an automatic inventory-management concept for restaurant managers and owners.",
      "Built a medium-fidelity Figma prototype covering inventory, reordering, deliveries, quality checks, expiry and billing updates.",
      "Tested key tasks with five participants and iterated the prototype from their feedback.",
    ],
    outcome:
      "The final concept helps staff identify low-stock and expiring products, reorder items, accept deliveries after quality checks, add inventory and understand automatic stock changes after sales. Testing led to clearer expiry indicators, a dedicated Add Item action, reorder confirmation, delivery feedback and improved issue visibility.",
    reflection:
      "The team initially expected stock levels and reordering to dominate. Testing showed that expiry management, delivery tracking and immediate visibility were equally important, reinforcing the value of research-led iteration and explicit system feedback.",
  }
];
