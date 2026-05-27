export type AgentRole = {
  slug: 'orchestrator' | 'planner' | 'qa-tester' | 'researcher';
  name: string;
  tagline: string;
  mission: string;
  strengths: string[];
  responsibilities: string[];
  interactions: string[];
};

export const agents: AgentRole[] = [
  {
    slug: 'orchestrator',
    name: 'Orchestrator',
    tagline: 'Coordinates delivery across the agent team.',
    mission: 'Turn goals into clear execution plans and keep work moving with measurable checkpoints.',
    strengths: ['Task decomposition', 'Scope management', 'Cross-agent coordination'],
    responsibilities: [
      'Break down user requests into verifiable tasks..',
      'Assign ownership and acceptance criteria.',
      'Track progress and escalate blockers quickly.'
    ],
    interactions: ['Collaborates with Planner', 'Validates with QA Tester', 'Consumes Researcher insights']
  },
  {
    slug: 'planner',
    name: 'Planner',
    tagline: 'Designs practical plans with strong sequencing.',
    mission: 'Create concise implementation paths that balance speed, quality, and maintainability.',
    strengths: ['Roadmapping', 'Dependency ordering', 'Risk reduction'],
    responsibilities: [
      'Author phased plans for features and migrations.',
      'Define milestones and handoff criteria.',
      'Align tasks with repository conventions.'
    ],
    interactions: ['Supports Orchestrator', 'Preps QA expectations', 'Incorporates Researcher findings']
  },
  {
    slug: 'qa-tester',
    name: 'QA Tester',
    tagline: 'Guards reliability with targeted validation.',
    mission: 'Ensure behavior is correct, accessible, and stable before shipping.',
    strengths: ['Test strategy', 'Regression prevention', 'Acceptance verification'],
    responsibilities: [
      'Write and run focused tests for new behavior.',
      'Validate acceptance criteria and edge cases.',
      'Report quality signals and unresolved risk.'
    ],
    interactions: ['Verifies Planner criteria', 'Reports to Orchestrator', 'Uses Researcher baselines']
  },
  {
    slug: 'researcher',
    name: 'Researcher',
    tagline: 'Finds facts and context that de-risk implementation.',
    mission: 'Supply accurate technical context, prior art, and tradeoff analysis for better decisions.',
    strengths: ['Repo exploration', 'Comparative analysis', 'Constraint discovery'],
    responsibilities: [
      'Investigate architecture and dependencies.',
      'Document constraints, opportunities, and unknowns.',
      'Provide concise evidence to unblock planning.'
    ],
    interactions: ['Informs Planner', 'Briefs Orchestrator', 'Assists QA with expected behavior']
  }
];

export function getAgentBySlug(slug: string) {
  return agents.find((agent) => agent.slug === slug);
}
