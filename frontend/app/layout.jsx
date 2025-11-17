import { Merriweather, DM_Sans } from 'next/font/google';
import './globals.css';

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather',
});

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const metadata = {
  title: 'Applicant Form',
  description: 'Multi-step applicant form',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}

