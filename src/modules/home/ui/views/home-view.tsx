"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle,
  Clock,
  FileText,
  Play,
  Sparkles,
  Star,
  TrendingUp,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function getGreeting(): { text: string; emoji: string } {
  const hour = new Date().getHours();
  if (hour < 12) return { text: "Good morning", emoji: "🌅" };
  if (hour < 17) return { text: "Good afternoon", emoji: "☀️" };
  return { text: "Good evening", emoji: "🌙" };
}

export const HomeView = () => {
  const greeting = getGreeting();
  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* ── TOP GREETING BAR ───────────────────────────────── */}
      <div className="border-b border-slate-100 bg-white px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between gap-4">
          {/* greeting */}
          <div className="flex items-center gap-3">
            <span className="text-3xl leading-none">{greeting.emoji}</span>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-widest text-slate-400">
                {new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" })}
              </p>
              <h2 className="text-xl font-bold text-slate-800 sm:text-2xl">
                {greeting.text},{" "}
                <span className="bg-linear-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  Aakash
                </span>
                !{" "}
                <span className="text-sm font-normal text-slate-400">Ready to learn something new?</span>
              </h2>
            </div>
          </div>
          {/* quick stats */}
          <div className="hidden sm:flex items-center divide-x divide-slate-100">
            {[
              { label: "Sessions today", value: "18", color: "text-emerald-600" },
            ].map((s) => (
              <div key={s.label} className="px-4 text-right">
                <div className={`text-lg font-bold ${s.color}`}>{s.value}</div>
                <div className="text-[11px] text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white text-slate-900">
        {/* colorful blobs */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-emerald-200/70 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -left-20 h-72 w-72 rounded-full bg-blue-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 right-1/3 h-60 w-60 rounded-full bg-violet-200/50 blur-3xl" />

        <div className="container mx-auto max-w-6xl px-6 py-20 lg:py-28">
          {/* live pill */}
          <div className="mb-8 flex items-center justify-center gap-3 sm:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-medium text-emerald-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              247 students learning right now &nbsp;·&nbsp; 18 live sessions
            </span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* left */}
            <div>
              <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Your personal&nbsp;
                <span className="bg-linear-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
                  AI tutor
                </span>
                ,<br />available 24/7
              </h1>
              <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-500">
                BrainZo lets you create your own AI agents and jump straight
                into a live video call — ask questions, get instant answers,
                and chat in real time. Simple, fast, and built for learning.
              </p>

              <div className="mb-8 flex flex-wrap gap-3">
                <Link href="/sign-up">
                  <Button
                    size="lg"
                    className="bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-200 transition-all"
                  >
                    Start for free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#how">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-300 text-slate-700 hover:bg-slate-50"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    See how it works
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400">
                <span className="flex items-center gap-1"><CheckCircle className="h-3 w-3 text-emerald-500" /> 3 free sessions</span>
                <span className="flex items-center gap-1"><CheckCircle className="h-3 w-3 text-emerald-500" /> No credit card needed</span>
                <span className="flex items-center gap-1"><CheckCircle className="h-3 w-3 text-emerald-500" /> Cancel anytime</span>
              </div>
            </div>

            {/* right — platform preview card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-100/80">
              {/* header */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Brain className="h-4 w-4 text-emerald-500" />
                  AI Tutors Online
                </div>
                <Badge className="bg-amber-100 text-amber-700 border-amber-200 text-[11px]">
                  🚧 Coming Soon
                </Badge>
              </div>

              {/* what you can do now */}
              <div className="space-y-2.5">
                {[
                  { emoji: "🤖", title: "Create your AI agent",       desc: "Set up a custom AI tutor for any subject",   color: "bg-emerald-50",  available: true  },
                  { emoji: "🎥", title: "Start a live video call",     desc: "Jump into a 1-on-1 video session instantly",  color: "bg-blue-50",    available: true  },
                  { emoji: "💬", title: "Chat in real time",           desc: "Ask doubts and get answers during the call",  color: "bg-violet-50",  available: true  },
                  { emoji: "📄", title: "Transcripts & summaries",     desc: "Auto notes from every session",               color: "bg-slate-50",   available: true  },
                ].map((f) => (
                  <div key={f.title} className={`flex items-center gap-3 rounded-xl border border-slate-100 ${f.color} p-3`}>
                    <span className="text-xl shrink-0">{f.emoji}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-slate-900">{f.title}</p>
                      <p className="text-xs text-slate-400">{f.desc}</p>
                    </div>
                    {f.available
                      ? <CheckCircle className="h-4 w-4 shrink-0 text-emerald-500" />
                      : <span className="text-[10px] font-semibold text-amber-600 bg-amber-100 rounded-full px-2 py-0.5 shrink-0">Soon</span>
                    }
                  </div>
                ))}
              </div>

              <div className="mt-4 border-t border-slate-100 pt-3 text-center text-xs text-slate-400">
                <Link href="/agents" className="hover:text-emerald-600 transition-colors">
                  Create your first agent →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────────────── */}
      <section className="border-y border-emerald-100 bg-linear-to-r from-emerald-50 to-blue-50 py-8">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "50K+",   label: "Lessons completed",  color: "text-emerald-600" },
              { value: "5,200+", label: "Active students",     color: "text-blue-600" },
              { value: "98%",    label: "Satisfaction rate",   color: "text-violet-600" },
              { value: "4.8 ★",  label: "Average rating",      color: "text-amber-500" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
                <div className="mt-0.5 text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-emerald-600">What you can do now</p>
            <h2 className="text-3xl font-bold leading-snug text-slate-900">
              Simple, powerful, and ready to use
            </h2>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              BrainZo is live and growing. Here&rsquo;s what&rsquo;s available today — with more on the way.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Brain,
                title: "Create AI Agents",
                desc: "Build a custom AI tutor for any subject in seconds. Give it a name, personality, and area of expertise.",
                accent: "text-emerald-600 bg-emerald-50",
                border: "border-t-emerald-400",
                tag: null,
              },
              {
                icon: Video,
                title: "Live Video Calls",
                desc: "Start a 1-on-1 video session with your AI agent instantly. No scheduling, no waiting.",
                accent: "text-blue-600 bg-blue-50",
                border: "border-t-blue-400",
                tag: null,
              },
              {
                icon: Sparkles,
                title: "Real-time Chat",
                desc: "Ask doubts, share equations, and get instant responses — all while on the video call.",
                accent: "text-violet-600 bg-violet-50",
                border: "border-t-violet-400",
                tag: null,
              },
              {
                icon: FileText,
                title: "Transcripts",
                desc: "Automatic transcripts of every session so you never miss a word.",
                accent: "text-amber-600 bg-amber-50",
                border: "border-t-amber-400",
                tag: null,
              },
              {
                icon: BookOpen,
                title: "Session Summaries",
                desc: "AI-generated notes and key takeaways delivered right after your class.",
                accent: "text-pink-600 bg-pink-50",
                border: "border-t-pink-400",
                tag: null,
              },
              {
                icon: TrendingUp,
                title: "Progress Tracking",
                desc: "See how you improve across subjects, sessions, and time.",
                accent: "text-teal-600 bg-teal-50",
                border: "border-t-teal-400",
                tag: "Coming Soon",
              },
            ].map((f) => (
              <div
                key={f.title}
                className={`group relative rounded-2xl border border-slate-100 border-t-4 ${f.border} bg-white p-5 shadow-sm hover:shadow-md transition-all ${f.tag ? "opacity-70" : ""}`}
              >
                {f.tag && (
                  <span className="absolute top-3 right-3 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
                    {f.tag}
                  </span>
                )}
                <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${f.accent}`}>
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1.5 text-sm font-bold text-slate-900">{f.title}</h3>
                <p className="text-xs leading-relaxed text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section id="how" className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-500 to-blue-700" />
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative container mx-auto max-w-5xl px-6 text-white">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-emerald-200">How it works</p>
            <h2 className="text-3xl font-bold">Up and running in 3 steps</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                n: "01",
                icon: Brain,
                title: "Create your AI agent",
                desc: "Give your agent a name, subject, and personality. Takes less than a minute to set up.",
                ring: "bg-white/20"
              },
              {
                n: "02",
                icon: Video,
                title: "Start a video call",
                desc: "Hit start and you&rsquo;re live. Your agent joins the call and is ready to teach instantly.",
                ring: "bg-white/20"
              },
              {
                n: "03",
                icon: Sparkles,
                title: "Ask, chat & learn",
                desc: "Ask any question during the call. Chat in real time and get clear, instant explanations.",
                ring: "bg-white/20"
              },
            ].map((s, i) => (
              <div key={s.n} className="relative rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm hover:bg-white/15 transition-all">
                {i < 2 && (
                  <div className="absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 translate-x-full bg-white/20 md:block" />
                )}
                <div className="mb-4 flex items-start justify-between">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${s.ring} text-white`}>
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="text-3xl font-black text-white/15 select-none">{s.n}</span>
                </div>
                <h3 className="mb-2 text-sm font-bold text-white">{s.title}</h3>
                <p className="text-xs leading-relaxed text-white/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-violet-600">Student stories</p>
            <h2 className="text-3xl font-bold text-slate-900">What students say</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                quote: "My calculus grade went from C to A in one month. The AI tutor breaks down every step until I actually get it.",
                name: "Aditya Kumar",
                role: "University of ABCD",
                rating: 5,
                avatar: "from-emerald-400 to-teal-500",
                border: "border-t-emerald-400",
              },
              {
                quote: "Having a recording and AI summary after every lesson is a game-changer. My revision time has dropped by half.",
                name: "Aakash",
                role: "University of Bristol",
                rating: 5,
                avatar: "from-blue-400 to-indigo-500",
                border: "border-t-blue-400",
              },
              {
                quote: "BrainZo is the only study tool that truly adapts to me. It knows exactly which topics I struggle with.",
                name: "Sanvi ",
                role: "12th Grade · Physics",
                rating: 5,
                avatar: "from-violet-400 to-pink-500",
                border: "border-t-violet-400",
              },
            ].map((t) => (
              <div key={t.name} className={`rounded-2xl border border-slate-100 border-t-4 ${t.border} bg-white p-5 shadow-sm hover:shadow-md transition-all`}>
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-slate-700 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-2.5">
                  <div className={`h-8 w-8 rounded-full bg-linear-to-br ${t.avatar} shrink-0`} />
                  <div>
                    <p className="text-xs font-semibold text-slate-900">{t.name}</p>
                    <p className="text-[11px] text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto max-w-3xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-emerald-500 via-teal-500 to-blue-600 px-8 py-14 text-center text-white shadow-2xl shadow-emerald-900/20">
            {/* decorative circles */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-white/10" />

            <div className="relative">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/70">Get started today</p>
              <h2 className="mb-4 text-3xl font-bold">
                Start learning with BrainZo today
              </h2>
              <p className="mx-auto mb-8 max-w-md text-sm text-white/75 leading-relaxed">
                Create your AI agent, jump into a live video call, and start asking questions —
                all in under two minutes. Free to get started.
              </p>

              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link href="/sign-up">
                  <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 shadow-lg font-semibold">
                    Get 3 free sessions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/upgrade">
                  <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
                    View plans
                  </Button>
                </Link>
              </div>

              <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-white/50">
                <Clock className="h-3 w-3" />
                No credit card required &nbsp;·&nbsp; Study at your own pace
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
