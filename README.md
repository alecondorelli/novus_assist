# Novus Assist

An AI-powered customer support agent for financial services, built with Claude by Anthropic.

Novus Assist demonstrates how AI agents can handle complex banking interactions — from transaction disputes to account cancellation retention — while maintaining trust, safety, and compliance.

[**Try the live demo →**](#)

---

## What It Does

Novus Assist is an interactive chat interface for **Novus**, a fictional digital bank. The AI agent handles five key customer support scenarios:

### 1. Transaction Disputes
A customer sees an unrecognised charge on their statement. The agent identifies the transaction, explains cryptic merchant names (e.g. `AMZN MKTP UK*2R8HT1KQ0` → Amazon Marketplace), and offers to initiate a formal dispute or block the card.

### 2. Cancellation Retention
When a customer wants to close their account, the agent doesn't just process it. It asks why, empathises, uncovers the real pain point, and offers personalised retention deals — fee waivers, downgrades, or premium trials. It only processes cancellation if the customer insists.

### 3. Fraud Detection
The agent flags suspicious transactions and walks customers through identity verification before taking protective action like blocking a card or reporting fraud.

### 4. Product Recommendations
Based on a customer's financial goals and spending habits, the agent recommends the most suitable product (savings accounts, credit cards, investment accounts) with a personalised explanation.

### 5. General Account Queries
Balance checks, fee explanations, payment due dates, transaction history, and account management.

---

## Guardrails & Safety

The agent implements enterprise-grade safety measures:

- **Identity verification** — The agent verifies the customer's name and PIN before sharing any account details
- **Information security** — Full account numbers and security credentials are never exposed
- **Confirmation before action** — Destructive actions (blocking a card, closing an account) require explicit confirmation
- **Scope boundaries** — The agent politely redirects off-topic requests back to financial services
- **Human escalation** — The agent proactively offers to connect customers with human specialists for complex issues
- **State tracking** — A visual status banner shows verification state and actions taken in real time

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + Vite + Tailwind CSS 4 |
| Backend | Node.js + Express |
| AI | Anthropic Claude API (Claude Sonnet 4) |
| Data | Mock customer database (JSON) |
| Deployment | Vercel (serverless) |

---

## Run Locally

### Prerequisites
- Node.js 20+
- An [Anthropic API key](https://console.anthropic.com/)

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/novus-assist.git
cd novus-assist

# Install dependencies
npm install
cd client && npm install && cd ..

# Configure environment
cp .env.example .env
# Edit .env and add your ANTHROPIC_API_KEY

# Start development servers
npm run dev
```

The app will be available at `http://localhost:5173`.

### Quick Test

Once running, try these conversations:
1. Click **"I don't recognise a charge"** → Provide your name as "Sarah Chen" and PIN as "4829" when asked
2. Click **"I want to cancel my account"** → Watch the agent try to retain you
3. Click **"Is this transaction fraudulent?"** → The agent will walk through verification steps

---

## Project Structure

```
novus-assist/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── App.jsx         # Main app with chat logic
│   │   └── index.css       # Tailwind + custom styles
│   └── package.json
├── server/                 # Express backend
│   ├── index.js            # Server entry point
│   └── chat.js             # Claude API integration + system prompt
├── api/                    # Vercel serverless functions
│   └── chat.js
├── data/                   # Mock database
│   ├── customers.json
│   ├── transactions.json
│   └── products.json
├── vercel.json             # Vercel deployment config
└── package.json
```

---

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variable
vercel env add ANTHROPIC_API_KEY
```

---

## Why I Built This

I built this to demonstrate how AI agents can handle complex financial services customer interactions while maintaining trust, safety, and compliance.

Modern customer support isn't just about answering questions — it's about understanding intent, navigating sensitive data, and taking real actions with appropriate guardrails. This demo showcases:

- **Contextual reasoning** — The agent understands when "I don't recognise this charge" might just be a confusing merchant name vs. actual fraud
- **Persuasive retention** — Instead of processing cancellations immediately, the agent uncovers pain points and offers tailored solutions
- **Safety-first design** — Identity verification, action confirmation, and scope boundaries are built into every interaction
- **State management** — The conversation tracks verification status and actions taken, visible to the user in real time

Inspired by [Sierra AI's](https://sierra.ai) approach to enterprise customer experience agents.

---

## License

MIT
