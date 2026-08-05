import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Gemini AI Assistant Proxy Route
  app.post('/api/chat', async (req, res) => {
    try {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        // Smart static response if GEMINI_API_KEY is not set
        return res.json({
          reply: `Gurleen Kaur is a Computer Science Engineering student at K.R. Mangalam University (2023–2027). She has completed key internships including LLM Post-Training Intern at Ethara.ai (working on Talos and Fenrir AI models), Front-End Intern at Writo Education (OPS Naturals), and UI/UX Intern at Lakshay Industries. You can reach her at kaurgurleen0202@gmail.com.`
        });
      }

      const ai = new GoogleGenAI({ apiKey });

      const systemPrompt = `You are an AI assistant representing Gurleen Kaur's personal portfolio. 
Gurleen Kaur is a Computer Science and Engineering student at K.R. Mangalam University (2023–2027) with CGPA 7.0/10, based in Gurugram / Faridabad, Haryana, India.
Contact: Email: kaurgurleen0202@gmail.com, Phone: +91-8178126477.
Roles & Focus: Full Stack Developer, AI Enthusiast, UI/UX Designer.
Coursework: Data Structures, Database Management Systems, Object-Oriented Programming, Data Analysis.
Experience:
1. LLM Post-Training Intern at Ethara.ai (April 2026 - August 2026): Worked on Talos & Fenrir AI models, post-training workflows, prompt engineering, AI alignment.
2. Front-End Developer Intern at Writo Education (June 2025 - August 2025): Built OPS Naturals official website using HTML, CSS, JavaScript & UI/UX mockups.
3. Intern at Lakshay Industries (June 2024 - July 2024): UI/UX design & front-end concepts.
Projects: Yggdrasil (Journal & Productivity platform), ByteStock (Android GST inventory app), ProTrack (Collaborative workspace), Punjab Fabricators, OPS Naturals.
Skills: Java, Python, C++, Neural Networks, OpenAI GPT, LLM Post-Training, Prompt Engineering, NumPy, Git, Figma, UI/UX, Full Stack.
Achievements: College entrepreneurship initiative with AtoZ Naturals (brand promotion & engagement).

Respond to recruiters and visitors in a polite, professional, and enthusiastic 2-3 sentence answer about Gurleen's background.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: `${systemPrompt}\n\nVisitor Question: ${message}` }] }
        ]
      });

      const reply = response.text || "Gurleen Kaur is a B.Tech CSE student passionate about Full Stack Development, AI/ML, and UI/UX Design.";
      res.json({ reply });

    } catch (error) {
      console.error('Error generating AI response:', error);
      res.json({
        reply: "Gurleen Kaur is a B.Tech CSE student at K.R. Mangalam University with expertise in Full Stack Development, LLM Post-Training at Ethara.ai, and UI/UX Design. You can contact her at kaurgurleen0202@gmail.com."
      });
    }
  });

  // Vite middleware in development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
