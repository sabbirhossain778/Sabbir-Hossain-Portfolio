export default function About() {
  return (
    <section id="about" className="py-24 max-w-4xl mx-auto px-6 space-y-8">
      <div className="max-w-2xl">
        <h2 
          style={{ color: 'var(--text-primary)' }}
          className="text-3xl font-extrabold transition-colors duration-300"
        >
          About Me
        </h2>
        <p 
          style={{ color: 'var(--text-secondary)' }}
          className="mt-4 text-base leading-relaxed font-semibold transition-colors duration-300"
        >
          আমি একজন ডেডিকেটেড ওয়েব ডেভেলপার, যার কোডিং জার্নি শুরু হয়েছিল প্রোগ্রামিং হিরোর হাত ধরে। 
          ক্লিন কোড এবং চমৎকার ইউজার এক্সপেরিয়েন্স তৈরি করাই আমার প্রধান লক্ষ্য। বর্তমানে আমি আধুনিক UI ট্রেন্ড 
          এবং Next.js ১৫/১৬ এর অ্যাডভান্সড আর্কিটেকচার নিয়ে প্রজেক্ট তৈরি করছি।
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <div 
          style={{ 
            backgroundColor: 'var(--card-bg)', 
            borderColor: 'var(--card-border)' 
          }}
          className="p-5 border rounded-2xl transition-colors duration-300"
        >
          <h4 className="font-black text-purple-600 dark:text-purple-400 text-sm tracking-wide uppercase">
            Extracurricular Activities
          </h4>
          <p 
            style={{ color: 'var(--text-primary)' }}
            className="mt-2 text-sm font-bold transition-colors duration-300"
          >
            Proud Member of BNCC (Bangladesh National Cadet Corps).
          </p>
        </div>

        <div 
          style={{ 
            backgroundColor: 'var(--card-bg)', 
            borderColor: 'var(--card-border)' 
          }}
          className="p-5 border rounded-2xl transition-colors duration-300"
        >
          <h4 className="font-black text-sky-600 dark:text-sky-400 text-sm tracking-wide uppercase">
            Sports & Athletics
          </h4>
          <p 
            style={{ color: 'var(--text-primary)' }}
            className="mt-2 text-sm font-bold transition-colors duration-300"
          >
            Passionate Runner (Completed 7.5KM & active in sports).
          </p>
        </div>
      </div>
    </section>
  );
}