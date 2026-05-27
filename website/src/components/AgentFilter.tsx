import { useMemo, useState } from 'react';
import type { AgentRole } from '../data/agents';

type Props = {
  agents: AgentRole[];
};

export default function AgentFilter({ agents }: Props) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const lower = query.trim().toLowerCase();
    if (!lower) return agents;
    const normalized = lower.endsWith('ing') ? lower.slice(0, -3) : lower;
    return agents.filter((agent) => {
      const searchable = [agent.name, agent.tagline, agent.mission, ...agent.strengths, ...agent.responsibilities, ...agent.interactions]
        .join(' ')
        .toLowerCase();
      if (searchable.includes(lower) || (normalized && searchable.includes(normalized))) return true;
      const tokens = searchable.split(/\W+/).filter(Boolean);
      return tokens.some((t) => t.includes(lower) || t.includes(normalized) || lower.includes(t) || normalized.includes(t));
    });
  }, [agents, query]);

  return (
    <section aria-label="Agent directory" className="space-y-6">
      <label htmlFor="agent-search" className="block text-sm font-medium text-slate-300">
        Search agents
      </label>
      <input
        id="agent-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Try: testing, planning, orchestration..."
        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-slate-100 outline-none ring-cyan-300/50 transition focus:ring"
      />
      <p className="text-sm text-slate-400" role="status" aria-live="polite">
        {filtered.length} agent{filtered.length === 1 ? '' : 's'} found
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((agent) => (
          <article key={agent.slug} className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
            <h3 className="text-base font-semibold text-white">{agent.name}</h3>
            <p className="mt-1 text-sm text-slate-300">{agent.tagline}</p>
            <a href={`/agents/${agent.slug}`} className="mt-3 inline-flex text-sm text-cyan-300 hover:text-cyan-200">
              Open profile
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
