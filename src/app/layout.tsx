import type { Metadata } from 'next';

import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter } from 'next/font/google';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter-sans',
});

const metaTitle = 'SDKMAN! the Software Development Kit Manager';

export const metadata: Metadata = {
  title: {
    template: `%s | ${metaTitle}`,
    default: metaTitle,
  },
  openGraph: {
    type: 'website',
    siteName: 'SDKMAN!',
    description:
      'SDKMAN! is a tool for managing parallel versions of multiple Software Development Kits on most Unix based systems.',
    images: 'https://sdkman.io/img/bubble-logo-sdkman-groovy-color.png',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sdkman_',
    creator: '@sdkman_',
    images: 'https://sdkman.io/img/bubble-logo-sdkman-groovy-color.png',
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-full min-h-screen flex-col">
            <Navbar />

            <div className="grow">{children}</div>

            <Footer />
          </div>
        </ThemeProvider>

        <GoogleAnalytics gaId="UA-10247295-12" />
      </body>
    </html>
  );
}
