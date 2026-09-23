'use client';

import React, { useState, useEffect } from 'react';
import { AreaChart, Area, ResponsiveContainer, YAxis, Tooltip } from 'recharts';

interface BackboneStat {
  value: string;
  label: string;
  color: string;
  domain?: [number, number];
  sparkline: { t: string; v: number }[];
}

const STATS: BackboneStat[] = [
  {
    value: '28 Tools',
    label: 'discovered across 4 active MCP servers with strict JSON-RPC schemas',
    color: '#533AFD',
    sparkline: [
      { t: 'S1', v: 6 },
      { t: 'S2', v: 12 },
      { t: 'S3', v: 18 },
      { t: 'S4', v: 22 },
      { t: 'S5', v: 25 },
      { t: 'S6', v: 28 },
    ],
  },
  {
    value: '18,420',
    label: 'autonomous tool invocations executed with 99.98% SLA and zero schema drift',
    color: '#057A55',
    sparkline: [
      { t: 'Day 1', v: 2400 },
      { t: 'Day 2', v: 5800 },
      { t: 'Day 3', v: 8900 },
      { t: 'Day 4', v: 12400 },
      { t: 'Day 5', v: 15600 },
      { t: 'Day 6', v: 18420 },
    ],
  },
  {
    value: '58ms P99',
    label: 'roundtrip execution latency across stdio and SSE transport protocols',
    color: '#D97706',
    domain: [0, 100],
    sparkline: [
      { t: 'W1', v: 92 },
      { t: 'W2', v: 78 },
      { t: 'W3', v: 69 },
      { t: 'W4', v: 64 },
      { t: 'W5', v: 60 },
      { t: 'W6', v: 58 },
    ],
  },
  {
    value: '0 Rogue Writes',
    label: 'strictly enforced by human-in-the-loop authorization gates and RBAC',
    color: '#0d9488',
    domain: [0, 5],
    sparkline: [
      { t: 'Gate 1', v: 0 },
      { t: 'Gate 2', v: 0 },
      { t: 'Gate 3', v: 0 },
      { t: 'Gate 4', v: 0 },
      { t: 'Gate 5', v: 0 },
      { t: 'Gate 6', v: 0 },
    ],
  },
];

export function BackboneStats() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-12 sm:py-16 border-t border-[var(--color-border)] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered H2 Title with Stripe Opacity Hierarchy */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-[var(--color-text-primary)]">
            The backbone of production AI agent systems
          </h2>
          <p className="mt-2 text-base text-[#2E3C4E] dark:text-slate-300 leading-relaxed">
            Orchestrating Model Context Protocol tools, NestJS microservices, PostgreSQL databases, and autonomous LLM reasoning at scale.
          </p>
        </div>

        {/* 4-Column Stat Strip with Dope Wavy Sparklines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-6 border-t border-[var(--color-border)]">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col justify-between space-y-2">
              <div>
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  {stat.value}
                </div>
                <p className="text-sm sm:text-[14.5px] text-[var(--color-text-secondary)] mt-1.5 leading-normal">
                  {stat.label}
                </p>
              </div>

              {/* Distinct Dope Wavy Sparkline */}
              <div className="h-10 w-full pt-2">
                {mounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={stat.sparkline} margin={{ top: 2, right: 0, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id={`bbGrad_${idx}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={stat.color} stopOpacity={0.35} />
                          <stop offset="100%" stopColor={stat.color} stopOpacity={0.0} />
                        </linearGradient>
                      </defs>
                      {stat.domain && <YAxis hide domain={stat.domain} />}
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] px-2 py-0.5 text-xs font-semibold shadow-xs text-[var(--color-text-primary)]">
                                {payload[0].value}
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="v"
                        stroke={stat.color}
                        strokeWidth={2}
                        fill={`url(#bbGrad_${idx})`}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
