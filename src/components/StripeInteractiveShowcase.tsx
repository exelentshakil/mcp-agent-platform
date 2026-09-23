'use client';

import React, { useState } from 'react';
import {
  Cpu,
  Database,
  ShieldCheck,
  Zap,
  Terminal,
  RefreshCw,
  Sliders,
  CheckCircle2,
  Lock,
  Layers,
  Code2,
  Workflow,
  Send,
  Check,
  Server,
  Key,
} from 'lucide-react';

export function StripeInteractiveShowcase() {
  // Card 1: MCP Server Discovery
  const [selectedServer, setSelectedServer] = useState<'postgres' | 'stripe' | 'github'>('postgres');

  // Card 2: Agentic Function Calling
  const [selectedTask, setSelectedTask] = useState<'db_audit' | 'billing_sync' | 'pr_review'>('db_audit');
  const [dispatching, setDispatching] = useState(false);

  // Card 3: Human-in-the-Loop Permission Gate
  const [permissionMode, setPermissionMode] = useState<'strict' | 'approved'>('strict');

  // Card 4: PostgreSQL Action Engine
  const [queryLimit, setQueryLimit] = useState(25);

  // Card 5: Context Window & Token Budgeting
  const [contextBudget, setContextBudget] = useState(8192);

  // Card 6: Full-Stack Layer Selector
  const [stackLayer, setStackLayer] = useState<'nextjs' | 'nestjs' | 'inngest'>('nestjs');

  const serverSchemas = {
    postgres: {
      name: 'postgres-mcp-server',
      transport: 'stdio (JSON-RPC 2.0)',
      tools: ['query_database', 'inspect_schema', 'analyze_indexes'],
      activeTool: 'query_database(sql: string, max_rows: number)',
      status: 'Connected • PostgreSQL 16 Pool',
    },
    stripe: {
      name: 'stripe-billing-mcp',
      transport: 'SSE (Server-Sent Events)',
      tools: ['create_invoice_item', 'list_subscriptions', 'retry_charge'],
      activeTool: 'create_invoice_item(customer_id, amount_cents)',
      status: 'Connected • Idempotency Active',
    },
    github: {
      name: 'github-automation-mcp',
      transport: 'stdio (Process Bridge)',
      tools: ['create_pull_request', 'dispatch_workflow', 'get_ci_status'],
      activeTool: 'create_pull_request(branch, title, body)',
      status: 'Connected • Octokit v20',
    },
  };

  const agentTasks = {
    db_audit: {
      prompt: '"Identify slow queries over 100ms in PostgreSQL and recommend index migrations."',
      toolsInvoked: ['mcp__postgres__inspect_schema', 'mcp__postgres__analyze_indexes'],
      latency: '42ms',
      output: 'Found missing composite index on subscriptions(status, renewal_date)',
    },
    billing_sync: {
      prompt: '"Find delinquent enterprise accounts and prepare Stripe invoice retry."',
      toolsInvoked: ['mcp__postgres__query_database', 'mcp__stripe__retry_charge'],
      latency: '68ms',
      output: '3 accounts queued with safe exponential retry backoff',
    },
    pr_review: {
      prompt: '"Analyze pull request diff for security vulnerabilities and trigger CI."',
      toolsInvoked: ['mcp__github__create_pull_request', 'mcp__github__dispatch_workflow'],
      latency: '55ms',
      output: 'Security audit clean • 48 tests dispatched to GitHub Actions',
    },
  };

  const handleSimulateDispatch = () => {
    setDispatching(true);
    setTimeout(() => {
      setDispatching(false);
    }, 650);
  };

  return (
    <section className="py-16 sm:py-24 border-t border-[var(--color-border)] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Stripe Two-Tone Category Eyebrow & Master Title */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#533AFD]/20 bg-[#533AFD]/8 px-3 py-1 text-xs font-mono text-[#533AFD] dark:text-[#7A68FF] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Core Model Context Protocol Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] text-[var(--color-text-primary)] leading-tight">
            Six foundational pillars for agent execution.{' '}
            <span className="text-[var(--color-text-secondary)] opacity-75 font-normal">
              Empowering AI agents to interact securely with real APIs, databases, and external services through MCP.
            </span>
          </h2>
        </div>

        {/* 6-Card Interactive Moving Elements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: MCP Server Discovery & Protocol Gateway */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#533AFD]/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Pillar 1 • Protocol Discovery
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Server className="w-4 h-4 text-[#533AFD]" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                MCP server gateway &amp; schema sync
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Connects to standard stdio and SSE MCP servers, dynamically discovering tool definitions and parameters.
              </p>
            </div>

            {/* Interactive Server Switcher */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="flex rounded-md bg-[var(--color-panel-subtle)] p-1 border border-[var(--color-border)] text-xs">
                {(['postgres', 'stripe', 'github'] as const).map((srv) => (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => setSelectedServer(srv)}
                    className={`flex-1 py-1 rounded font-medium transition-all cursor-pointer ${
                      selectedServer === srv
                        ? 'bg-[var(--color-surface)] text-[var(--color-text-primary)] shadow-xs font-bold'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                    }`}
                  >
                    {srv.toUpperCase()}
                  </button>
                ))}
              </div>

              <div className="rounded-lg bg-[var(--color-panel-subtle)] p-3 border border-[var(--color-border)] text-xs space-y-1.5 font-mono">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[var(--color-text-muted)]">Transport:</span>
                  <span className="font-semibold text-[var(--color-text-primary)]">{serverSchemas[selectedServer].transport}</span>
                </div>
                <div className="text-[11px] text-[var(--color-text-secondary)]">
                  <span className="text-[var(--color-text-muted)]">Active Tool:</span>
                  <div className="text-[#533AFD] dark:text-[#7A68FF] font-bold truncate mt-0.5">
                    {serverSchemas[selectedServer].activeTool}
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] text-emerald-600 dark:text-emerald-400 pt-1 border-t border-[var(--color-border)]/60">
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {serverSchemas[selectedServer].status}
                  </span>
                  <span className="text-[var(--color-text-muted)]">JSON-RPC 2.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Autonomous Agentic Function Calling */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Pillar 2 • Tool Execution
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Cpu className="w-4 h-4 text-emerald-500" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Multi-step agent reasoning loops
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Decomposes high-level natural language goals into precise, chained MCP tool invocations with validated parameters.
              </p>
            </div>

            {/* Interactive Task Runner */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="flex rounded-md bg-[var(--color-panel-subtle)] p-1 border border-[var(--color-border)] text-xs">
                {(['db_audit', 'billing_sync', 'pr_review'] as const).map((task) => (
                  <button
                    key={task}
                    type="button"
                    onClick={() => setSelectedTask(task)}
                    className={`flex-1 py-1 rounded font-medium transition-all cursor-pointer truncate ${
                      selectedTask === task
                        ? 'bg-[var(--color-surface)] text-[var(--color-text-primary)] shadow-xs font-bold'
                        : 'text-[var(--color-text-secondary)]'
                    }`}
                  >
                    {task === 'db_audit' ? 'DB Audit' : task === 'billing_sync' ? 'Billing Sync' : 'PR Review'}
                  </button>
                ))}
              </div>

              <div className="rounded-lg bg-[var(--color-panel-subtle)] p-3 border border-[var(--color-border)] text-xs space-y-1.5">
                <div className="text-[11px] text-[var(--color-text-secondary)] italic truncate">
                  {agentTasks[selectedTask].prompt}
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono pt-1 border-t border-[var(--color-border)]/60">
                  <span className="text-[var(--color-text-muted)]">Chained Tools:</span>
                  <span className="font-bold text-[#533AFD] dark:text-[#7A68FF]">
                    {agentTasks[selectedTask].toolsInvoked.length} Invocations ({agentTasks[selectedTask].latency})
                  </span>
                </div>
                <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono truncate">
                  ✓ {agentTasks[selectedTask].output}
                </div>
              </div>

              <button
                type="button"
                onClick={handleSimulateDispatch}
                disabled={dispatching}
                className="w-full h-8 text-xs font-semibold rounded bg-[#533AFD] hover:bg-[#432DE0] text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {dispatching ? (
                  <>
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    Executing Agent Tool Chain...
                  </>
                ) : (
                  <>
                    <Send className="w-3 h-3" />
                    Simulate Agent Tool Calling
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 3: Human-in-the-Loop Permission Gate */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Pillar 3 • Security &amp; RBAC
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <ShieldCheck className="w-4 h-4 text-amber-500" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Zero rogue write permissions
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Separates safe read tools from state-changing write operations. Mandates 1-click human approval for external actions.
              </p>
            </div>

            {/* Interactive Security Gate Switcher */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="rounded-lg bg-[var(--color-panel-subtle)] p-3 border border-[var(--color-border)] text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[var(--color-text-primary)]">Gate Policy:</span>
                  {permissionMode === 'strict' ? (
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20 font-mono text-[10px]">
                      WRITE_APPROVAL_REQUIRED
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20 font-mono text-[10px]">
                      SIGNED_BY_ADMIN
                    </span>
                  )}
                </div>

                <div className="space-y-1 text-[11px] text-[var(--color-text-secondary)]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span>Read tools (SELECT, list, search): Auto-Approved</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-amber-500" />
                    <span>Write tools (UPDATE, charge, dispatch): Sandboxed</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span>Audit log immutable on PostgreSQL event stream</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setPermissionMode((prev) => (prev === 'strict' ? 'approved' : 'strict'))}
                className={`w-full h-8 text-xs font-semibold rounded transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  permissionMode === 'strict'
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    : 'bg-[var(--color-panel-subtle)] text-[var(--color-text-primary)] border border-[var(--color-border)]'
                }`}
              >
                {permissionMode === 'strict' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Sign &amp; Authorize Write Actions
                  </>
                ) : (
                  <>
                    <Lock className="w-3.5 h-3.5" />
                    Enforce Strict Approval Gate
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 4: PostgreSQL & Database MCP Action Engine */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Pillar 4 • Database MCP Engine
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Database className="w-4 h-4 text-blue-500" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                PostgreSQL MCP query bridge
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Safely inspects schemas, generates parameterized queries, and monitors connection pool health.
              </p>
            </div>

            {/* Interactive Query Slider */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--color-text-secondary)]">Max Query Limit:</span>
                <span className="font-bold font-mono text-[var(--color-text-primary)]">{queryLimit} records</span>
              </div>

              <input
                type="range"
                min="10"
                max="100"
                step="5"
                value={queryLimit}
                onChange={(e) => setQueryLimit(parseInt(e.target.value))}
                className="w-full accent-[#533AFD] cursor-pointer"
              />

              <div className="rounded-lg bg-[var(--color-panel-subtle)] p-3 border border-[var(--color-border)] text-xs font-mono space-y-1.5">
                <div className="text-[10px] text-[var(--color-text-muted)]">Live Query AST Verification:</div>
                <div className="text-[11px] text-[#533AFD] dark:text-[#7A68FF] truncate">
                  SELECT id, name, mrr FROM accounts LIMIT {queryLimit}
                </div>
                <div className="flex items-center justify-between text-[10px] text-emerald-600 dark:text-emerald-400 pt-1 border-t border-[var(--color-border)]/60">
                  <span>Execution: 14.8ms</span>
                  <span>Pool: 12/50 Connections</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Resilient Context Window & Error Retry Loop */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#533AFD]/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Pillar 5 • Context &amp; Resilience
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Terminal className="w-4 h-4 text-[#533AFD]" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Context compression &amp; retries
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Manages token budgets, compresses multi-turn tool history, and handles tool timeouts with exponential backoff.
              </p>
            </div>

            {/* Interactive Token Slider */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--color-text-secondary)]">Context Token Window:</span>
                <span className="font-bold font-mono text-[var(--color-text-primary)]">{contextBudget.toLocaleString()} tokens</span>
              </div>

              <input
                type="range"
                min="2048"
                max="32768"
                step="2048"
                value={contextBudget}
                onChange={(e) => setContextBudget(parseInt(e.target.value))}
                className="w-full accent-[#533AFD] cursor-pointer"
              />

              <div className="rounded-lg bg-[var(--color-panel-subtle)] p-3 border border-[var(--color-border)] text-xs space-y-1.5 font-mono">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[var(--color-text-muted)]">Token Utilization:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    {((4200 / contextBudget) * 100).toFixed(1)}% (4,200 active)
                  </span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-[var(--color-text-muted)] pt-1 border-t border-[var(--color-border)]/60">
                  <span>Retry Policy: Exponential (3x)</span>
                  <span className="text-emerald-600 dark:text-emerald-400">Circuit Breaker: OK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6: Full-Stack Architecture (Next.js 15 + NestJS + Inngest) */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#00D4FF]/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Pillar 6 • Full-Stack Stack
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Code2 className="w-4 h-4 text-[#00D4FF]" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Next.js 15 &amp; NestJS backend
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Clean separation: React Server Components frontend, NestJS TypeScript services, and Inngest background queues.
              </p>
            </div>

            {/* Interactive Architecture Layer Switcher */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="flex rounded-md bg-[var(--color-panel-subtle)] p-1 border border-[var(--color-border)] text-xs">
                {(['nextjs', 'nestjs', 'inngest'] as const).map((layer) => (
                  <button
                    key={layer}
                    type="button"
                    onClick={() => setStackLayer(layer)}
                    className={`flex-1 py-1 rounded font-medium transition-all cursor-pointer ${
                      stackLayer === layer
                        ? 'bg-[var(--color-surface)] text-[var(--color-text-primary)] shadow-xs font-bold'
                        : 'text-[var(--color-text-secondary)]'
                    }`}
                  >
                    {layer === 'nextjs' ? 'Next.js 15' : layer === 'nestjs' ? 'NestJS API' : 'Inngest'}
                  </button>
                ))}
              </div>

              <div className="rounded-lg bg-[var(--color-panel-subtle)] p-3 border border-[var(--color-border)] text-xs space-y-1 font-mono">
                <div className="text-[11px] font-bold text-[var(--color-text-primary)]">
                  {stackLayer === 'nextjs'
                    ? 'React Server Components + App Router'
                    : stackLayer === 'nestjs'
                    ? 'Modular NestJS Services + TypeORM'
                    : 'Idempotent Background Worker Bus'}
                </div>
                <div className="text-[10px] text-[var(--color-text-secondary)]">
                  {stackLayer === 'nextjs'
                    ? 'Instant sub-50ms UI updates with WebSocket streaming'
                    : stackLayer === 'nestjs'
                    ? 'Secure MCP protocol transports with stdio & SSE'
                    : 'Guaranteed at-least-once execution for long agent tasks'}
                </div>
                <div className="text-[10px] text-emerald-600 dark:text-emerald-400 pt-1 border-t border-[var(--color-border)]/60">
                  ✓ Production Ready • 100% Strict TypeScript
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
