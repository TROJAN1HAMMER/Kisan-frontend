// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MarketPage from './pages/MarketPage';
import WeatherPage from './pages/WeatherPage';
import DiagnosePage from './pages/DiagnosePage';
import TranslatePage from './pages/TranslatePage';
import SchemesPage from './pages/SchemesPage';
import RoverPage from './pages/RoverPage';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SunIcon, MoonIcon } from 'lucide-react';
import AssistantPage from './pages/AssistantPage';
// 🔁 Animated expandable section component
function ExpandableSection({ title, children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="shadow-md dark:bg-zinc-900 dark:text-white cursor-pointer border border-green-300 dark:border-green-800 rounded-lg overflow-hidden"
        whileHover={{ scale: 1.01 }}
        onClick={() => setExpanded(!expanded)}
      >
        <motion.div layout className="px-6 py-4 bg-green-50 dark:bg-zinc-800">
          <h3 className="text-lg font-bold text-green-700 dark:text-green-300">
            {title}
          </h3>
        </motion.div>
        <AnimatePresence>
          {expanded && (
            <motion.div
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="px-6 py-4 text-gray-800 dark:text-gray-200 bg-white dark:bg-zinc-900"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-green-50 dark:from-zinc-900 dark:to-zinc-800 text-gray-900 dark:text-white transition-colors">
      {/* ✅ Navbar */}
      <motion.nav
        className="bg-white dark:bg-zinc-900 shadow sticky top-0 z-50 px-6 py-3 flex flex-wrap items-center justify-between border-b dark:border-zinc-700"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap gap-4 text-sm font-medium text-green-800 dark:text-green-300">
          {[
            ['🏠 Home', '/'],
            ['📈 Market', '/market'],
            ['🌦️ Weather', '/weather'],
            ['🩺 Diagnose', '/diagnose'],
            ['🗣️ Translate', '/translate'],
            ['📜 Schemes', '/schemes'],
            ['🤖 Rover', '/rover'],
            ['Assistant', '/assistant']
          ].map(([label, path]) => (
            <Button
              key={path}
              variant="ghost"
              className="hover:bg-green-100 dark:hover:bg-zinc-800 p-2 rounded-xl"
            >
              <Link to={path}>{label}</Link>
            </Button>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-auto"
          >
            {theme === 'light' ? (
              <MoonIcon className="w-5 h-5" />
            ) : (
              <SunIcon className="w-5 h-5" />
            )}
          </Button>
        </div>
      </motion.nav>

      {/* ✅ Main Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <motion.main
              className="p-6 max-w-5xl mx-auto space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                className="text-3xl font-bold text-green-700 dark:text-green-300 mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                🌾 Project KisanM - Agentic AI Day Hackathon
              </motion.h1>

              <ExpandableSection title="🚨 Problem Statement">
                <p>
                  Rohan, a young farmer in rural Karnataka, inspects his tomato crop.
                  A strange pattern of yellow spots has appeared on several leaves.
                  Is it a fungus? A pest? Wrong fertilizer?
                  The local agriculture office is miles away, and he also struggles
                  with volatile mandi prices. What he needs is not more data, but
                  an expert in his pocket.
                </p>
              </ExpandableSection>

              <ExpandableSection title="🎯 Objective">
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Personal Agronomist:</strong> Diagnose crop diseases using Gemini.</li>
                  <li><strong>Market Analyst:</strong> Real-time crop price & trend.</li>
                  <li><strong>Scheme Navigator:</strong> Government subsidy help.</li>
                  <li><strong>Voice-first AI:</strong> Speech support in Kannada.</li>
                </ul>
              </ExpandableSection>

              <ExpandableSection title="🛠️ Tech Stack">
                <p>Vertex AI (Gemini, STT/TTS), FastAPI, React + Vite, Tailwind CSS, ShadCN UI, Firebase Hosting.</p>
              </ExpandableSection>

              <ExpandableSection title="👥 Team Members">
                <ul className="list-disc list-inside space-y-1">
                  <li>Ketan Chouhan</li>
                  <li>Surmai</li>
                  <li>Harshithaa</li>
                  <li>Nikhilesh Puri</li>
                  <li>Harshith</li>
                </ul>
              </ExpandableSection>
            </motion.main>
          }
        />
        <Route path="/assistant" element={<AssistantPage />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/diagnose" element={<DiagnosePage />} />
        <Route path="/translate" element={<TranslatePage />} />
        <Route path="/schemes" element={<SchemesPage />} />
        <Route path="/rover" element={<RoverPage />} />
      </Routes>
    </div>
  );
}

export default App;
