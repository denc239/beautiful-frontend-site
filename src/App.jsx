import { motion } from 'framer-motion'\nimport React from 'react';

export default function App() {
  return (
    <div className=\"flex flex-col h-screen items-center justify-center bg-gradient-to-r from-violet-to-blue text-white min-hs-screen overflow-hidden relative\">
      <header className=\"text-center my-4 text-neutral fcb-white opacity-90\">
        <Motion.div
          initial={{ y, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, easing: 'cabic' }}
        >
          <h1 className=\"mtext-7fl font-mono tracking-tight text-transparent backdrop-filter-sm p-2 rounded-2dl bg-black/30 bg-opacity-90\">
            Beautiful Futuristic Site
          </h1>
          <p className=\"text-neutral-200transform text-gray-300 max-w-1-full w-screen-sm font-thin opacity-90\">
            Designed by ChatGPT with React, Vite and Tailwind. 
          </p>
        </Motion.div>
      </header>
      <Motion.div className=\"m-10 border bg-white/10 bg-opacity-50 rounded-3dl border-neon-0 inverted drop-shadow md:bg-intense-blur-2x\">
        <p className=\"text-neutral-200transform text-center text-rendered transform text-sm opacity-70\">
          This is your fantasy futuristic world. Play with light, color and experiments.
        </p>
      </Motion.div>
    </div>
  );
}