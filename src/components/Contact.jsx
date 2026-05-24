import { FiMail, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-3xl mx-auto px-6 text-center space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-extrabold">Get In Touch</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto text-sm md:text-base">
          তোমার কোনো প্রজেক্ট আইডিয়া থাকলে বা আলোচনার জন্য সরাসরি নিচের মাধ্যমে যোগাযোগ করতে পারো।
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-sm">
        <a href="mailto:mshb5778@gmail.com" className="flex flex-col items-center p-5 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl hover:border-sky-500 transition-all group">
          <FiMail className="text-2xl text-sky-500 mb-2 group-hover:scale-110 transition-transform" />
          <span className="font-semibold">Email Me</span>
          <span className="text-xs text-slate-400 mt-1 break-all">mshb5778@gmail.com</span>
        </a>
        <a href="tel:+8801345574904" className="flex flex-col items-center p-5 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl hover:border-green-500 transition-all group">
          <FiPhone className="text-2xl text-green-500 mb-2 group-hover:scale-110 transition-transform" />
          <span className="font-semibold">Call Me</span>
          <span className="text-xs text-slate-400 mt-1">+8801345574904</span>
        </a>
        <a href="https://wa.me/8801345574904" target="_blank" className="flex flex-col items-center p-5 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl hover:border-emerald-600 transition-all group">
          <FaWhatsapp className="text-2xl text-emerald-500 mb-2 group-hover:scale-110 transition-transform" />
          <span className="font-semibold">WhatsApp</span>
          <span className="text-xs text-slate-400 mt-1">Message Directly</span>
        </a>
      </div>
    </section>
  );
}