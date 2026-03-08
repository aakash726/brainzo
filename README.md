# BrainZo — AI-Powered Learning Platform

> Talk with intelligent AI agents through live video calls. Get real-time answers, automatic transcripts, and AI-generated summaries.

🌐 **Live:** [brainzo-ai.vercel.app](https://brainzo-ai.vercel.app)

---

## Features

- 📹 Real-time video calls with AI agents
- 💬 Interactive Q&A with instant responses
- 📝 Automatic meeting transcripts
- 🧠 AI-generated session summaries
- 📊 Dashboard to manage agents & meetings
- 🔒 Secure authentication
- 💳 Subscription system via Polar
- ⚡ Background jobs via Inngest

---

## Tech Stack

**Frontend** — Next.js, React, TypeScript, TailwindCSS

**Backend** — tRPC, Drizzle ORM, PostgreSQL

**AI & Automation** — OpenAI, Inngest

**Communication** — Stream Video SDK, Stream Chat SDK

**Payments** — Polar

**Deployment** — Vercel

---

## Getting Started

```bash
git clone https://github.com/aakash726/brainzo.git
cd brainzo
npm install
npm run dev
```

## Environment Variables

```env
STREAM_VIDEO_API_KEY=
STREAM_VIDEO_SECRET_KEY=
OPENAI_API_KEY=
POLAR_ACCESS_TOKEN=
NEXT_PUBLIC_POLAR_ORGANIZATION_ID=
DATABASE_URL=
```

## Inngest

```bash
npx inngest-cli@latest dev
# Dashboard → http://localhost:8288
```

---

## Project Structure

```
src/
├── app/
│   ├── (auth)/          # sign-in, sign-up
│   ├── (dashboard)/     # agents, meetings, upgrade
│   └── call/            # video call room
├── components/          # shared UI components
├── db/                  # schema & db client
├── inngest/             # background functions
├── lib/                 # auth, stream, polar, utils
└── modules/             # agents, auth, call, dashboard
```

---

## Roadmap

- [ ] Multi-agent collaboration
- [ ] Voice AI agents
- [ ] Meeting analytics dashboard
- [ ] AI learning recommendations
- [ ] Mobile app

---

## Author

Built by **Aakash Meena** · [github.com/aakash726](https://github.com/aakash726)

## License

MIT
