import { describe, expect, it } from 'vitest';
import { agents, getAgentBySlug } from '../src/data/agents';

describe('agent data loading', () => {
  it('includes all required agents', () => {
    const slugs = agents.map((agent) => agent.slug);
    expect(slugs).toEqual(expect.arrayContaining(['orchestrator', 'planner', 'qa-tester', 'researcher']));
  });

  it('loads one agent by slug', () => {
    const agent = getAgentBySlug('planner');
    expect(agent?.name).toBe('Planner');
  });
});
