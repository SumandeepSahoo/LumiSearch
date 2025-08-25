# 🔍 LumiSearch

LumiSearch is an **AI-powered semantic search application**.  
It lets you search through your data using **natural language queries**, powered by embeddings and vector search.

---

## ✨ Features
- ⚡ Fast, intelligent semantic search  
- 🧠 AI embeddings with OpenAI / Gemini  
- 🗄️ Database & vector store powered by **Drizzle ORM** + **Upstash Vector**  
- 🎨 Clean UI with **Next.js + TailwindCSS + shadcn/ui**  
- 🔐 Secure environment variable management with **dotenv**  
- 📦 TypeScript-first development  

---

## 📸 Screenshots & Demo

### Home Page
<img width="959" height="446" alt="Screenshot 2025-08-26 002250" src="https://github.com/user-attachments/assets/87782465-58ff-4cc5-8dff-70b73dc80b1c" />

### Search in Action
![Search Demo](./public/screenshots/search.gif)

*(You can replace these paths with your own screenshots / demo GIFs later.)*

---

## 📂 Project Structure
```
LumiSearch/
├── src/ # Application source code
│ ├── db/ # Database setup & seeding
│ ├── lib/ # Helpers (vectorize, openai client, etc.)
│ ├── components/ # UI components
│ └── pages/ # Next.js routes
├── public/ # Static assets
├── drizzle.config.ts # Drizzle ORM config
├── tailwind.config.ts # TailwindCSS config
├── package.json
├── tsconfig.json
└── .env.example # Example env file
```

## ⚙️ Installation & Setup

### 1. Clone the repo
    git clone https://github.com/yourusername/lumisearch.git
    cd lumisearch

### 2. Install dependencies
      bash
      yarn install
### 3. Setup environment variables

    Create a .env file based on .env.example:
    OPENAI_API_KEY=your_openai_key
    GEMINI_API_KEY=your_gemini_key
    UPSTASH_VECTOR_URL=your_upstash_url
    UPSTASH_VECTOR_TOKEN=your_upstash_token

### 4. Run database migrations
    bash
    yarn drizzle:push
### 5. Seed the database (optional demo data)
    bash
    yarn drizzle:seed
### 6. Start the development server
    bash
    yarn dev
    Now visit 👉 http://localhost:3000


## 🤝 Contributing
```
Pull requests are welcome!
If you’d like to contribute:
Fork the repo
Create a new branch (git checkout -b feature-xyz)
Commit your changes
Push and open a PR 🚀
```

---
