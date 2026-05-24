import { Poppins } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata = {
  title: 'Sabbir Hossain | Full Stack Web Developer',
  description: 'Portfolio of Sabbir Hossain - MERN & Next.js Expert building high-performance web applications.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}