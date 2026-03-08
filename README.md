# BrainZo

BrainZo is an AI-powered learning platform where users can talk with intelligent AI agents through video calls, ask questions, and receive automatic transcripts and summaries from their conversations.

🌐 **Live App:**  
https://brainzo-ai.vercel.app/

---

# Features

- Talk with AI agents through real-time video calls
- Ask questions and clear doubts interactively
- Automatic meeting transcripts
- AI-generated meeting summaries
- Dashboard to manage agents and meetings
- Real-time video communication
- Secure authentication system
- Subscription and upgrade system
- Background jobs using Inngest

---

# Tech Stack

## Frontend
- Next.js (App Router)
- React
- TypeScript
- TailwindCSS

## Backend
- tRPC
- Drizzle ORM
- PostgreSQL

## AI & Automation
- AI Agents
- Inngest background workflows
- Transcript generation
- AI meeting summaries

## Communication
- Stream Video SDK
- Stream Chat SDK

## Payments
- Polar

## Deployment
- Vercel

---

# Project Structure

```
public

src
│
├── app
│   ├── (auth)
│   │   ├── sign-in
│   │   ├── sign-up
│   │   └── layout.tsx
│   │
│   ├── (dashboard)
│   │   ├── agents
│   │   │   └── [agentId]
│   │   ├── meetings
│   │   ├── upgrade
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── call
│   │   └── [meetingId]
│   │
│   ├── api
│   │
│   ├── layout.tsx
│   ├── globals.css
│   └── favicon.ico
│
├── components
│   ├── ui
│   ├── command-select.tsx
│   ├── data-pagination.tsx
│   ├── data-table.tsx
│   ├── empty-state.tsx
│   ├── error-state.tsx
│   ├── generated-avatar.tsx
│   ├── loading-state.tsx
│   └── responsive-dialog.tsx
│
├── db
│   ├── index.ts
│   └── schema.ts
│
├── hooks
│   ├── use-confirm.tsx
│   └── use-mobile.ts
│
├── inngest
│   ├── client.ts
│   └── functions.ts
│
├── lib
│   ├── auth-client.ts
│   ├── auth.ts
│   ├── avatar.tsx
│   ├── polar.ts
│   ├── stream-chat.ts
│   ├── stream-video.ts
│   └── utils.ts
│
├── modules
│   ├── agents
│   │   ├── hooks
│   │   ├── server
│   │   └── ui
│   │
│   ├── auth
│   │   └── ui/views
│   │
│   ├── call
│   │   └── ui
│   │
│   └── dashboard
│       └── ui/components
```

---

# Installation

Clone the repository

```bash
git clone https://github.com/aakash726 /brainzo.git
```

Move into the project directory

```bash
cd brainzo
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

---

# Environment Variables

Create a `.env` file and add:

```
STREAM_VIDEO_API_KEY=
STREAM_VIDEO_SECRET_KEY=

OPENAI_API_KEY=

POLAR_ACCESS_TOKEN=
NEXT_PUBLIC_POLAR_ORGANIZATION_ID=

DATABASE_URL=
```

---

# Running Inngest

Start the Inngest development server

```bash
npx inngest-cli@latest dev
```

The Inngest dashboard will run at

```
http://localhost:8288
```

---

# Deployment

The application is deployed on **Vercel**

Production URL

```
https://brainzo-ai.vercel.app/
```

---

# Future Improvements

- Multi-agent collaboration
- Voice AI agents
- Meeting analytics dashboard
- AI learning recommendations
- Mobile app

---

# Author

Built by **Aakash Meena**

---

# License

MIT License
