'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaArrowRight } from 'react-icons/fa';

export default function Projects() {

  const [activeProject, setActiveProject] = useState(null);

  const projectsData = [
    {
      id: "tiles-gallery",
      name: "Tiles Gallery",
      image: "/tiles-gallery.png",
      brief: "Better-Auth এবং MongoDB Atlas দিয়ে তৈরি একটি আধুনিক ও সিকিউর ইমেজ এবং আর্ট গ্যালারি প্ল্যাটফর্ম।",
      tech: ["Next.js 15", "Tailwind CSS", "Better-Auth", "MongoDB", "Mongoose"],
      liveLink: "https://a8-tiles-gallery-chi.vercel.app/",
      repoLink: "https://github.com/sabbirhossain778/A8-Tiles-Gallery",
      challenges: "Next.js 15 এর নতুন সার্ভার কম্পোনেন্ট আর্কিটেকচারের সাথে Better-Auth সেশন ম্যানেজমেন্ট সিঙ্ক করা এবং ইমেজ আপলোডের পারফরম্যান্স অপ্টিমাইজ করা বেশ চ্যালেঞ্জিং ছিল।",
      futurePlans: "ইউজারদের জন্য কাস্টম কালেকশন বা ফোল্ডার তৈরি করার সুবিধা যোগ করা এবং ড্র্যাগ-অ্যান্ড-ড্রপ গ্রিড রি-অ্যারেঞ্জমেন্ট ফিচার যুক্ত করা।"
    },
    {
      id: "study-nook",
      name: "Study Nook",
      image: "/study-nook.png",
      brief: "শিক্ষার্থীদের জন্য একটি ইন্টারঅ্যাক্টিভ লার্নিং এবং স্টাডি ট্র্যাকিং ওয়েব অ্যাপ্লিকেশন।",
      tech: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      liveLink: "https://a9-study-nook-client-side.vercel.app", 
      repoLink: "https://github.com/sabbirhossain778/A9-StudyNook-ClientSide",
      challenges: "রিয়েল-টাইম স্টাডি প্রগ্রেস ক্যালকুলেশন এবং ডাটাবেজে একাধিক রিলেশনাল ডেটা রিলেশন মেইনটেইন করা প্রথম দিকে কঠিন ছিল।",
      futurePlans: "গ্রুপ স্টাডি রুমের জন্য লাইভ চ্যাট অপশন এবং স্টাডি রিমাইন্ডারের জন্য পুশ নোটিফিকেশন সিস্টেম ইন্টিগ্রেট করা।"
    },
    {
      id: "keen-keeper",
      name: "Keen Keeper",
      image: "/keen-keeper.png",
      brief: "স্মার্ট টাস্ক ও প্রোডাক্টিভিটি ম্যানেজমেন্ট টুল, যা কাজের গতি এবং ডেইলি রুটিন ট্র্যাক করতে সাহায্য করে।",
      tech: ["React.js", "Tailwind CSS", "DaisyUI", "Node.js", "MongoDB"],
      liveLink: "https://a7-keen-keeper-ten.vercel.app/",
      repoLink: "https://github.com/sabbirhossain778/a7-keen-keeper",
      challenges: "লোকাল স্টেট ও ডাটাবেজ স্টেটের মধ্যে রি-রেন্ডারিং ইস্যু ছাড়াই টাস্ক ফিল্টারিং এবং ডাইনামিক কাউন্টিং ফিচার রিয়েল-টাইমে হ্যান্ডেল করা।",
      futurePlans: "উন্নত ডেটা ভিজ্যুয়ালাইজেশনের জন্য চার্ট (Charts.js) যুক্ত করা এবং ক্যালেণ্ডার ভিউ ইন্টারফেস তৈরি করা।"
    }
  ];

  return (
    <section id="projects" className="py-24 max-w-5xl mx-auto px-6 space-y-12">

      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight">Featured Projects</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">
          আমার তৈরি করা কিছু সেরা প্রজেক্ট যা বাস্তব জীবনের সমস্যা সমাধানে সাহায্য করে
        </p>
      </div>

      {/*  Card Format */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <div 
            key={project.id}
           className="group flex flex-col bg-white dark:bg-[#131c31] border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1 shadow-xs"
          >
            {/* img */}
            <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6 flex flex-col grow justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-sky-500 transition-colors">
                  {project.name}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 line-clamp-3">
                  {project.brief}
                </p>
              </div>

              {/* View Details */}
              <button
                onClick={() => setActiveProject(project)}
                className="mt-6 w-full py-2.5 px-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 text-slate-700 dark:text-slate-300 text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              >
                <span>Details View</span>
                <FaArrowRight className="text-xs" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col animate-scaleUp">
            
            {/* btn */}
            <button 
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
            >
              <FaTimes />
            </button>

            {/* modal */}
            <div className="overflow-y-auto p-6 space-y-6">
              <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image 
                  src={activeProject.image} 
                  alt={activeProject.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-slate-800 dark:text-white">{activeProject.name}</h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {activeProject.tech.map((t, idx) => (
                    <span key={idx} className="text-xs font-semibold px-2.5 py-1 bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-700 dark:text-slate-300">Project Description:</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{activeProject.brief}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-red-500 dark:text-red-400">Challenges Faced:</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{activeProject.challenges}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-emerald-500 dark:text-emerald-400">Future Plans & Improvements:</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{activeProject.futurePlans}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <a 
                  href={activeProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  <span>Live Project Link</span>
                </a>
                <a 
                  href={activeProject.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <FaGithub className="text-base" />
                  <span>GitHub Repository</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}

