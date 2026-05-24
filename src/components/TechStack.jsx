import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiNextdotjs, SiMongodb, SiMongoose 
} from 'react-icons/si';
import { MdVerifiedUser } from 'react-icons/md';

const SkillGrid = ({ title, skills }) => (
  <div className="space-y-6">
    <h3 
      style={{ color: 'var(--text-primary)' }}
      className="text-xl font-extrabold flex items-center gap-2 px-2 transition-colors duration-300"
    >
      <span className="w-1.5 h-6 bg-sky-500 rounded-xs inline-block"></span>
      {title}
    </h3>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
      {skills.map((skill, i) => (
        <div 
          key={i} 
          style={{ 
            backgroundColor: 'var(--card-bg)', 
            borderColor: 'var(--card-border)' 
          }}
          className="p-5 border rounded-2xl flex flex-col items-center justify-center text-center gap-3 hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-1 group shadow-xs"
        >
          {/* উপরে আইকন */}
          <div className="text-4xl transition-transform group-hover:scale-110">
            {skill.icon}
          </div>
          
          {/* নিচে টুলের নাম */}
          <span 
            style={{ color: 'var(--text-primary)' }}
            className="font-black text-xs sm:text-sm tracking-wide transition-colors duration-300"
          >
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default function TechStack() {
  const frontendSkills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
    { name: "JS ES6+", icon: <FaJsSquare className="text-yellow-600" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-500" /> },
    { name: "Next.js 15/16", icon: <SiNextdotjs className="text-slate-800 dark:text-white" /> },
  ];

  const backendToolsSkills = [
    { name: "Better Auth", icon: <MdVerifiedUser className="text-indigo-600" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-emerald-600" /> },
    { name: "Mongoose", icon: <SiMongoose className="text-red-600" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-slate-800 dark:text-white" /> },
  ];

  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-6 space-y-16">
      <div className="text-center">
        <h2 
          style={{ color: 'var(--text-primary)' }}
          className="text-3xl sm:text-4xl font-black tracking-tight transition-colors duration-300"
        >
          Tech Stack & Skills
        </h2>
        <p 
          style={{ color: 'var(--text-secondary)' }}
          className="font-bold mt-2 text-sm sm:text-base transition-colors duration-300"
        >
          যেসব প্রযুক্তি নিয়ে আমি প্রতিদিন কাজ করি
        </p>
      </div>

      <SkillGrid title="Frontend Skills" skills={frontendSkills} />
      <SkillGrid title="Backend & Tools" skills={backendToolsSkills} />
    </section>
  );
}