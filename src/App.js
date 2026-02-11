import React, { useState } from 'react';
import { Clock, BookOpen, Brain, Sparkles } from 'lucide-react';

const GrindTimeApp = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentContent, setCurrentContent] = useState(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const books = [
    "How to Talk to Anyone",
    "Atomic Habits",
    "Rich Dad Poor Dad",
    "The 5 AM Club",
    "The 48 Laws of Power",
    "The 7 Habits of Highly Effective People",
    "Make Your Bed",
    "The Subtle Art of Not Caring",
    "Think and Grow Rich",
    "The Power of Habit",
    "12 Rules for Life",
    "The 80/20 Principle",
    "The 4-Hour Body",
    "Never Get a Real Job"
  ];

  const interests = [
    "History and Geography",
    "Ancient History",
    "Organic Chemistry",
    "Aeronautics & Space",
    "Ethics and Values",
    "Communication Skills",
    "Financial Tips",
    "Productivity Methods",
    "Mental & Physical Health",
    "Current Affairs & Politics",
    "Science & Universe"
  ];

  const content = {
    5: {
      books: [
        {
          title: "Atomic Habits",
          content: "The 1% Rule: Improving by just 1% each day leads to being 37 times better after one year. It's not about massive changes—it's about small, consistent improvements. If you get 1% better each day for a year, you'll end up 37 times better by the time you're done. Conversely, if you get 1% worse each day, you'll decline nearly down to zero. Small habits compound over time."
        },
        {
          title: "The 80/20 Principle",
          content: "The Pareto Principle states that 80% of results come from 20% of efforts. Identify the vital few activities that generate most of your results and focus relentlessly on them. In your work, relationships, and learning—ask yourself: 'What's the 20% that matters most?' Then eliminate or delegate the rest."
        },
        {
          title: "Make Your Bed",
          content: "Start your day with a completed task. Making your bed every morning gives you a small sense of pride and encourages you to do another task, and another. By the end of the day, that one completed task will have turned into many. If you can't do the little things right, you'll never be able to do the big things right."
        },
        {
          title: "The 48 Laws of Power",
          content: "Law 1: Never Outshine the Master. Always make those above you feel superior. In your desire to please or impress, don't go too far in displaying your talents or you might inspire fear and insecurity. Make your masters appear more brilliant than they are and you will attain the heights of power."
        },
        {
          title: "The Subtle Art of Not Caring",
          content: "You only have a limited amount of care to give. Stop caring about everything and everyone. Choose what matters—the values that truly align with who you want to be. The key to a good life isn't giving no cares, it's giving your cares to the right things: personal growth, relationships, and honest self-assessment."
        }
      ],
      interests: [
        {
          title: "Ancient History",
          content: "The Library of Alexandria was the largest library in the ancient world, containing between 400,000 to 1,000,000 scrolls. It wasn't destroyed in one dramatic fire—it declined gradually over centuries due to budget cuts, wars, and changing priorities. A powerful reminder that knowledge institutions need constant protection and investment."
        },
        {
          title: "Space Exploration",
          content: "The Voyager 1 spacecraft, launched in 1977, is now over 15 billion miles from Earth—the farthest human-made object. It carries the 'Golden Record,' a message to potential alien life containing sounds and images from Earth. It's traveling at 38,000 mph and will reach another star system in about 40,000 years."
        },
        {
          title: "Financial Tips",
          content: "Pay Yourself First: Before paying bills or spending on anything, set aside at least 10% of your income for savings/investments. Automate this transfer right when you get paid. This single habit builds wealth over time because you're prioritizing your future self over current expenses. Most people save what's left—which is usually nothing."
        },
        {
          title: "Basic Chemistry",
          content: "Water is called the 'universal solvent' because it dissolves more substances than any other liquid. This happens because water molecules are polar—they have a slight positive charge on one end and negative on the other. This polarity allows water to break apart ionic compounds and dissolve them. It's why life exists as we know it."
        },
        {
          title: "Mental Health",
          content: "The 5-4-3-2-1 Grounding Technique for anxiety: Name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste. This sensory exercise pulls you out of anxious thoughts and back into the present moment. Use it whenever you feel overwhelmed."
        }
      ]
    },
    10: {
      books: [
        {
          title: "Atomic Habits",
          content: "The Four Laws of Behavior Change form the backbone of habit formation:\n\n1. Make it Obvious: Design your environment so good habits are visible. Want to drink more water? Place bottles everywhere. Want to read more? Put books on your pillow.\n\n2. Make it Attractive: Pair habits you need to do with habits you want to do. Listen to your favorite podcast only while exercising.\n\n3. Make it Easy: Reduce friction for good habits. Want to go to the gym? Sleep in your workout clothes. The Two-Minute Rule: when starting a new habit, it should take less than two minutes. 'Read 30 pages' becomes 'read one page.'\n\n4. Make it Satisfying: Give yourself immediate rewards. Track your habits visually—the act of checking off a box provides instant gratification.\n\nThe inverse works for breaking bad habits: make it invisible, unattractive, difficult, and unsatisfying. Your habits shape your identity. Every action is a vote for the type of person you want to become."
        },
        {
          title: "Rich Dad Poor Dad",
          content: "The Rich Don't Work for Money—Money Works for Them:\n\nRobert Kiyosaki's 'Rich Dad' taught him that the poor and middle class work for money, but the rich have money work for them. The key difference is financial literacy—understanding assets vs. liabilities.\n\nAssets put money IN your pocket: rental properties, stocks, businesses, royalties. Liabilities take money OUT: car payments, mortgages on homes you live in, consumer debt.\n\nThe middle class thinks their home is their biggest asset—it's actually a liability that costs them monthly. The rich acquire assets that generate passive income.\n\nThe Rat Race: Most people work a job, earn money, pay taxes, buy liabilities thinking they're assets, run out of money, and need to work harder—forever stuck. The way out? Build or acquire income-generating assets. Start a business, invest in real estate, create systems that work without you.\n\nFocus on financial education, not job security. The education system teaches us to be employees, not entrepreneurs or investors."
        },
        {
          title: "The 5 AM Club",
          content: "The 20/20/20 Formula—The First Hour Owns the Day:\n\nRobin Sharma advocates waking at 5 AM and splitting the first hour into three 20-minute pockets:\n\n**Minutes 1-20: Move** — Intense exercise. This increases BDNF (brain-derived neurotrophic factor), which repairs brain cells and accelerates new neural connections. Sweating releases cortisol (stress) and floods you with dopamine and serotonin. You literally become smarter and happier.\n\n**Minutes 21-40: Reflect** — Meditation, journaling, planning your day. This is your time for gratitude, visualization, and reviewing your goals. Elite performers are deeply introspective. Silence is the birthplace of genius.\n\n**Minutes 41-60: Grow** — Learn something. Read a book, take an online course, study your craft. Dedicate this time to skill development. Warren Buffett reads 500 pages a day. Continuous learning is the currency of success.\n\nThe Habit Installation Protocol: It takes 66 days to install a new habit. The first 22 days are painful (destruction of old patterns), days 23-44 are uncomfortable (installation), and days 45-66 integrate the habit into your lifestyle. Most people quit in the first phase. Winners persist through all three."
        },
        {
          title: "The 7 Habits of Highly Effective People",
          content: "Stephen Covey's Seven Habits—A Framework for Personal Effectiveness:\n\n**Private Victory (Habits 1-3):**\n1. Be Proactive: Take responsibility. Between stimulus and response lies your freedom to choose. Focus on your Circle of Influence (what you can control), not Circle of Concern (what you can't).\n\n2. Begin With the End in Mind: Define your values and goals. Live according to your principles, not others' expectations. Write a personal mission statement.\n\n3. Put First Things First: Prioritize what's important over what's urgent. The Eisenhower Matrix: Important & Urgent (crises), Important & Not Urgent (planning, prevention, growth—spend most time here), Not Important & Urgent (interruptions), Not Important & Not Urgent (time wasters).\n\n**Public Victory (Habits 4-6):**\n4. Think Win-Win: Seek mutual benefit. Life is not zero-sum.\n\n5. Seek First to Understand, Then to Be Understood: Listen empathetically before speaking.\n\n6. Synergize: Collaboration produces better results than individual effort.\n\n**Habit 7: Sharpen the Saw:** Continuously renew yourself physically, mentally, emotionally, and spiritually. You're your most valuable asset."
        },
        {
          title: "Think and Grow Rich",
          content: "Napoleon Hill's 13 Principles of Success—Thoughts Become Things:\n\nHill spent 20 years studying 500 millionaires. His core insight: **Thoughts are things.** Your mental attitude determines your outcomes.\n\n**Key Principles:**\n\n1. **Desire:** You must have a burning, obsessive desire. Mere wishes won't work. Define exactly what you want, when you want it, and what you'll give in return.\n\n2. **Faith:** Develop absolute belief that you'll achieve your goal. Your subconscious mind responds to thoughts mixed with emotion and faith. Visualize success repeatedly until you believe it.\n\n3. **Autosuggestion:** Reprogram your mind through repeated affirmations. Say your goals aloud daily with emotion and conviction.\n\n4. **Specialized Knowledge:** General knowledge is useless. Master one specific field. The wealthy invest in education and expertise.\n\n5. **Mastermind Principle:** Surround yourself with advisors and peers who elevate you. Two minds working in harmony create a third, invisible 'mastermind' force.\n\n6. **Persistence:** Most people quit at the first sign of defeat. Winners persist until they succeed. Develop the habit of continuing when others stop.\n\nSuccess is a mental game. Control your thoughts, and you control your destiny."
        }
      ],
      interests: [
        {
          title: "Ancient History - Roman Empire",
          content: "The Fall of Rome—A Lesson in Decline:\n\nThe Roman Empire didn't collapse overnight—it eroded over centuries due to multiple factors:\n\n**Internal Decay:** Political corruption, economic troubles (inflation from debasing currency), and over-reliance on slave labor weakened Rome from within. The military, once citizen-soldiers, became mercenaries with no loyalty to Rome.\n\n**Division:** In 285 CE, Emperor Diocletian split the empire into East and West for easier management. This created competing power centers. The Western Empire fell in 476 CE when Germanic chieftain Odoacer deposed the last emperor. The Eastern (Byzantine) Empire survived another 1,000 years until 1453.\n\n**Barbarian Invasions:** Germanic tribes (Visigoths, Vandals, Ostrogoths) invaded, not because they were more advanced, but because Rome was too weak to repel them.\n\n**Lessons:** Great civilizations fall when they lose their core values, become economically unsustainable, and fail to adapt. The parallels to modern societies are striking—currency debasement (money printing), political division, outsourcing critical functions, and cultural complacency.\n\nRome's legacy: law systems, architecture, engineering, language (Romance languages), Christianity's spread, and governmental structures that influence us today."
        },
        {
          title: "Organic Chemistry Basics",
          content: "Carbon: The Element of Life\n\nOrganic chemistry is the study of carbon-containing compounds. But why is carbon special?\n\n**Carbon's Four Bonds:** Carbon has 4 valence electrons, allowing it to form 4 covalent bonds. This makes it uniquely versatile—it can bond with itself repeatedly to form chains, rings, and complex 3D structures.\n\n**Functional Groups:** These are specific groups of atoms that determine a molecule's properties:\n- **Alcohols (-OH):** Found in ethanol, sugars. Polar and reactive.\n- **Carboxylic Acids (-COOH):** Found in vinegar, amino acids. Acidic.\n- **Amines (-NH2):** Found in proteins, DNA. Basic.\n- **Carbonyls (C=O):** Found in sugars, fats. Highly reactive.\n\n**Isomers:** Molecules with the same formula but different structures. Example: C₆H₁₂O₆ can be glucose or fructose—same atoms, different arrangement, different properties.\n\n**Why It Matters:** Your body is an organic chemistry lab. DNA, proteins, fats, carbohydrates—all are organic molecules. Understanding this helps you grasp nutrition, medicine, and biology at a fundamental level.\n\nCarbon is the backbone of life because of its bonding flexibility."
        },
        {
          title: "Aeronautics - How Planes Fly",
          content: "The Four Forces of Flight—Conquering Gravity:\n\nEvery airplane in the sky balances four forces:\n\n**1. Lift (Upward):** Generated by the wings. Air moves faster over the curved top of the wing than the flat bottom, creating lower pressure above (Bernoulli's Principle). This pressure difference creates lift. The wing's angle of attack (tilt) also deflects air downward, pushing the plane up (Newton's Third Law).\n\n**2. Weight (Downward):** Gravity pulling the plane down. To fly, lift must exceed weight.\n\n**3. Thrust (Forward):** Engines (jet or propeller) push the plane forward. Jet engines work by sucking in air, compressing it, mixing it with fuel, igniting it, and expelling it backward at high speed—Newton's Third Law again.\n\n**4. Drag (Backward):** Air resistance opposing motion. Planes are streamlined to minimize drag.\n\n**Takeoff:** Engines provide thrust, speeding the plane down the runway. As speed increases, airflow over the wings increases, generating lift. Once lift exceeds weight, the plane rises.\n\n**Turning:** Planes bank (tilt) to turn. Tilting redirects lift to include a horizontal component, curving the flight path.\n\nAviation is applied physics—proof that understanding principles allows us to defy natural limitations."
        },
        {
          title: "Financial Literacy - Compound Interest",
          content: "Compound Interest: The 8th Wonder of the World\n\nAlbert Einstein allegedly called compound interest 'the most powerful force in the universe.' Here's why:\n\n**The Rule of 72:** Divide 72 by your annual return rate to estimate how long it takes to double your money. At 8% return, 72 ÷ 8 = 9 years. At 12%, 72 ÷ 12 = 6 years.\n\n**The Power of Time:** If you invest $10,000 at age 25 and earn 10% annually, by age 65 you'll have $452,592—without adding another dollar. Wait until 35 to start? You'll have only $174,494. Those 10 years cost you $278,098.\n\n**The Penny Doubled:** Would you rather have $1 million today or a penny that doubles daily for 30 days? The penny becomes $5,368,709 by day 30. Days 1-20 it's only $5,242, but days 21-30 it explodes—that's compound growth.\n\n**Debt Works the Same Way:** Credit card debt at 20% APR doubles in under 4 years if you don't pay it off. Compound interest working against you is financial suicide.\n\n**Actionable:** Start investing early, even small amounts. Consistency beats timing. Invest in index funds, real estate, or businesses. Time in the market > timing the market."
        },
        {
          title: "Current Affairs - AI Revolution",
          content: "The AI Transformation—We're Living Through It:\n\nArtificial Intelligence is advancing at an exponential rate, reshaping industries and society:\n\n**Large Language Models (LLMs):** AI systems like ChatGPT, Claude, and Gemini can understand and generate human-like text. They're being integrated into search engines (Bing, Google), productivity tools (Microsoft Copilot), and creative software.\n\n**Job Displacement Concerns:** AI is automating tasks previously done by writers, programmers, designers, customer service reps, and analysts. McKinsey estimates 12 million occupational transitions by 2030 in the US alone.\n\n**Opportunities:** AI is a tool, not a replacement. Those who learn to use AI effectively will outcompete those who don't. It's like the internet in the 1990s—adopt early or get left behind.\n\n**AI Regulation:** Governments worldwide are debating how to regulate AI—balancing innovation with safety, privacy, and ethical concerns. The EU AI Act is the first comprehensive framework.\n\n**What You Should Do:** Learn AI literacy. Understand prompt engineering, use AI tools to increase your productivity, and focus on skills AI can't replace—creativity, emotional intelligence, strategic thinking, and human connection.\n\nWe're at an inflection point. Adapt or become obsolete."
        }
      ]
    },
    15: {
      books: [
        {
          title: "The Power of Habit",
          content: "The Habit Loop—How Habits Control Your Life:\n\nCharles Duhigg reveals that habits are neurological loops consisting of three parts:\n\n**1. The Cue:** A trigger that tells your brain to go into automatic mode. Examples: stress (cue) → smoke cigarette (routine) → relaxation (reward). Morning alarm (cue) → check phone (routine) → dopamine hit from notifications (reward).\n\n**2. The Routine:** The behavior itself—the habit you perform. This can be physical, mental, or emotional.\n\n**3. The Reward:** The benefit your brain receives, which helps it remember the habit loop for the future. Rewards satisfy cravings—food, information, social connection, validation.\n\n**The Golden Rule of Habit Change:** You can't eliminate a bad habit—you must replace it. Keep the same cue and reward, but change the routine. Stressed (cue)? Instead of smoking, go for a walk or do breathing exercises (new routine) → still get relaxation (reward).\n\n**Keystone Habits:** Some habits trigger chain reactions that restructure other parts of your life. Example: Exercise. People who start exercising also begin eating better, becoming more productive, smoking less, and being more patient. One change catalyzes many.\n\n**Willpower as a Muscle:** Willpower is finite and depletes throughout the day. This is why people make poor decisions when tired. Solution: Build routines that don't require willpower—automate good behaviors through habit.\n\n**Case Study—Starbucks:** Howard Schultz transformed Starbucks by training employees in willpower habits. When customers are rude (cue), employees follow the LATTE method: Listen, Acknowledge, Take action, Thank, Explain (routine) → positive customer interaction (reward). Habits can be engineered in organizations.\n\n**Craving:** This is what drives the habit loop. Your brain anticipates the reward and craves it. Pavlov's dogs drooled not when they ate but when they heard the bell—they craved the food. Marketers exploit this: fast food commercials create cravings before you're even hungry.\n\n**How to Build New Habits:** Identify a simple cue (time of day, location, preceding event), design a clear routine, and ensure an immediate reward. Repeat consistently for 21-66 days until it becomes automatic.\n\n**Belief:** Belief is critical to lasting change. Alcholics Anonymous works because it provides community and belief that change is possible. Surround yourself with believers."
        },
        {
          title: "12 Rules for Life",
          content: "Jordan Peterson's 12 Rules—Order and Meaning in Chaos:\n\nPeterson blends psychology, philosophy, and biology to offer practical wisdom:\n\n**Rule 1: Stand Up Straight With Your Shoulders Back**\nLobsters fight for social dominance. Winners stand tall; losers cower. Posture affects neurochemistry—standing tall increases serotonin and confidence. Carry yourself like you deserve respect, and others will treat you accordingly.\n\n**Rule 2: Treat Yourself Like Someone You Are Responsible for Helping**\nPeople take better care of their pets than themselves. Why? Low self-worth. Recognize your value—you have a destiny to fulfill and people depending on you. Care for yourself with the same diligence you'd care for a loved one.\n\n**Rule 3: Make Friends With People Who Want the Best for You**\nCut out toxic relationships. You become the average of the five people you spend the most time with. If your friends drag you down, you'll stay down. Surround yourself with people who challenge and support your growth.\n\n**Rule 4: Compare Yourself to Who You Were Yesterday, Not to Who Someone Else is Today**\nThe only valid comparison is with your past self. Others have different genetics, backgrounds, and circumstances. Focus on incremental self-improvement—1% better each day compounds.\n\n**Rule 5: Do Not Let Your Children Do Anything That Makes You Dislike Them**\nDiscipline is love. Children need boundaries and structure to develop into functional adults. Permissive parenting creates tyrants who are rejected by society. Teach responsibility early.\n\n**Rule 6: Set Your House in Perfect Order Before You Criticize the World**\nBefore blaming society for your problems, examine your own life. Clean your room, fix your habits, take responsibility. Once your immediate sphere is in order, you'll have moral authority and clarity to address larger issues.\n\n**Rule 7: Pursue What is Meaningful, Not What is Expedient**\nShort-term pleasure leads to long-term suffering. Delayed gratification and purpose lead to fulfillment. Choose meaning over convenience. Sacrifice is the path to a life worth living.\n\n**Rule 8: Tell the Truth—Or, At Least, Don't Lie**\nLies corrupt your character and distort reality. Truth is the antidote to chaos. Speak honestly, even when it's difficult. Your words shape your world.\n\n**Rule 9: Assume the Person You're Listening to Might Know Something You Don't**\nListen to learn, not to respond. Conversations are opportunities to refine your thinking. Intellectual humility opens doors.\n\n**Rule 10: Be Precise in Your Speech**\nVagueness breeds confusion and resentment. Articulate your thoughts and feelings clearly. Define problems accurately, and solutions emerge.\n\n**Rule 11: Do Not Bother Children When They Are Skateboarding**\nRisk is necessary for growth. Overprotection creates weakness. Let people face challenges and develop competence.\n\n**Rule 12: Pet a Cat When You Encounter One on the Street**\nLife is suffering. Find joy in small, beautiful moments. Appreciate what's good despite the tragedy."
        },
        {
          title: "How to Talk to Anyone",
          content: "Leil Lowndes' Communication Secrets—92 Techniques to Win People Over:\n\n**The Flooding Smile:** Don't smile immediately when you see someone—it looks automatic and insincere. Pause, look at the person, then let a big, warm smile flood across your face. This signals genuine pleasure at seeing them. It takes effort, so it communicates value.\n\n**Sticky Eyes:** Maintain eye contact even after the other person has finished speaking. Let your gaze linger for a beat before looking away. This conveys confidence and interest. Most people break eye contact too quickly, signaling discomfort or disinterest.\n\n**Epoxy Eyes:** When in a group, watch the person who's speaking, not the person you're about to speak to. Great conversationalists give full attention. This makes speakers feel valued and noticed.\n\n**The Big-Baby Pivot:** When meeting someone, turn your entire body to face them—shoulders, hips, toes. Partial body turns signal you're ready to leave. Full pivots communicate: 'You're the most important person here right now.'\n\n**Limit the Fidget:** Eliminate nervous gestures—touching your face, adjusting your hair, tapping. Stillness conveys confidence and authority. Anxious movement broadcasts insecurity.\n\n**Be a Copyclass (Mirroring):** Subtly match the other person's body language, tone, and pace. People feel comfortable with similarity. If they lean back, you lean back. If they speak softly, lower your volume. Don't be obvious—be fluid.\n\n**Use Their Name:** Dale Carnegie said, 'A person's name is the sweetest sound in any language.' Use someone's name in conversation—it creates intimacy and shows respect. Don't overdo it; sprinkle it naturally.\n\n**The Swiveling Spotlight:** When someone joins a conversation, immediately shift your focus to them. Introduce them to everyone, briefly summarize what was discussed, and invite their input. This makes newcomers feel welcome and valued.\n\n**What Do You Do—NOT!** Don't immediately ask what someone does for work. It's cliché and can be awkward if they're unemployed or unhappy with their job. Instead, ask: 'How do you spend most of your time?' or 'What's been exciting for you lately?'\n\n**The Encore:** When parting, revisit something specific from your conversation: 'I really enjoyed hearing about your trip to Iceland—that glacier hike sounds incredible!' This shows you were truly listening and creates a memorable goodbye.\n\n**The Premature 'We':** Use 'we' language early to build rapport. Instead of 'What are you doing this weekend?' say 'What are we doing this weekend?' It subtly suggests connection and camaraderie.\n\n**The Killer Compliment:** Compliment people on traits they've worked hard to develop, not genetic gifts. Don't say 'You're so smart'—say 'Your analysis was brilliant; I love how you connected those ideas.' Praise effort and skill, not innate qualities."
        },
        {
          title: "The 48 Laws of Power",
          content: "Robert Greene's 48 Laws—Mastering Strategy and Human Nature:\n\nGreene studied 3,000 years of power dynamics to distill these laws. They're amoral—tools, not ethics.\n\n**Law 1: Never Outshine the Master**\nMake your superiors feel superior. Victory over the master is the greatest strategic mistake. Dim your brilliance in their presence.\n\n**Law 3: Conceal Your Intentions**\nKeep people off-balance and in the dark. If they don't know your goals, they can't prepare defenses. Deception is a tool of the powerful.\n\n**Law 4: Always Say Less Than Necessary**\nThe more you say, the more common you appear. Powerful people are mysterious. Silence makes people uncomfortable—they fill it with projections and assumptions in your favor.\n\n**Law 6: Court Attention at All Costs**\nVisibility is power. Stand out. Be conspicuous. Everything is judged by appearance. What isn't seen doesn't exist. Don't get lost in the crowd.\n\n**Law 9: Win Through Actions, Never Argument**\nArguments breed resentment. Demonstrate through results. Proof is more persuasive than words.\n\n**Law 10: Infection—Avoid the Unhappy and Unlucky**\nEmotions are contagious. Associate with positive, successful people. Misery spreads—protect yourself from the chronically dissatisfied.\n\n**Law 15: Crush Your Enemy Totally**\nMercy to enemies is a strategic mistake. Leave no room for revenge. A half-dead enemy will recover and strike back. Decisiveness prevents future threats.\n\n**Law 16: Use Absence to Increase Respect and Honor**\nToo much presence diminishes value. Create scarcity. Withdraw periodically—people will miss you and assign you greater importance.\n\n**Law 19: Know Who You're Dealing With**\nNever assume everyone will react the same way. Some people are vipers—offend them at your peril. Study personalities before acting.\n\n**Law 25: Re-Create Yourself**\nDon't accept the role society gives you. Forge your own identity. Be the author of your persona. Adaptability is strength.\n\n**Law 28: Enter Action with Boldness**\nHesitation creates doubt and fear. Audacity intimidates and attracts. Fortune favors the bold—timidity is more dangerous than boldness.\n\n**Law 38: Think as You Like, But Behave Like Others**\nExpressing unconventional ideas openly makes you a target. Blend in to gather power, then use it. Overt nonconformity isolates you.\n\n**Law 48: Assume Formlessness**\nStay fluid. Fixed patterns make you predictable and vulnerable. Adaptability is the ultimate power—become impossible to pin down.\n\n**Critique:** These laws describe how power operates, not how it should operate. Use them wisely—power without ethics is tyranny."
        },
        {
          title: "The 4-Hour Body",
          content: "Tim Ferriss' Hacks for Rapid Physical Transformation:\n\nFerriss applied the 80/20 principle to fitness—finding the minimum effective dose for maximum results.\n\n**The Slow-Carb Diet—Lose 20 Pounds in 30 Days:**\n**Rules:**\n1. **Avoid white carbohydrates:** No bread, rice, cereal, potatoes, pasta, fried food. These spike insulin and promote fat storage.\n2. **Eat the same meals repeatedly:** Simplicity ensures compliance. Breakfast: eggs, black beans, vegetables. Lunch/Dinner: protein (chicken, beef, fish), legumes (lentils, black beans), vegetables (spinach, broccoli).\n3. **Don't drink calories:** Water, unsweetened tea, black coffee only. No juice, soda, or alcohol.\n4. **Don't eat fruit:** Fructose is metabolized like alcohol—stored as fat. Exception: tomatoes and avocados.\n5. **Take one day off per week:** Cheat day. Eat whatever you want. This prevents metabolic slowdown and maintains sanity.\n\n**Why It Works:** Stable blood sugar, high protein (increases satiety and thermogenesis), and legumes (slow-digesting carbs) create a calorie deficit without hunger.\n\n**The Minimum Effective Dose (MED):**\nMost people over-train. Ferriss advocates for the least amount of exercise necessary to trigger adaptation.\n\n**Fat Loss:** 4 exercises, twice a week, 30 minutes total:\n- Goblet squats\n- Shoulder press\n- Kettlebell swings\n- Rowing\n\nFocus on compound movements (multiple muscle groups). High intensity, low volume.\n\n**Muscle Gain:** Lift heavy weights (5 reps max), focus on eccentric (lowering) phase, rest 3-5 minutes between sets. One set to failure can stimulate growth—more isn't better.\n\n**The Ice Bath Protocol:**\nCold exposure increases brown fat (burns calories to generate heat) and improves insulin sensitivity. Take 10-minute ice baths 3x/week or cold showers daily. Start with 30 seconds, build tolerance.\n\n**Polyphasic Sleep (Controversial):**\nFerriss experimented with sleeping 2 hours/day via 20-minute naps every 4 hours. Conclusion: possible but unsustainable long-term for most. Focus on sleep quality over hacking quantity.\n\n**Tracking:** Measure everything—body fat %, weight, photos, blood work. What gets measured gets improved. Weekly check-ins reveal what's working.\n\n**Key Insight:** Conventional fitness wisdom is often wrong. Experiment on yourself, track results, iterate. The human body is surprisingly hackable."
        }
      ],
      interests: [
        {
          title: "Geography - Tectonic Plates",
          content: "Earth's Dynamic Crust—The Planet is Alive:\n\nThe Earth's surface is divided into massive tectonic plates that float on the semi-liquid mantle beneath. These plates are constantly moving—just very slowly (2-10 cm per year, about as fast as your fingernails grow).\n\n**Three Types of Plate Boundaries:**\n\n1. **Divergent Boundaries:** Plates move apart. Magma rises from below to create new crust. Example: Mid-Atlantic Ridge. Iceland sits on this ridge—literally splitting apart, growing wider each year. Underwater, these ridges form the longest mountain ranges on Earth.\n\n2. **Convergent Boundaries:** Plates collide. When oceanic plates hit continental plates, the denser oceanic plate subducts (dives beneath), creating deep ocean trenches and volcanic arcs. Example: Pacific Plate diving under the North American Plate formed the Cascades (Mt. St. Helens). When two continental plates collide, mountains form. The Himalayas are still rising as India crashes into Asia—Mt. Everest grows ~4mm per year.\n\n3. **Transform Boundaries:** Plates slide past each other horizontally. Friction causes earthquakes. Example: San Andreas Fault in California. Los Angeles and San Francisco are on opposite sides—LA is slowly moving toward San Francisco (~5cm/year). In 15 million years, they'll be neighbors.\n\n**The Ring of Fire:** 90% of earthquakes and 75% of volcanoes occur in a horseshoe-shaped zone around the Pacific Plate. This includes Japan, Philippines, Indonesia, west coasts of Americas. Convergent boundaries create subduction zones → volcanic activity.\n\n**Pangaea:** 300 million years ago, all continents were joined into one supercontinent. Plate tectonics broke it apart. Evidence: matching fossils on continents now separated by oceans, matching rock formations, fit of coastlines (Africa and South America).\n\n**Practical Impact:** Understanding plate tectonics helps predict earthquakes and volcanic eruptions, locate mineral deposits, explain biodiversity patterns, and understand climate change (volcanic CO₂ emissions over geological time).\n\nEarth isn't static—it's a dynamic, constantly reshaping planet. We live on a thin, fragile crust floating on a molten interior."
        },
        {
          title: "Space - Black Holes",
          content: "Black Holes—Where Physics Breaks Down:\n\nA black hole is a region of spacetime where gravity is so strong that nothing—not even light—can escape.\n\n**Formation:** When a massive star (20+ times the Sun's mass) exhausts its nuclear fuel, it collapses under its own gravity. The core compresses into an infinitely dense point called a **singularity**, surrounded by an **event horizon**—the point of no return.\n\n**The Event Horizon:** This is the boundary around a black hole. Once you cross it, escape is impossible—you'd need to travel faster than light. Time behaves strangely here: from an outside observer's perspective, objects falling into a black hole appear to slow down and freeze at the event horizon due to extreme time dilation (Einstein's relativity). To the falling object, they pass through normally—but they're **spaghettified** (stretched by tidal forces) before hitting the singularity.\n\n**Types of Black Holes:**\n1. **Stellar Black Holes:** Formed from collapsed stars. 3-20 solar masses.\n2. **Supermassive Black Holes:** Millions to billions of solar masses. Found at the centers of galaxies, including our Milky Way (Sagittarius A*, 4 million solar masses). How they form is still debated.\n3. **Intermediate and Primordial:** Theoretical smaller black holes.\n\n**Hawking Radiation:** Stephen Hawking proved black holes aren't completely black. Quantum effects near the event horizon cause black holes to emit radiation and slowly evaporate over trillions of years. Small black holes evaporate faster than large ones.\n\n**The Information Paradox:** If black holes evaporate, what happens to the information about everything that fell in? Quantum mechanics says information can't be destroyed, but black holes seem to violate this. This paradox remains unsolved—it's one of the biggest mysteries in physics.\n\n**Detection:** We can't see black holes directly, but we detect them by observing:\n- Stars orbiting invisible massive objects\n- X-rays from matter heating up as it spirals into the black hole (accretion disk)\n- Gravitational waves from black hole mergers (LIGO detected this in 2015)\n- The Event Horizon Telescope captured the first image of a black hole's shadow in 2019 (M87).\n\n**Mind-Bending Fact:** If you watched someone fall into a black hole, you'd never see them actually enter—they'd appear frozen at the event horizon forever due to time dilation. But from their perspective, they'd fall in quickly (before being torn apart).\n\nBlack holes challenge our understanding of space, time, and reality itself."
        },
        {
          title: "Ethics - Utilitarianism vs. Deontology",
          content: "The Two Major Ethical Frameworks—How Should We Make Moral Decisions?\n\n**Utilitarianism (Consequentialism):**\nFounded by Jeremy Bentham and John Stuart Mill. Core principle: **The greatest good for the greatest number.** An action is morally right if it maximizes overall happiness (utility) and minimizes suffering.\n\n**The Trolley Problem (Classic Test):**\nA runaway trolley is heading toward five people tied to the tracks. You can pull a lever to divert it onto another track, killing one person instead. Do you pull the lever?\n\n**Utilitarian Answer:** Yes. 5 deaths > 1 death. Maximizing net good (saving four lives) justifies the action.\n\n**Strengths:** Practical, outcome-focused, promotes general welfare. Used in public policy (cost-benefit analysis).\n\n**Weaknesses:** Can justify atrocities if they produce net good. Example: Killing one healthy person to harvest organs to save five dying patients. Would torturing a terrorist to prevent a nuclear attack be justified? Utilitarianism might say yes—many find this morally repugnant.\n\n---\n\n**Deontology (Duty Ethics):**\nFounded by Immanuel Kant. Core principle: **Act according to rules and duties, regardless of outcomes.** Morality is about following universal moral laws (categorical imperatives), not consequences.\n\n**Kant's Categorical Imperative:**\n1. **Universalizability:** Act only according to rules you'd want to be universal laws. Example: Don't lie—if everyone lied, communication would break down.\n2. **Treat People as Ends, Not Means:** Never use people merely as tools. Respect human dignity and autonomy.\n\n**Deontological Answer to Trolley Problem:** Don't pull the lever. Actively killing someone (using them as a means) is wrong, even to save others. You didn't create the situation—you're not responsible for the five deaths if you don't intervene.\n\n**Strengths:** Protects individual rights, provides clear moral rules, respects human dignity.\n\n**Weaknesses:** Can be inflexible and lead to counterintuitive outcomes. Example: Kant said lying is always wrong—even lying to a murderer to protect someone hiding in your home. Most people find this absurd.\n\n---\n\n**Real-World Application:**\n- **Medical ethics:** Utilitarianism → triage (treat those most likely to survive). Deontology → patient autonomy and informed consent.\n- **War:** Utilitarianism → civilian casualties justified if they prevent greater harm. Deontology → never deliberately harm non-combatants.\n\n**Your Framework Shapes Your Decisions:** Understanding these helps you identify your own moral reasoning and engage in ethical debates more rigorously."
        },
        {
          title: "Productivity - Deep Work",
          content: "Deep Work by Cal Newport—The Competitive Advantage of the Century:\n\nIn a distracted world, the ability to focus intensely is becoming rare and therefore extremely valuable.\n\n**Definition:** Deep work is professional activity performed in a state of distraction-free concentration that pushes your cognitive capabilities to their limit. These efforts create new value, improve your skill, and are hard to replicate.\n\n**Opposite:** Shallow work—non-cognitively demanding tasks performed while distracted (emails, meetings, social media). These contribute little value.\n\n**Why Deep Work Matters:**\n1. **Economic:** High-value knowledge work requires deep focus. The ability to master hard things quickly and produce at an elite level is increasingly rewarded.\n2. **Personal:** Deep work is meaningful. Flow states produce satisfaction that shallow distractions never will.\n\n**The Deep Work Hypothesis:** The ability to perform deep work is becoming increasingly rare at exactly the same time it's becoming increasingly valuable. Those who cultivate it will thrive.\n\n**Four Strategies to Integrate Deep Work:**\n\n1. **Monastic:** Eliminate or minimize shallow obligations. Example: Neal Stephenson (author) has no email address—he only writes. Impractical for most.\n\n2. **Bimodal:** Divide time into deep and shallow periods. Example: Deep work for 3 consecutive days, then handle emails and meetings for 2 days. Minimum deep unit: one full day.\n\n3. **Rhythmic:** Establish a daily deep work routine. Example: Every morning 6-10am is deep work. No exceptions. Easiest for most people—builds automaticity.\n\n4. **Journalistic:** Fit deep work into your schedule whenever possible. Example: Walter Isaacson would write in 15-minute gaps between meetings. Requires mental discipline and isn't for beginners.\n\n**Rules for Deep Work:**\n\n1. **Work Deeply:** Create rituals. Where? Same place. When? Same time. How long? Set duration. Support? Coffee, food, music? Rituals reduce willpower needed to start.\n\n2. **Embrace Boredom:** Train your brain to tolerate absence of stimulation. Don't check your phone in line or between tasks. Constant distraction rewires your brain for perpetual distraction—you lose the ability to focus.\n\n3. **Quit Social Media:** These platforms are engineered to be addictive. The 'any benefit' approach (I get some value, so I'll keep using it) is flawed. Ask: Does this support my goals more than it harms them? Most can't pass this test.\n\n4. **Drain the Shallows:** Schedule every minute of your day (time blocking). Limit shallow work to 30-50% of your time. Batch emails, meetings, admin tasks.\n\n**Actionable:** Block 2-4 hour deep work sessions daily. Turn off phone, internet, close door. Work on ONE cognitively demanding task. Track hours of deep work weekly—aim to increase.\n\nDeep work is a superpower in the modern economy. Cultivate it deliberately."
        },
        {
          title: "Mental Health - Cognitive Behavioral Therapy",
          content: "Cognitive Behavioral Therapy (CBT)—Rewiring Destructive Thought Patterns:\n\nCBT is the most evidence-based psychotherapy for anxiety, depression, and many other mental health issues. It's based on the idea that thoughts, feelings, and behaviors are interconnected—changing one changes the others.\n\n**Core Principle:** Your thoughts shape your emotions and behaviors. Distorted thinking leads to emotional suffering. By identifying and challenging irrational thoughts, you can improve mental health.\n\n**The CBT Model:**\n**Situation → Thought → Emotion → Behavior**\n\nExample: You text a friend and they don't respond.\n- **Automatic Thought:** 'They're ignoring me. They don't care about me.'\n- **Emotion:** Sadness, anxiety.\n- **Behavior:** Withdraw, stop reaching out.\n\n**CBT Intervention:** Challenge the thought. Is there evidence they don't care? Could there be alternative explanations? (Busy, didn't see the message, phone died).\n\n**Cognitive Distortions (Common Thinking Errors):**\n\n1. **All-or-Nothing Thinking:** Seeing things in black and white. 'If I'm not perfect, I'm a failure.'\n2. **Overgeneralization:** One negative event means everything is bad. 'I failed this test; I'm going to fail at life.'\n3. **Mental Filter:** Focusing exclusively on negatives, ignoring positives. 'My boss gave me 10 compliments and 1 criticism—they hate me.'\n4. **Mind Reading:** Assuming you know what others think. 'They think I'm stupid.'\n5. **Catastrophizing:** Expecting the worst. 'This headache is probably a brain tumor.'\n6. **Should Statements:** Rigid rules that create guilt. 'I should always be productive.'\n7. **Labeling:** Defining yourself by mistakes. 'I'm an idiot' instead of 'I made a mistake.'\n\n**How to Practice CBT:**\n\n**1. Catch Automatic Thoughts:** When you feel a strong negative emotion, pause. What thought triggered it? Write it down.\n\n**2. Examine the Evidence:** Is this thought factual? What's the evidence for and against it?\n\n**3. Generate Alternative Thoughts:** What's a more balanced, realistic perspective?\n\n**4. Behavioral Experiments:** Test your fears. If you think 'Everyone will judge me if I speak up,' speak up and observe what actually happens. Reality is usually less catastrophic than fears.\n\n**5. Thought Records:** Journal situations, automatic thoughts, emotions, evidence, and alternative thoughts. This builds awareness and restructures thinking over time.\n\n**Why CBT Works:** It's skills-based and time-limited (12-20 sessions). You learn to be your own therapist. Studies show it's as effective as medication for many conditions, with lower relapse rates.\n\n**Actionable:** Next time you feel anxious or depressed, identify the thought behind the feeling. Ask: Is this thought 100% accurate? What would I tell a friend in this situation?\n\nYour thoughts aren't facts—they're interpretations. Change the interpretation, change your life."
        }
      ]
    },
    20: {
      books: [
        {
          title: "Never Get a Real Job",
          content: "Scott Gerber's Blueprint for Entrepreneurship—Why Employment is Risky:\n\n**The Premise:** In the modern economy, traditional employment is more precarious than entrepreneurship. Jobs are outsourced, automated, and eliminated during recessions. Your financial security depends on one employer's decisions. Entrepreneurship gives you control.\n\n**The Real Risk:** Having one income stream (a job) is riskier than having multiple streams (a business). If you're fired, your income drops to zero. If a business loses a client, it's a setback, not a catastrophe. Diversification is security.\n\n**Shifting Mindset:**\n- Employee mindset: Trade time for money. Receive instructions. Limited upside, guaranteed ceiling.\n- Entrepreneur mindset: Create systems that generate income. Solve problems. Unlimited upside, no ceiling.\n\n**The Fear Myth:** 'Entrepreneurship is too risky.' Gerber argues the opposite: Not controlling your financial destiny is riskier. Economic downturns prove this—employees are expendable; business owners adapt.\n\n---\n\n**Gerber's Framework for Starting Without Capital:**\n\n**1. Start Small, Start Now:**\nDon't wait for the 'perfect' idea or funding. Start with what you have. Most successful businesses began as side projects—Amazon (online bookstore), Apple (garage project), Facebook (dorm room).\n\n**Lean Startup Principles:** Build a Minimum Viable Product (MVP), test with real customers, iterate based on feedback. Don't spend months perfecting—launch and learn.\n\n**2. Solve Real Problems:**\nSuccessful businesses address pain points. Ask: What frustrates people? What inefficiencies exist? What do people complain about?\n\nExample: Uber solved 'getting a cab is annoying.' Airbnb solved 'hotels are expensive and impersonal.' Simple problems, massive markets.\n\n**3. Leverage Free Tools:**\nYou don't need capital to start. Use:\n- Free website builders (WordPress, Wix)\n- Social media for marketing (Instagram, LinkedIn, TikTok)\n- Freelance platforms to find clients (Upwork, Fiverr)\n- Email marketing (Mailchimp free tier)\n- Cloud tools (Google Drive, Slack)\n\n**4. Bootstrap—Don't Fundraise Initially:**\nVenture capital is overrated and often detrimental for early-stage founders. Taking VC money means:\n- Giving up equity and control\n- Pressure to scale prematurely\n- Obligation to exit (sell or IPO)\n\nBootstrap by: pre-selling products, offering services first (consulting, freelancing), keeping costs minimal.\n\n**5. Build an Audience Before Building a Product:**\nModern entrepreneurship is audience-first. Create content, grow a following, understand their needs, then build what they want. Examples: Every successful influencer, newsletter writer, course creator followed this path.\n\nPlatforms: YouTube, Twitter, LinkedIn, Substack, podcasts. Document your journey—people follow stories.\n\n**6. Systems Over Hustle:**\nDon't glorify 'grinding 24/7.' Build systems that work without you. Automate, delegate, outsource. The goal isn't to work more—it's to work on the business (strategy, growth), not in the business (execution).\n\nTim Ferriss (The 4-Hour Workweek): Eliminate (tasks that don't matter), automate (with software), delegate (to VAs, contractors).\n\n---\n\n**Common Mistakes and How to Avoid Them:**\n\n**1. Analysis Paralysis:** Spending months researching and planning without launching. Solution: Set a deadline—launch in 30 days, imperfect but real.\n\n**2. No Market Validation:** Building something no one wants. Solution: Talk to potential customers before building. Pre-sell to validate demand.\n\n**3. Underpricing:** Charging too little out of fear no one will buy. Solution: Price based on value delivered, not cost. Confidence commands premium pricing.\n\n**4. Trying to Do Everything:** Designing, coding, marketing, accounting—yourself. Solution: Outsource non-core tasks early. Your time is finite; focus on revenue-generating activities.\n\n**5. Ignoring Cash Flow:** Profitable on paper but running out of cash. Solution: Invoice quickly, delay expenses, maintain a cash buffer. Cash flow is king—more businesses fail from cash flow issues than lack of profit.\n\n---\n\n**Building Multiple Income Streams:**\n\nNever rely on one source. Gerber advocates for portfolio entrepreneurship:\n1. **Service business:** Consulting, freelancing (immediate income)\n2. **Product business:** Software, e-commerce (scalable)\n3. **Content/audience:** Newsletter, YouTube (long-term asset)\n4. **Investments:** Stocks, real estate (passive income)\n\nEach stream diversifies risk. If one fails, others sustain you.\n\n---\n\n**Mindset Shifts:**\n\n**Reject the 'Someday' Mentality:** 'When I have more money/time/experience, I'll start.' This is procrastination disguised as planning. You'll never feel ready—start anyway.\n\n**Embrace Failure as Data:** Every failed attempt teaches what doesn't work. Thomas Edison: 'I didn't fail 1,000 times. The lightbulb was an invention with 1,000 steps.' Reframe failure as experimentation.\n\n**Think in Decades, Not Months:** Entrepreneurship is a long game. Overnight successes are myths—most took 5-10 years of invisible work. Commit to the journey.\n\n---\n\n**Actionable Steps to Start Today:**\n\n1. **Identify Your Skill:** What can you do better than most? Writing, design, coding, marketing, coaching?\n2. **Find 10 Potential Clients:** Who needs your skill? Message them. Offer value for free initially to build portfolio/testimonials.\n3. **Create an Offer:** Package your skill into a clear service. 'I help X achieve Y in Z time.'\n4. **Launch in 7 Days:** Create a basic landing page, post on social media, reach out directly.\n5. **Iterate Based on Feedback:** Did people respond? Why or why not? Adjust and relaunch.\n\n**Conclusion:** Employment is not security—it's dependence. Entrepreneurship is not reckless—it's taking responsibility for your economic future. Start small, start now, and never look back."
        },
        {
          title: "The 80/20 Principle - Deep Dive",
          content: "The Pareto Principle—The Unequal Distribution of Results:\n\n**Origin:** In 1896, Italian economist Vilfredo Pareto observed that 80% of Italy's land was owned by 20% of the population. This pattern appeared everywhere: 80% of peas in his garden came from 20% of pods. The ratio isn't always exact—it could be 70/30 or 90/10—but the principle holds: A minority of inputs produces the majority of outputs.\n\n**Universal Application:**\n- 80% of sales come from 20% of customers\n- 80% of results come from 20% of efforts\n- 80% of wealth is held by 20% of people\n- 80% of traffic comes from 20% of roads\n- 80% of complaints come from 20% of customers\n- 80% of your happiness comes from 20% of activities\n\n**Core Insight:** Not all efforts are equal. Most of what you do is low-impact. A small portion of your actions disproportionately drives results.\n\n---\n\n**The Two Applications:**\n\n**1. 80/20 Analysis (Optimization):**\nIdentify the vital 20% and double down. Eliminate or delegate the trivial 80%.\n\n**Business Example:** A company analyzes sales data and discovers 20% of clients generate 80% of revenue. Strategy: Focus on retaining and expanding relationships with top clients. Stop chasing low-value leads.\n\n**Personal Productivity Example:** Track your tasks for a week. You'll find 20% of activities produce 80% of meaningful outcomes. Example: Writing generates leads, networking builds relationships, strategy improves direction. Meetings, emails, and admin work? Mostly low-value. Solution: Batch emails, shorten meetings, hire a VA for admin.\n\n**2. 80/20 Thinking (Leverage):**\nDon't aim for perfection or completeness. Aim for the critical 20% that delivers 80% of the value.\n\n**Example—Learning:** You don't need to master all of a subject to be competent. In language learning, 20% of words (the most common ~1,000) account for 80% of daily conversations. Master those first; ignore rare vocabulary initially.\n\n**Example—Fitness:** 20% of exercises yield 80% of results. Compound movements (squats, deadlifts, bench press, pull-ups) build most muscle. Hours on specialized machines? Diminishing returns.\n\n---\n\n**Applying 80/20 to Life:**\n\n**Career:**\n- What 20% of your work drives 80% of your recognition/success?\n- What 20% of your skills are most valuable?\n- Focus on high-leverage activities: strategic thinking, relationship-building, creative problem-solving. Outsource data entry, scheduling, and routine tasks.\n\n**Relationships:**\n- 20% of your relationships provide 80% of your support, joy, and growth. Invest in those deeply. Let superficial connections fade.\n- Quality over quantity. A few close friends > many acquaintances.\n\n**Health:**\n- 20% of health habits deliver 80% of benefits: Sleep 7-9 hours, eat whole foods, exercise 3x/week, manage stress. You don't need 17 supplements, biohacking gadgets, or extreme diets.\n\n**Learning:**\n- 20% of books/courses contain 80% of actionable insights. Most content is repetitive filler. Read summaries, focus on classics, apply principles immediately.\n\n**Finances:**\n- 20% of investments generate 80% of returns. Diversification is good, but over-diversification dilutes gains. Focus on high-conviction bets.\n- 20% of expenses account for 80% of your spending. Cut or optimize those (housing, transportation, food) to maximize savings.\n\n---\n\n**Common Mistakes:**\n\n**1. Spreading Too Thin:**\nTrying to do everything equally well. 80/20 thinking demands ruthless prioritization—focus on what matters, ignore the rest.\n\n**2. Perfectionism:**\nAiming for 100% completion when 80% delivers almost all the value. Perfectionism wastes time on diminishing returns. Ship the 80% version and iterate.\n\n**3. Guilt Over Elimination:**\nFeeling bad about dropping tasks, clients, or commitments. Remember: Saying yes to everything is saying no to what matters most. Protect your 20%.\n\n---\n\n**Advanced 80/20: Iteration**\n\nApply the principle recursively. After identifying your top 20%, analyze that subset again. The top 20% of the 20% (4% of total) likely drives 64% of results (80% of 80%). This is the 'vital few of the vital few.'\n\nExample: If 20% of clients generate 80% of revenue, focus on the top 20% of those top clients (4% of total clients)—they likely drive 64% of revenue. Give them white-glove service.\n\n---\n\n**Practical Exercise:**\n\n**1. List all your tasks/activities for the past week.**\n**2. Rank them by impact.** Which drove the most meaningful results (revenue, relationships, learning, health)?\n**3. Identify the top 20%.** These are your high-leverage activities.\n**4. Identify the bottom 80%.** These are low-leverage or wasteful.\n**5. Redesign your schedule.** Double time on the top 20%. Eliminate, delegate, or automate the bottom 80%.\n\n---\n\n**The 80/20 Mindset:**\n\nStop trying to do everything. Start asking: 'What's the 20% that matters?' In work, health, relationships, and learning—focus is power. The 80/20 principle is about working smarter, not harder. It's about leverage, not effort.\n\nMost people work on the 80% that doesn't matter. Be the outlier who obsesses over the 20% that does."
        }
      ],
      interests: [
        {
          title: "Ancient History - The Fall of Civilizations",
          content: "Patterns of Collapse—What Ancient Empires Teach Us:\n\nCivilizations don't fall overnight—they decay from within over generations. Historians identify common patterns:\n\n---\n\n**1. Overextension:**\nEmpires expand beyond their capacity to govern and defend. Resources are stretched thin, administration becomes inefficient, and distant provinces rebel or are conquered.\n\n**Example—Rome:** At its peak, Rome controlled 5 million square kilometers. Maintaining borders required massive military spending. As conquests slowed, revenue from plunder dried up, creating fiscal strain. Defending vast frontiers against 'barbarians' became unsustainable.\n\n**Modern Parallel:** Superpowers maintaining global military presences and entanglements. Overreach leads to bankruptcy and weakened domestic foundations.\n\n---\n\n**2. Economic Decline:**\nFiscal mismanagement, inflation, debt, and inequality erode economic stability.\n\n**Rome:** Emperors debased currency (reduced silver content in coins) to pay soldiers and fund projects. This caused hyperinflation. Trade disrupted, taxes soared, and the economy contracted.\n\n**Example—Weimar Germany (1920s):** Hyperinflation destroyed the economy—money became worthless. This created conditions for extremism and the rise of Hitler.\n\n**Lesson:** Sound money and fiscal discipline are foundational. Inflate your currency, and you collapse your economy.\n\n---\n\n**3. Political Instability:**\nInternal conflicts, corruption, and loss of trust in institutions weaken governance.\n\n**Rome (3rd Century Crisis):** Between 235-284 CE, Rome had 26 emperors—most assassinated. Civil wars drained resources. Provinces broke away (Gallic Empire, Palmyrene Empire). Without stable leadership, coordinated defense and administration were impossible.\n\n**Modern Parallel:** Political polarization, erosion of democratic norms, distrust in media and institutions. Societies fracture when citizens stop believing in shared values and systems.\n\n---\n\n**4. Cultural Decay:**\nLoss of shared identity, values, and civic virtue. People prioritize personal gain over collective good.\n\n**Rome:** Romans stopped volunteering for military service—armies became mercenaries with no loyalty. Civic participation declined—'bread and circuses' (free food and entertainment) kept the populace distracted but disengaged. Moral philosophers lamented decadence and corruption.\n\n**Gibbon's Decline and Fall:** Historian Edward Gibbon argued Christianity shifted focus from civic duty to spiritual salvation, weakening Roman martial values. (This is debated—correlation vs. causation.)\n\n**Lesson:** Societies collapse when citizens stop caring about the common good—when 'what's in it for me?' replaces 'what's good for us?'\n\n---\n\n**5. External Pressures:**\nInvasions, climate change, pandemics, or technological disruption that systems can't adapt to.\n\n**Rome:** Germanic tribes (Goths, Vandals) invaded, not because they were stronger, but because Rome was weaker. The sack of Rome in 410 CE by Visigoths shocked the world—Rome, 'the Eternal City,' was mortal.\n\n**Example—Maya Civilization:** Drought (climate change) caused crop failures, leading to famine, societal collapse, and abandonment of cities. Unable to adapt, they fragmented.\n\n**Modern Risk:** Climate change, pandemics, cyberwarfare, and AI disruption test our systems. Civilizations that adapt survive; those that don't, collapse.\n\n---\n\n**6. Loss of Innovation:**\nStagnation in technology, science, and ideas. Past successes breed complacency.\n\n**China (Ming Dynasty):** After early innovations (gunpowder, printing, navigation), China turned inward. By the 19th century, Western powers with superior technology (steam engines, modern firearms) dominated China, leading to the 'Century of Humiliation.'\n\n**Lesson:** Rest on your laurels, and you're overtaken. Continuous innovation is survival.\n\n---\n\n**The Cycle (Ibn Khaldun's Theory):**\n\n14th-century Arab historian Ibn Khaldun proposed a civilizational life cycle:\n\n1. **Pioneers (Generation 1):** Hardship breeds solidarity, courage, and ambition. A group conquers or builds.\n2. **Builders (Generation 2):** They inherit the kingdom, consolidate power, build institutions.\n3. **Enjoyers (Generation 3):** They inherit wealth, enjoy luxury, lose the 'edge' that built the civilization.\n4. **Decadents (Generation 4):** Soft, entitled, disconnected from struggle—they're conquered by a new, hungry group (back to stage 1).\n\n**Khaldun's Insight:** 'Hard times create strong people. Strong people create good times. Good times create weak people. Weak people create hard times.' Civilizations are cyclical.\n\n---\n\n**Can Collapse Be Avoided?**\n\nSome civilizations adapt and survive:\n\n**Egypt:** Lasted 3,000+ years by adapting to invasions (Hyksos, Assyrians, Persians) and integrating foreign rulers (Ptolemies, Romans).\n\n**China:** Repeatedly fragmented and reunified—each dynasty learned from predecessors' mistakes.\n\n**Modern Examples:** Post-WWII Europe rebuilt with new institutions (EU, NATO) to prevent past mistakes (nationalism, war). Japan and Germany transformed from ruins into economic powerhouses.\n\n**Keys to Avoiding Collapse:**\n- **Adaptability:** Embrace change, innovate, reform outdated systems.\n- **Strong Institutions:** Rule of law, checks and balances, meritocracy.\n- **Shared Values:** Civic virtue, trust, collective purpose.\n- **Economic Sustainability:** Sound money, manageable debt, investment in infrastructure and education.\n- **External Engagement:** Trade, alliances, cultural exchange (but not overextension).\n\n---\n**Conclusion:**\n\nHistory is a graveyard of empires—Rome, Persia, Maya, Mongols, Ottoman, Soviet Union. None thought they'd fall. All did. The question isn't if civilizations collapse—it's whether we learn the lessons to delay or prevent it. Vigilance, adaptability, and humility are civilization's immune system."
        }
      ]
    }
  };

  const generateContent = () => {
    if (!selectedTime) return;

    const timeContent = content[selectedTime];
    const allSources = [...timeContent.books, ...timeContent.interests];
    const randomContent = allSources[Math.floor(Math.random() * allSources.length)];

    setCurrentContent(randomContent);
    setIsRevealed(true);
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
          paddingTop: '40px'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '16px'
          }}>
            <Brain size={40} color="#007AFF" strokeWidth={2.5} />
            <h1 style={{
              fontSize: '42px',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0,
              letterSpacing: '-0.5px'
            }}>
              Grind Time
            </h1>
          </div>
          <p style={{
            fontSize: '17px',
            color: '#6c757d',
            fontWeight: '400',
            margin: 0,
            letterSpacing: '0.2px'
          }}>
            Micro-learning for the unstoppable
          </p>
        </div>

        {/* Time Selection */}
        {!currentContent && (
          <div style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '32px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            marginBottom: '24px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px'
            }}>
              <Clock size={24} color="#007AFF" />
              <h2 style={{
                fontSize: '22px',
                fontWeight: '600',
                margin: 0,
                color: '#1d1d1f'
              }}>
                Choose your learning duration
              </h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '12px'
            }}>
              {[5, 10, 15, 20].map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  style={{
                    padding: '20px',
                    fontSize: '18px',
                    fontWeight: '600',
                    border: selectedTime === time ? '2.5px solid #007AFF' : '2px solid #e5e5e7',
                    borderRadius: '14px',
                    backgroundColor: selectedTime === time ? '#F0F7FF' : 'white',
                    color: selectedTime === time ? '#007AFF' : '#1d1d1f',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    outline: 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedTime !== time) {
                      e.currentTarget.style.backgroundColor = '#fafafa';
                      e.currentTarget.style.borderColor = '#d1d1d6';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedTime !== time) {
                      e.currentTarget.style.backgroundColor = 'white';
                      e.currentTarget.style.borderColor = '#e5e5e7';
                    }
                  }}
                >
                  {time} min
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Generate Button */}
        {selectedTime && !currentContent && (
          <button
            onClick={generateContent}
            style={{
              width: '100%',
              padding: '18px',
              fontSize: '18px',
              fontWeight: '600',
              backgroundColor: '#007AFF',
              color: 'white',
              border: 'none',
              borderRadius: '14px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              boxShadow: '0 4px 16px rgba(0, 122, 255, 0.3)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0051D5';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 122, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#007AFF';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 122, 255, 0.3)';
            }}
          >
            <Sparkles size={20} />
            Start Learning
          </button>
        )}

        {/* Content Display */}
        {currentContent && (
          <div style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            marginBottom: '24px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px',
              paddingBottom: '20px',
              borderBottom: '1px solid #f5f5f7'
            }}>
              <BookOpen size={24} color="#007AFF" />
              <h2 style={{
                fontSize: '26px',
                fontWeight: '700',
                margin: 0,
                color: '#1d1d1f',
                letterSpacing: '-0.3px'
              }}>
                {currentContent.title}
              </h2>
            </div>
            
            <div style={{
              fontSize: '17px',
              lineHeight: '1.7',
              color: '#1d1d1f',
              whiteSpace: 'pre-line',
              fontWeight: '400',
              letterSpacing: '0.1px'
            }}>
              {currentContent.content}
            </div>
          </div>
        )}

        {/* Action Button */}
        {currentContent && (
          <button
            onClick={() => {
              setCurrentContent(null);
              setIsRevealed(false);
            }}
            style={{
              width: '100%',
              padding: '18px',
              fontSize: '18px',
              fontWeight: '600',
              backgroundColor: '#34C759',
              color: 'white',
              border: 'none',
              borderRadius: '14px',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(52, 199, 89, 0.3)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2FB350';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(52, 199, 89, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#34C759';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(52, 199, 89, 0.3)';
            }}
          >
            Next Session →
          </button>
        )}
      </div>
    </div>
  );
};

export default GrindTimeApp;