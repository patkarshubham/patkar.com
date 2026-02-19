import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Onest } from 'next/font/google';
import './globals.css';
import { ToasterProvider } from './providers/toaster';

const onest = Onest({
  subsets: ['latin'],
});

const siteUrl = 'https://patkars.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'patkars.com – AI-Powered Tools & SaaS',
    template: '%s | patkars.com',
  },
  description:
    'patkars.com – Transform Your Business with AI-Powered Digital Solutions. Streamline your workflow, boost productivity, and redefine success.',
  keywords: ['patkars.com', 'AI tools', 'SaaS', 'productivity'],
  authors: [{ name: 'patkars.com', url: siteUrl }],
  creator: 'patkars.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'patkars.com',
    title: 'patkars.com – AI-Powered Tools & SaaS',
    description:
      'Transform Your Business with AI-Powered Digital Solutions. Streamline your workflow, boost productivity, and redefine success.',
    images: [
      {
        url: '/images/hero/hero-img.jpg',
        width: 966,
        height: 552,
        alt: 'patkars.com',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'patkars.com – AI-Powered Tools & SaaS',
    description:
      'Transform Your Business with AI-Powered Digital Solutions. Streamline your workflow, boost productivity, and redefine success.',
    images: ['/images/hero/hero-img.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-gray-50 dark:bg-dark-secondary min-h-screen flex flex-col ${onest.className}`}
      >
        <ThemeProvider disableTransitionOnChange>
          {/* ToasterProvider must render before the children components */}
          {/* https://github.com/emilkowalski/sonner/issues/168#issuecomment-1773734618 */}
          <ToasterProvider />

          <div className="isolate flex flex-col flex-1">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
