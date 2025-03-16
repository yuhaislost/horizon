 ## ![reset_Artwork](https://github.com/user-attachments/assets/ec932d14-ae6f-4c99-b2d2-384d906de9e6)   Galileo - Gamify your Learning Trail

An AI-powered educational app that transforms studying into an engaging, gamified experience by generating custom problem sets, tracking progress with streaks, and rewarding learning through interactive challenges and a virtual pet system.

![homepage](https://github.com/user-attachments/assets/b39bd525-3b53-4eb0-891e-74d5c9b02ca4)

## Getting Started
**🎮 Gamification Elements**
- Question Interaction System:  
  - Daily quests with streak-based rewards.  
  - Correct Answers ✅: Gain coins and watch cool animations.  
  - Incorrect Answers ❌: Lose hearts, but incorrect questions are saved in the "question graveyard" for later review.  
- ❤️Heart System :  
  - Lose a heart per incorrect answer.  
  - Regain hearts by resolving old questions or waiting (1 heart every 3 hours).  
- 🔥Streak System :  
  - Maintain streaks by completing daily quests.  
  - Earn coin multipliers for consecutive streaks.  
- 🏆Leaderboard :  
  - Compete with friends and learners worldwide.
- 🐾 Pet System :  
  - Earn coins to care for your in-game pet.  
  - Three status bars: Hunger, Hygiene, and Happiness.  
  - Buy food, sanitary services, and entertainment to keep your pet happy.  
- 📚 AI-Powered Learning  
  - Generate Custom Questions: AI-generated multiple-choice, short-answer, and fill-in-the-blank questions from raw text.  
  - Text-to-Speech: Have questions spoken to you for an immersive learning experience.<br/>

**🛠️ Tech Stack**
- 🌐 Frontend
1. Next.js (React framework for performance and scalability)  
2. Tailwind CSS (Modern styling)  
3. Shadcn-UI (UI components)  
4. Framer Motion (Smooth animations)  
- ⚙️ Backend
1. Next.js API routes  
2. Drizzle ORM with PostgreSQL (Neon) (Efficient data handling)  
- 🤖 AI & Speech Integration
1. Langflow (DataStax) + OpenAI API (Question generation)  
2. Eleven Labs API (Text-to-Speech)  
- 🔐 Authentication
1. Clerk.js (User authentication and account management)<br/>

📂 Database Schema
1. User: id, username, email, password
2. Question: Stores AI-generated questions and user progress.
3. Coins: Tracks earned coins.
4. Hearts: Manages life system.
5. Pet: Stores pet stats (hunger, hygiene, happiness).
