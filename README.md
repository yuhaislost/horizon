 ## ![reset_Artwork](https://github.com/user-attachments/assets/ec932d14-ae6f-4c99-b2d2-384d906de9e6)   Galileo - Gamify your Learning Trail

**Galileo is an AI-powered educational app that generates multiple-choice questions sets tailored to a specific piece of given content.** By tracking progress with streaks, rewarding learning through interactive challenges and a virtual pet system, it transforms studying into an engaging, gamified experience.  

![homepage](https://github.com/user-attachments/assets/b39bd525-3b53-4eb0-891e-74d5c9b02ca4)

## Getting Started
**🎮 Gamification Elements**  
- ❓ Question Interaction System:  
  - Daily quests with streak-based rewards.  
  - Correct Answers ✅: Gain coins and watch cool animations.  
  - Incorrect Answers ❌: Lose hearts, but incorrect questions are saved in the "question graveyard" for later review.  
  
- ❤️ Heart System:  
  - Lose a heart per incorrect answer.  
  - Regain hearts by resolving old questions or waiting (1 heart every 3 hours).  
  
- 🔥 Streak System :  
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

## Credits  
This software uses the following open source packages:
- Frontend  
  - Next.js (React framework for performance and scalability)  
  - Tailwind CSS (Modern styling)  
  - Shadcn-UI (UI components)  
  - Framer Motion (Smooth animations)
  
- Backend  
  - Next.js API routes  
  - Drizzle ORM with PostgreSQL (Neon) (Efficient data handling)
  
- AI & Speech Integration  
  - Langflow (DataStax) + OpenAI API (Question generation)  
  
- Authentication  
  - Clerk.js (User authentication and account management)
  
- Database Schema  
  - User     : id, username, email, password  
  - Question : Stores AI-generated questions and user progress.  
  - Coins    : Tracks earned coins.  
  - Hearts   : Manages life system.  
  - Pet      : Stores pet stats (hunger, hygiene, happiness).
