'use client';

import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, ArrowRight, ShieldCheck, Zap, Activity } from 'lucide-react';
import { mediaConfig } from '@/config/media';
import { siteConfig } from '@/config/site';

export function EnterpriseMediaShowcase() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // 3 Fully Bespoke, Domain-Specific Editorial Architectural Pillars
  const architecturalPillars = [
    {
      id: 'pillar-mcp',
      tag: 'MCP Protocol Transports',
      title: 'Stdio & SSE Tool Execution Bridges',
      description: 'Standardized Model Context Protocol client connecting agents to databases, GitHub, Stripe, and internal APIs with sub-60ms JSON-RPC roundtrips.',
    },
    {
      id: 'pillar-agents',
      tag: 'Agentic Tool Calling',
      title: 'Multi-Step Autonomous Workflow Engine',
      description: 'OpenAI function calling with strict JSON schema validation, multi-turn conversational memory, and automated retry loops on tool failures.',
    },
    {
      id: 'pillar-backend',
      tag: 'NestJS & PostgreSQL',
      title: 'Production Full-Stack Architecture',
      description: 'Next.js 15 App Router frontend paired with modular NestJS backend services, TypeORM connection pooling, and real-time WebSocket telemetry.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Part 1: Ambient High-Throughput Video Stage with High-Contrast Typography Scrim */}
        <div className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-black shadow-xl min-h-[420px] sm:min-h-[480px] flex items-end">
          {/* Looping Ambient HD Video with Dark Gradient Scrim */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <video
              ref={videoRef}
              src={mediaConfig.ambientVideo.videoUrl}
              poster={mediaConfig.ambientVideo.posterUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-60 scale-105 transition-transform duration-1000"
            />
            {/* Multi-Layer Deep Scrim to Ensure 100% Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          {/* Foreground High-Contrast Controls & Copy */}
          <div className="relative z-10 w-full p-6 sm:p-10 flex flex-col justify-between gap-8">
            {/* Top Bar: Live Status & Controls */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full bg-black/75 backdrop-blur-md px-3.5 py-1.5 text-xs font-mono text-white border border-white/20 shadow-lg">
                <span className="h-2 w-2 rounded-full bg-[#00D924] animate-pulse" />
                <span className="font-semibold tracking-wide" style={{ color: '#ffffff' }}>Active MCP Tool Bus</span>
                <span className="text-white/40">|</span>
                <span className="text-slate-300" style={{ color: '#CBD5E1' }}>JSON-RPC 2.0 Gateway</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause ambient video" : "Play ambient video"}
                  className="p-2.5 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md text-white transition-all border border-white/20 shadow-md cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  className="p-2.5 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md text-white transition-all border border-white/20 shadow-md cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
                </button>
              </div>
            </div>

            {/* Bottom Copy: High-Contrast Dark Card Scrim for Pristine Contrast */}
            <div className="max-w-2xl rounded-xl bg-black/85 backdrop-blur-md border border-white/20 p-6 sm:p-7 shadow-2xl space-y-3">
              <div
                style={{ color: '#00D4FF' }}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider !text-[#00D4FF] font-bold"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
                Autonomous MCP Agent Engine
              </div>
              <h2
                style={{ color: '#ffffff' }}
                className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight !text-white leading-tight drop-shadow-sm"
              >
                Building the autonomous agent infrastructure for {siteConfig.name}.
              </h2>
              <p
                style={{ color: '#E2E8F0' }}
                className="text-xs sm:text-sm !text-slate-200 leading-relaxed font-normal"
              >
                Empowering AI agents to securely query PostgreSQL databases, trigger external APIs, and execute actions with strict human permission gates.
              </p>
            </div>
          </div>
        </div>

        {/* Part 2: High-Resolution Photographic Case Study Banner (Stripe Section 5 Standard) */}
        <div>
          {/* Header */}
          <div className="max-w-3xl mb-8 sm:mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-[#533AFD] dark:text-[#7A68FF] font-semibold mb-1">
              Full-Stack AI Agent & MCP Architecture
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Powering operations of all sizes.{' '}
              <span className="text-[var(--color-text-secondary)] opacity-75 font-normal">
                Purpose-built for AI agents that perform real-world actions across APIs, databases, and microservices.
              </span>
            </h3>
          </div>

          {/* Full-Bleed Photographic Case Study Card */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden shadow-2xs hover:shadow-xs transition-shadow mb-8">
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={mediaConfig.caseStudyPhoto.url}
                alt="Full-stack developer inspecting AI agent and MCP tool calling workflows"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-2.5 py-1 rounded-[4px] bg-black/75 text-white backdrop-blur-md text-[10px] font-mono font-semibold border border-white/15">
                  Production Case Study
                </span>
                <span className="px-2.5 py-1 rounded-[4px] bg-[#533AFD]/90 text-white backdrop-blur-md text-[10px] font-mono font-semibold">
                  Sub-60ms Tool Call
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1 max-w-2xl">
                <div className="text-base sm:text-lg font-bold text-[var(--color-text-primary)]">
                  Production MCP Agent Orchestration
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                  Integrated existing MCP servers with OpenAI tool calling, connecting NestJS microservices and PostgreSQL with zero schema drift.
                </p>
              </div>

              <div className="flex items-center gap-6 text-xs font-mono text-[var(--color-text-secondary)] shrink-0">
                <div>
                  <div className="text-lg font-bold text-[var(--color-text-primary)]">99.98%</div>
                  <div className="text-[10px] opacity-75">Tool Success</div>
                </div>
                <div className="h-8 w-[1px] bg-[var(--color-border)]" />
                <div>
                  <div className="text-lg font-bold text-[#533AFD] dark:text-[#7A68FF]">0 Writes</div>
                  <div className="text-[10px] opacity-75">Without Approval</div>
                </div>
              </div>
            </div>
          </div>

          {/* 3-Column Editorial Photography Cards (Domain-Specific, Unique Descriptions) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaConfig.editorialPhotos.map((photo, idx) => {
              const pillar = architecturalPillars[idx % architecturalPillars.length];

              return (
                <div
                  key={photo.id}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-[var(--color-panel-subtle)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.url}
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 rounded-[4px] bg-[#0D1738]/90 text-white backdrop-blur-md text-[10px] font-mono font-semibold border border-white/15">
                        {pillar.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h4 className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[#533AFD] dark:group-hover:text-[#7A68FF] transition-colors leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
