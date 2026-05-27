import { expect as vitestExpect } from 'vitest';
(globalThis as any).expect = vitestExpect;
import '@testing-library/jest-dom';
