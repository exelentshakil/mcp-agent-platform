/**
 * NexusMCP - Full-Stack AI Agent & Model Context Protocol Platform
 * Configuration Hub & Real-World Domain Schema
 */

export interface NavItem {
  id: string;
  label: string;
}

export interface MetricItem {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'neutral' | 'down';
  subtext: string;
  badge: string;
}

export interface TableRow {
  id: string;
  entityName: string;
  category: string;
  status: 'active' | 'verified' | 'queued' | 'flagged';
  latency: string;
  provider: string;
  updatedAt: string;
  payload: Record<string, unknown>;
}

export interface SiteConfig {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  archetype: 'stripe' | 'linear' | 'notion' | 'lovable' | 'bloomberg' | 'apple';
  primaryNav: NavItem[];
  metrics: MetricItem[];
  workflow: {
    badge: string;
    title: string;
    description: string;
    inputLabel: string;
    inputPlaceholder: string;
    defaultInput: string;
    buttonLabel: string;
    sampleResponse: Record<string, unknown>;
  };
  table: {
    badge: string;
    title: string;
    description: string;
    columns: { key: string; label: string }[];
    rows: TableRow[];
  };
}

export const siteConfig: SiteConfig = {
  slug: 'mcp-agent-platform',
  name: 'NexusMCP',
  badge: 'v2.4 Production MCP Architecture',
  tagline: 'Full-Stack AI Agent & Model Context Protocol Platform',
  description: 'Production-ready AI agent orchestration engine built with Next.js 15, NestJS, TypeScript, PostgreSQL, and Model Context Protocol (MCP) server integration for secure, actionable tool execution.',
  archetype: 'stripe',
  primaryNav: [
    { id: 'cockpit', label: 'Agent Orchestration Cockpit' },
    { id: 'pipeline', label: 'Interactive MCP Tool Runner' },
    { id: 'records', label: 'MCP Server & Tool Registry' },
  ],
  metrics: [
    {
      id: 'mcp_servers',
      title: 'Connected MCP Servers',
      value: '4 Active Servers',
      change: '28 Tools Discovered',
      trend: 'up',
      subtext: 'PostgreSQL • Stripe • GitHub • Slack',
      badge: 'JSON-RPC 2.0 Live',
    },
    {
      id: 'actions_executed',
      title: 'Agent Tool Invocations',
      value: '18,420 Actions',
      change: '99.98% Success Rate',
      trend: 'up',
      subtext: 'P99 Latency: 58ms • Zero Schema Drift',
      badge: 'Function Calling',
    },
    {
      id: 'security_gates',
      title: 'Permission & Access Gates',
      value: '100% Policy Enforced',
      change: 'Zero Unsigned Writes',
      trend: 'up',
      subtext: 'Granular RBAC • Human Signoff for Writes',
      badge: 'Zero Rogue Writes',
    },
  ],
  workflow: {
    badge: 'Step 1 • Live MCP Agent Tool Invocations',
    title: 'Autonomous Agent Request Analyzer & MCP Tool Dispatcher',
    description: 'Test multi-step agent reasoning: decompose user intent, select matching MCP tools, validate strict JSON schemas, and execute through secure server bridges.',
    inputLabel: 'User Goal, Automation Trigger, or Agent Prompt',
    inputPlaceholder: 'Enter an operational request for the AI agent (e.g. Query database, run API action, sync records)...',
    defaultInput: 'User request: "Query our PostgreSQL production database to find all enterprise customers with pending renewals over $50,000 this month, calculate their contract discount tier, and prepare a Slack summary message for the account executive team."',
    buttonLabel: 'Dispatch AI Agent & Execute MCP Tools',
    sampleResponse: {
      status: 'AGENT_EXECUTION_COMPLETED',
      task_id: 'TASK-MCP-9042',
      intent_classification: 'Multi-Tool Database Query & Operational Notification',
      llm_reasoning_steps: [
        'Parsed goal: Extract renewal pipeline from PostgreSQL database.',
        'Tool Selection: Matched mcp__postgres__query_database with SQL parameter.',
        'Tool Selection: Matched mcp__pricing__calculate_tier for deterministic calculations.',
        'Tool Selection: Matched mcp__slack__send_summary for team notification.',
      ],
      mcp_tools_invoked: [
        {
          tool: 'mcp__postgres__query_database',
          server: 'postgres-mcp-server',
          transport: 'stdio',
          parameters: {
            sql: "SELECT company_name, mrr, renewal_date, contract_tier FROM subscriptions WHERE renewal_date <= NOW() + INTERVAL '30 days' AND mrr >= 4166.67 ORDER BY mrr DESC LIMIT 10",
          },
          result: {
            records_found: 8,
            total_annual_value: '$584,200.00',
            top_accounts: ['Apex Capital ($124k)', 'Helios Logistics ($88k)', 'Vanguard Health ($72k)'],
          },
          latency_ms: 22,
          security_check: 'PASS (Read-only query allowed by policy)',
        },
        {
          tool: 'mcp__pricing__calculate_tier',
          server: 'pricing-engine-mcp',
          transport: 'sse',
          parameters: {
            account_type: 'enterprise',
            annual_volume: 584200,
            tenure_years: 2,
          },
          result: {
            recommended_discount_pct: 12.5,
            incentive_margin_protected: true,
            deterministic_math_verified: true,
          },
          latency_ms: 8,
          security_check: 'PASS (Pure deterministic calculation)',
        },
        {
          tool: 'mcp__slack__send_summary',
          server: 'slack-mcp-server',
          transport: 'http-stream',
          parameters: {
            channel: '#enterprise-renewals',
            subject: 'Monthly High-Value Renewal Briefing (8 Accounts / $584.2k ACV)',
          },
          result: {
            message_staged: true,
            status: 'HELD_FOR_HUMAN_APPROVAL',
            reason: 'Policy rule: Outbound team broadcasts require 1-click confirmation',
          },
          latency_ms: 18,
          security_check: 'GATE_ENFORCED (Human Signoff Required)',
        },
      ],
      full_stack_telemetry: {
        frontend: 'Next.js 15 App Router (React Server Components)',
        backend_service: 'NestJS Microservice (Node.js / TypeScript)',
        database: 'PostgreSQL 16 with Connection Pooler',
        event_queue: 'Inngest Idempotent Worker Bus',
        ai_provider: 'OpenAI GPT-4o with Google Gemini 2.0 Failover',
        total_pipeline_latency_ms: 78,
      },
    },
  },
  table: {
    badge: 'Live MCP Server & Tool Registry',
    title: 'Registered MCP Servers, Tools & Agent Executions',
    description: 'Real-time registry of active MCP servers, exposed tool schemas, permission levels, and agent execution logs.',
    columns: [
      { key: 'id', label: 'Tool Operation ID' },
      { key: 'entityName', label: 'MCP Server & Tool' },
      { key: 'category', label: 'Protocol & Capability' },
      { key: 'status', label: 'Permission Policy' },
      { key: 'latency', label: 'Latency' },
      { key: 'action', label: 'Inspection' },
    ],
    rows: [
      {
        id: 'MCP-8824',
        entityName: 'postgres__query_database',
        category: 'PostgreSQL Server (stdio)',
        status: 'verified',
        latency: '22ms',
        provider: 'NestJS Node.js Driver',
        updatedAt: '1 min ago',
        payload: {
          server_id: 'mcp-pg-prod-01',
          tool_name: 'query_database',
          schema: {
            type: 'object',
            properties: {
              sql: { type: 'string', description: 'SQL query string' },
              max_rows: { type: 'number', default: 100 },
            },
            required: ['sql'],
          },
          permission_level: 'READ_ONLY_ENFORCED',
          audit_trail: 'Zero destructive statements permitted by AST parser',
          connection_pool: 'Active (14/50 connections)',
        },
      },
      {
        id: 'MCP-8823',
        entityName: 'stripe__create_invoice_item',
        category: 'Stripe Billing Server (SSE)',
        status: 'active',
        latency: '48ms',
        provider: 'NestJS Stripe Gateway',
        updatedAt: '3 mins ago',
        payload: {
          server_id: 'mcp-stripe-billing',
          tool_name: 'create_invoice_item',
          parameters: {
            customer_id: 'cus_N9248xA',
            amount_cents: 450000,
            currency: 'usd',
            description: 'Annual Platform License',
          },
          permission_level: 'WRITE_APPROVAL_REQUIRED',
          idempotency_key: 'idem_9921_mcp_verified',
          status: 'Committed to Stripe API with idempotency guarantee',
        },
      },
      {
        id: 'MCP-8822',
        entityName: 'github__create_pull_request',
        category: 'GitHub Automation Server (stdio)',
        status: 'verified',
        latency: '64ms',
        provider: 'Octokit Bridge',
        updatedAt: '6 mins ago',
        payload: {
          server_id: 'mcp-github-core',
          tool_name: 'create_pull_request',
          repository: 'org/saas-core',
          branch: 'feat/agent-mcp-integration',
          automated_checks: 'TypeScript build pass, 48 unit tests pass',
          security_scan: 'OWASP clean, zero leaked secret tokens',
        },
      },
      {
        id: 'MCP-8821',
        entityName: 'slack__dispatch_alert',
        category: 'Slack Webhook Server (HTTP)',
        status: 'active',
        latency: '31ms',
        provider: 'NestJS Slack Bot',
        updatedAt: '9 mins ago',
        payload: {
          server_id: 'mcp-slack-notify',
          channel: '#devops-alerts',
          blocks: 3,
          action_taken: 'Automated notification of completed database backup',
          retry_policy: 'Exponential backoff (3 attempts)',
        },
      },
      {
        id: 'MCP-8820',
        entityName: 'custom_api__sync_user_state',
        category: 'NestJS REST Service',
        status: 'verified',
        latency: '19ms',
        provider: 'PostgreSQL + TypeORM',
        updatedAt: '14 mins ago',
        payload: {
          endpoint: '/api/v1/users/sync',
          payload_hash: 'sha256:4a8b2...9f',
          tenancy: 'Multi-tenant isolated schema',
          result: 'Synchronized 14 user permission sets',
        },
      },
    ],
  },
};
