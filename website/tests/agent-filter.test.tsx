import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AgentFilter from '../src/components/AgentFilter';
import { agents } from '../src/data/agents';

describe('AgentFilter', () => {
  it('filters visible agents by query', () => {
    render(<AgentFilter agents={agents} />);

    expect(screen.getByText('4 agents found')).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/search agents/i), {
      target: { value: 'testing' }
    });

    expect(screen.getByText('1 agent found')).toBeInTheDocument();
    expect(screen.getByText('QA Tester')).toBeInTheDocument();
  });
});
