🕹️ Contributing to StarkMole Backend
Welcome to the StarkMole Backend – the decentralized backend service powering StarkMole, a blockchain-powered whack-a-mole game built on StarkNet.

Whether you're improving game logic, refining the leaderboard, or optimizing the player experience — your contributions bring StarkMole to life. Let's make Web3 gaming more fun, fair, and transparent together!

⚙️ Setup Instructions
1. Fork the Project
Click the Fork button in the top right corner of the GitHub repo.

2. Clone the Repository
git clone https://github.com/StarkMole/StarkMole-Backend.git

cd StarkMole-Backend

4. Create a Feature Branch
git checkout -b feature/your-feature-name

5. Install Dependencies
npm install

6. Configure Environment Variables
Create a .env file in the root directory using .env.example as a reference.

7. Start the Development Server
npm run start:dev
App runs locally at: http://localhost:3000

🛰️ Running Services
🛢️ PostgreSQL Database (for storing user stats, game sessions, etc.)

📄 Swagger UI (for API documentation) — http://localhost:3000/api

🌐 StarkNet Node connection for smart contract interaction

🎮 Game Modules You Can Contribute To
🧠 Game Logic Engine: Manage rounds, timers, scoring

🏆 Leaderboard Module: On-chain/off-chain high scores

👤 User Profiles: Wallet-linked player data

🎁 Rewards Engine: Claiming & verifying daily challenge rewards

🔗 StarkNet Integration: Cairo-based contract interactions

💅 Code Style Guidelines
Use idiomatic TypeScript

Stick to NestJS's modular architecture

Enforce formatting with Prettier and lint with ESLint

Maintain consistent naming and directory structure

🌳 Git Workflow
Branching Strategy
main: Production-ready code

develop: Active development & testing

feature/*: New features

bugfix/*: Bug fixes

Conventional Commit Messages
feat: New features (e.g. feat: add mole spawn logic)

fix: Bug fixes (e.g. fix: leaderboard not updating)

chore: Refactors & maintenance (e.g. chore: update deps)

Pull Requests
Make sure the app builds without errors

Include relevant unit/integration tests

Keep PRs focused and scoped

Link related issues in the description


🧠 Game Security
Secure sensitive data via environment variables

Use JWT-based auth for player sessions

Validate all input with class-validator

🤝 Join the StarkMole Community
StarkMole is more than just a game — it’s an experiment in decentralized fun. Contribute to smart contract-backed gaming where fairness, transparency, and rewards are all verifiable.

