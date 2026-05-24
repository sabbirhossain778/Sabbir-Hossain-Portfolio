'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const handleResumeAlert = (e) => {
    e.preventDefault();
    alert("Resume is not ready yet! It's being updated.");
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 space-y-8 relative overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-500/10 dark:bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-1 bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-600 shadow-xl"
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 relative">
          <Image 
            src="/sabbir.jpeg" 
            alt="Sabbir Hossain" 
            fill
            priority
            className="object-cover"
          />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-4 max-w-3xl"
      >
        <span className="text-sky-500 dark:text-sky-400 font-semibold tracking-widest uppercase text-xs bg-sky-500/10 px-4 py-1.5 rounded-full">
          Full Stack Web Developer
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent leading-tight py-1">
          Hi, I'm Sabbir Hossain
        </h1>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          আমি একজন প্রফেশনাল MERN Stack এবং Next.js ডেভেলপার। আধুনিক, হাই-পারফরম্যান্স এবং ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন তৈরি করাই আমার মূল লক্ষ্য।
        </p>

        {/* Buttons including Requirement 3 */}
        <div className="pt-6 flex flex-wrap justify-center gap-4">
          <a href="#projects" className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 rounded-xl transition-all shadow-md shadow-sky-500/20 active:scale-95">
            View My Works
          </a>
          <button 
            onClick={handleResumeAlert}
            className="border border-slate-300 dark:border-slate-700 hover:border-sky-500 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl transition-all active:scale-95 cursor-pointer"
          >
            Download Resume
          </button>
        </div>
      </motion.div>
    </section>
  );
}
