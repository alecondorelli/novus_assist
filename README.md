# Novus Assist

An AI-powered customer support agent for financial services, built with Claude by Anthropic.

Novus Assist demonstrates how AI agents can handle complex banking interactions — from transaction disputes to account cancellation retention — while maintaining trust, safety, and compliance.

**Design inspired by [Sierra.ai](https://sierra.ai)** — dark gradient mesh background, frosted glass UI, and rich data cards.

[**Try the live demo →**](#)

---

## Demo Credentials

| Name | PIN |
|------|-----|
| Sarah Chen | 4829 |
| Alessandro Condorelli | 3322 |

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

## Design

The interface features a Sierra.ai-inspired dark theme:

- **Gradient mesh background** — deep navy transitioning to dark teal with subtle purple accents
- **Frosted glass cards** — `backdrop-filter: blur()` with semi-transparent borders
- **Rich data cards** — transactions, account details, and products render as visual cards within the chat
- **Smooth animations** — messages fade in and slide up, typing indicator pulses
- **State tracking banner** — shows verification status and actions taken in real time

---

## Guardrails & Safety

The agent implements enterprise-grade safety measures:

- **Identity verification** — The agent verifies the customer's name (fuzzy matching) and PIN before sharing any account details
- **Information security** — Full account numbers and security credentials are never exposed
- **Confirmation before action** — Destructive actions (blocking a card, closing an account) require explicit confirmation
- **Scope boundaries** — The agent politely redirects off-topic requests back to financial services
- **Human escalation** — The agent proactively offers to connect customers with human specialists for complex issues

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
git clone https://github.com/yourusername/novus-assist.git
cd novus-assist

npm install
cd client && npm install && cd ..

cp .env.example .env
# Add your ANTHROPIC_API_KEY to .env

npm run dev
```

The app will be available at `http://localhost:5173`.

### Quick Test

1. Click **"I don't recognise a charge"** → Verify as "Alessandro Condorelli" with PIN "3322"
2. Click **"I want to cancel my account"** → Watch the agent try to retain you
3. Click **"Is this transaction fraudulent?"** → The agent walks through verification steps
4. Click **"Help me choose a savings product"** → Get a personalised product recommendation

---

## Project Structure

```
novus-assist/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── cards/      # Rich UI cards (Transaction, Account, Product)
│   │   │   ├── Header.jsx
│   │   │   ├── StatusBanner.jsx
│   │   │   ├── ChatMessage.jsx
│   │   │   ├── TypingIndicator.jsx
│   │   │   ├── SuggestionChips.jsx
│   │   │   ├── ChatInput.jsx
│   │   │   └── DemoCredentials.jsx
│   │   ├── App.jsx
│   │   └── index.css       # Gradient mesh + frosted glass styles
│   └── package.json
├── server/
│   ├── index.js            # Express server
│   └── chat.js             # Claude API + system prompt + card parsing
├── api/                    # Vercel serverless functions
│   └── chat.js
├── data/                   # Mock database
│   ├── customers.json
│   ├── transactions.json
│   └── products.json
├── vercel.json
└── package.json
```

---

## Deploy to Vercel

```bash
npm i -g vercel
vercel
vercel env add ANTHROPIC_API_KEY
```

---

## Why I Built This

I built this to demonstrate how AI agents can handle complex financial services customer interactions while maintaining trust, safety, and compliance.

Modern customer support isn't just about answering questions — it's about understanding intent, navigating sensitive data, and taking real actions with appropriate guardrails. This demo showcases:

- **Contextual reasoning** — The agent understands when "I don't recognise this charge" might just be a confusing merchant name vs. actual fraud
- **Persuasive retention** — Instead of processing cancellations immediately, the agent uncovers pain points and offers tailored solutions
- **Safety-first design** — Identity verification, action confirmation, and scope boundaries are built into every interaction
- **Rich UI** — Structured data cards bring financial information to life within the conversation
- **State management** — The conversation tracks verification status and actions taken, visible to the user in real time

Inspired by [Sierra AI's](https://sierra.ai) approach to enterprise customer experience agents.

---

## License

MIT
