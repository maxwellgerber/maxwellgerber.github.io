'use client';

import { useState } from 'react';

type Slot = { kid: string; epoch: number };

type State = {
  prev: Slot;
  active: Slot;
  next: Slot;
  incoming: Slot;
  log: string[];
  nextEpoch: number;
};

const makeKid = (epoch: number): string => `kid-${String(epoch).padStart(2, '0')}`;

const initialState = (): State => ({
  prev: { kid: makeKid(1), epoch: 1 },
  active: { kid: makeKid(2), epoch: 2 },
  next: { kid: makeKid(3), epoch: 3 },
  incoming: { kid: makeKid(4), epoch: 4 },
  log: ['[t+0] initial JWKS published. signing with kid-02'],
  nextEpoch: 5,
});

const slotStyle = (variant: 'prev' | 'active' | 'next' | 'incoming'): React.CSSProperties => {
  const base: React.CSSProperties = {
    flex: 1,
    minWidth: 110,
    padding: '12px 14px',
    borderRadius: 6,
    border: '1px solid #d0d0d0',
    background: '#fafafa',
    transition: 'background-color 300ms ease, border-color 300ms ease, opacity 300ms ease, transform 300ms ease',
    textAlign: 'center',
  };
  if (variant === 'active') {
    return { ...base, background: '#e6f0ff', borderColor: '#5a8ad8', fontWeight: 600 };
  }
  if (variant === 'prev') {
    return { ...base, opacity: 0.55 };
  }
  if (variant === 'incoming') {
    return { ...base, borderStyle: 'dashed', background: '#fff' };
  }
  return base;
};

export function RotationVisualizer() {
  const [state, setState] = useState<State>(initialState);

  const rotate = () => {
    setState((s) => {
      const fresh: Slot = { kid: makeKid(s.nextEpoch), epoch: s.nextEpoch };
      const rotationNum = s.nextEpoch - 4;
      const line = `[t+${rotationNum}] rotated. dropped=${s.prev.kid}, signing=${s.next.kid}, published=${fresh.kid}`;
      return {
        prev: s.active,
        active: s.next,
        next: s.incoming,
        incoming: fresh,
        log: [line, ...s.log].slice(0, 8),
        nextEpoch: s.nextEpoch + 1,
      };
    });
  };

  const reset = () => setState(initialState());

  const slotLabel = (title: string, sub: string) => (
    <div>
      <div style={{ fontSize: 11, letterSpacing: 0.5, textTransform: 'uppercase', color: '#666' }}>{title}</div>
      <div style={{ fontFamily: 'monospace', fontSize: 15, marginTop: 4 }}>{sub}</div>
    </div>
  );

  return (
    <figure
      style={{
        border: '1px solid #ddd',
        borderRadius: 8,
        padding: 16,
        margin: '1.5em 0',
        background: '#fff',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 10,
          marginBottom: 10,
          flexWrap: 'wrap',
        }}
      >
        <div style={slotStyle('prev')} key={`prev-${state.prev.epoch}`}>
          {slotLabel('prev', state.prev.kid)}
          <div style={{ fontSize: 10, color: '#888', marginTop: 4 }}>in JWKS</div>
        </div>
        <div style={slotStyle('active')} key={`active-${state.active.epoch}`}>
          {slotLabel('active', state.active.kid)}
          <div style={{ fontSize: 10, color: '#2d5bb3', marginTop: 4 }}>← signing new JWTs</div>
        </div>
        <div style={slotStyle('next')} key={`next-${state.next.epoch}`}>
          {slotLabel('next', state.next.kid)}
          <div style={{ fontSize: 10, color: '#888', marginTop: 4 }}>in JWKS (warming)</div>
        </div>
        <div style={slotStyle('incoming')} key={`incoming-${state.incoming.epoch}`}>
          {slotLabel('incoming', state.incoming.kid)}
          <div style={{ fontSize: 10, color: '#888', marginTop: 4 }}>generated, not yet published</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
        <button
          onClick={rotate}
          style={{
            padding: '6px 14px',
            borderRadius: 4,
            border: '1px solid #2d5bb3',
            background: '#2d5bb3',
            color: '#fff',
            cursor: 'pointer',
            fontSize: 14,
          }}
        >
          Rotate
        </button>
        <button
          onClick={reset}
          style={{
            padding: '6px 14px',
            borderRadius: 4,
            border: '1px solid #ccc',
            background: '#fff',
            color: '#333',
            cursor: 'pointer',
            fontSize: 14,
          }}
        >
          Reset
        </button>
      </div>

      <pre
        style={{
          fontFamily: 'monospace',
          fontSize: 12,
          background: '#f5f5f5',
          border: '1px solid #e5e5e5',
          borderRadius: 4,
          padding: '8px 10px',
          margin: 0,
          maxHeight: 150,
          overflowY: 'auto',
          whiteSpace: 'pre',
        }}
      >
        {state.log.join('\n')}
      </pre>
    </figure>
  );
}
