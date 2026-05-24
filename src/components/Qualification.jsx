export default function Qualification() {
  const education = [
    { title: "BBA in Accounting", institution: "Narsingdi Government College", year: "Present" },
    { title: "Higher Secondary Certificate (HSC)", institution: "Dhaka Commerce College", year: "Business Studies | GPA: 5.00" },
    { title: "Secondary School Certificate (SSC)", institution: "Janata Adarsha Bidyapith", year: "Completed" }
  ];

  return (
    <section id="qualification" className="py-24 max-w-3xl mx-auto px-6 space-y-10">
      <h2 
        style={{ color: 'var(--text-primary)' }}
        className="text-3xl font-black text-center transition-colors duration-300"
      >
        Educational Qualification
      </h2>
      
      <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-300 dark:before:bg-slate-800">
        {education.map((item, i) => (
          <div key={i} className="relative pl-10 group">
            <div className="w-3 h-3 bg-sky-500 dark:bg-sky-400 rounded-full absolute left-2.5 top-2 transition-transform group-hover:scale-125 shadow-md shadow-sky-500/50" />
            <div 
              style={{ 
                backgroundColor: 'var(--card-bg)', 
                borderColor: 'var(--card-border)' 
              }}
              className="border p-5 rounded-2xl shadow-xs transition-colors duration-300"
            >
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400">
                {item.year}
              </span>
              
              <h3 
                style={{ color: 'var(--text-primary)' }}
                className="text-lg font-black mt-1 transition-colors duration-300"
              >
                {item.title}
              </h3>
            
              <p 
                style={{ color: 'var(--text-secondary)' }}
                className="text-sm font-bold mt-0.5 transition-colors duration-300"
              >
                {item.institution}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}